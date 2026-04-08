import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from '@vercel/analytics/react';

// Setting up our Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Emmanuel. | Full Web Stack Developer",
  description: "Portfolio of Emmanuel, a Full Web Stack Developer specializing in robust backends, secure APIs, and bold digital experiences.",
  keywords: ["Backend Developer", "Full Stack", "Node.js", "Next.js", "Lagos Developer", "Software Engineer"],
  openGraph: {
    title: "Emmanuel. | Developer Portfolio",
    description: "Crafting robust backends and bold digital experiences.",
    url: "https://codebynuel.vercel.app",
    siteName: "Emmanuel's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        <main className="pt-24 min-h-screen"> 
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}