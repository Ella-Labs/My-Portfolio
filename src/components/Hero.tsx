"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Changed to min-h-screen to perfectly fit the viewport
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6 max-w-7xl mx-auto text-center relative">
      
      {/* Massive, subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#B026FF]/10 to-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="space-y-6 z-10 w-full max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-gray-400 font-medium font-space tracking-widest uppercase"
        >
          Hi, I'm
        </motion.p>
        
        {/* Massive Typography Drop */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black font-space tracking-tighter leading-none py-2"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
            Emmanuel.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mt-6"
        >
          Full Stack Developer crafting robust backends and bold digital experiences.
        </motion.p>

        {/* Dual Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#work" 
            className="inline-block w-full sm:w-auto border-2 border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0B0F19] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
          >
            See my projects
          </a>
          <a 
            href="#contact" 
            className="inline-block w-full sm:w-auto bg-[#B026FF] border-2 border-[#B026FF] text-white hover:bg-transparent hover:text-[#B026FF] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(176,38,255,0.2)] hover:shadow-[0_0_40px_rgba(176,38,255,0.4)]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}