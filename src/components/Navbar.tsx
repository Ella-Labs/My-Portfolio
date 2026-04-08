"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // The wrapper uses pointer-events-none so the invisible sides don't block page clicks!
    <div className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">
      <nav 
        // Pointer-events-auto makes the actual navbar clickable again
        className={`pointer-events-auto flex justify-between items-center backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top
          ${isScrolled 
            ? 'w-[95%] max-w-[896px] bg-[#1E293B]/80 border border-white/10 rounded-full py-3 px-6 mt-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)]' 
            : 'w-full max-w-[100vw] bg-[#0B0F19]/70 border-b border-white/5 py-4 px-6 md:px-12 mt-0 rounded-none shadow-none'
          }
        `}
      >
        
        {/* The Artsy Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold font-space tracking-tighter">
          codebynuel<span className="text-[#00F0FF]">.</span>
        </Link>

        {/* The Navigation Links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#teams" className="hover:text-white transition-colors">Teams</Link>
          <Link href="#stack" className="hover:text-white transition-colors">Stack</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* The Glowing Resume Button */}
        <a 
          href="/emmanuel-resume.pdf" 
          download
          className={`flex items-center gap-2 bg-[#B026FF] hover:bg-[#8B1ECC] text-white rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(176,38,255,0.5)] ${isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'}`}
        >
          <FiDownload size={16} />
          <span className="hidden sm:inline">Resume</span>
        </a>

      </nav>
    </div>
  );
}