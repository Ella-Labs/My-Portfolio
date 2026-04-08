"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiGithub, FiSend } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { sendContactForm } from "../actions/sendContact"; // Import the server action

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setStatusMessage("Beaming message to server...");

    // Call the secure server action
    const response = await sendContactForm(data);

    if (response.success) {
      setStatusMessage("Message delivered successfully!");
      reset();
    } else {
      setStatusMessage(response.error || "Failed to send message. Please try Telegram!");
    }

    setIsSubmitting(false);
    setTimeout(() => setStatusMessage(""), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Typography & Socials */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black font-space mb-6">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
              something.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Got an idea, a project, or just want to chat about backend architecture? My inbox is always open.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Ella-Labs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-gray-400 hover:text-[#00F0FF] transition-colors"
            >
              <div className="p-3 bg-[#1E293B]/50 rounded-full group-hover:bg-[#00F0FF]/10 transition-colors">
                <FiGithub size={24} />
              </div>
              <span className="font-medium font-space">GitHub</span>
            </a>
            
            <a 
              href="https://t.me/daniella31646" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-gray-400 hover:text-[#B026FF] transition-colors"
            >
              <div className="p-3 bg-[#1E293B]/50 rounded-full group-hover:bg-[#B026FF]/10 transition-colors">
                <FaTelegramPlane size={24} />
              </div>
              <span className="font-medium font-space">Telegram</span>
            </a>
          </div>
        </div>

        {/* Right Side: The Secure Form */}
        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-[#1E293B]/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input 
            {...register("name", { required: true })}
            disabled={isSubmitting}
            placeholder="Your Name" 
            className="bg-[#0B0F19]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors disabled:opacity-50"
          />
          <input 
            {...register("email", { required: true })}
            type="email"
            disabled={isSubmitting}
            placeholder="Your Email" 
            className="bg-[#0B0F19]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors disabled:opacity-50"
          />
          <textarea 
            {...register("message", { required: true })}
            disabled={isSubmitting}
            placeholder="System logs... (Just kidding ☻, write your message here)" 
            rows={5}
            className="bg-[#0B0F19]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors resize-none disabled:opacity-50"
          />
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] hover:opacity-90 text-white font-bold py-4 rounded-lg transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(176,38,255,0.2)]"
          >
            {isSubmitting ? "Transmitting..." : "Send Data"} <FiSend size={18} />
          </button>

          {/* Success/Error Message Display */}
          {statusMessage && (
            <p className={`text-center text-sm font-medium mt-2 ${statusMessage.includes("failed") ? "text-red-400" : "text-[#00F0FF]"}`}>
              {statusMessage}
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
}