// src/actions/sendContact.ts
"use server";
import { headers } from "next/headers";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// 1. Initialize Upstash Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// 2. Create a sliding window rate limiter (3 requests per 1 hour)
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  analytics: true, 
});

export async function sendContactForm(data: { name: string; email: string; message: string }) {
  const discordUrl = process.env.DISCORD_WEBHOOK_URL;
  const formspreeUrl = process.env.FORMSPREE_URL;

  if (!discordUrl || !formspreeUrl) {
    return { success: false, error: "Server configuration error." };
  }

  // 3. Extract the user's IP Address
  // Vercel and most modern hosts pass the real IP in the 'x-forwarded-for' header
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";

  // 4. Check the rate limit
  const { success } = await ratelimit.limit(`ratelimit_contact_${ip}`);

  if (!success) {
    console.warn(`[RATE LIMIT TRIGGERED] IP: ${ip}`);
    return { 
      success: false, 
      error: "Whoa there! You've sent too many messages. Please wait an hour and try again." 
    };
  }

  // 5. If they passed the check, send the payloads!
  try {
    // Send to Formspree
    await fetch(formspreeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Send to Discord
    const discordPayload = {
      content: `🚨 **New Portfolio Message!** 🚨\n\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Message:**\n> ${data.message}`,
      username: "Portfolio Bot",
    };

    await fetch(discordUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    return { success: true };
  } catch (error) {
    console.error("Backend transmission error:", error);
    return { success: false, error: "Failed to send message." };
  }
}