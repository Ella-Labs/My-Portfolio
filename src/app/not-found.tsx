"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-[#0B0F19]">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-tr from-[#B026FF]/10 to-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 space-y-6 mt-[-10vh]">
        {/* Massive 404 Drop */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-[12rem] font-black font-space tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#B026FF]"
        >
          404
        </motion.h1>
        
        {/* Terminal Text with Blinking Cursor */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-space text-xl md:text-3xl text-gray-400 font-medium flex items-center justify-center gap-2"
        >
          <span>{'>'} SYSTEM_ERR: NODE_DISCONNECTED</span>
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="w-3 h-8 md:h-10 bg-[#00F0FF] inline-block"
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-500 max-w-md mx-auto mt-4 leading-relaxed"
        >
          The endpoint you requested does not exist on this server. It may have been deleted, moved, or never existed at all.
        </motion.p>

        {/* Reroute Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8"
        >
          <Link 
            href="/" 
            className="inline-block border-2 border-[#B026FF] text-[#B026FF] bg-transparent hover:bg-[#B026FF] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(176,38,255,0.1)] hover:shadow-[0_0_40px_rgba(176,38,255,0.4)]"
          >
            {'>'} Reroute to Mainframe
          </Link>
        </motion.div>
      </div>
    </section>
  );
}