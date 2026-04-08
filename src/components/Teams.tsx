"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiUsers } from "react-icons/fi";

const teams = [
  {
    id: 1,
    name: "Ella Labs",
    role: "Founder & Team Leader",
    link: "https://ellalabs.com",
    description: "Leading the vision, architecture, and future development of innovative software solutions."
  },
  {
    id: 2,
    name: "Flowsatetech",
    role: "Lead Backend Developer",
    link: "https://flowsate.com",
    description: "Architecting robust backend systems, managing data flow, and optimizing performance for enterprise-level applications."
  }
];

export default function Teams() {
  return (
    <section id="teams" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <FiUsers className="text-[#B026FF] text-4xl" />
        <h2 className="text-4xl md:text-5xl font-space font-black">
          Teams & <span className="text-[#00F0FF]">Leadership.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative bg-[#1E293B]/30 border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/50 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 to-[#B026FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-space text-white">{team.name}</h3>
                  <p className="text-[#B026FF] font-bold text-sm tracking-wide uppercase mt-1">{team.role}</p>
                </div>
                <a href={team.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00F0FF] transition-colors">
                  <FiExternalLink size={24} />
                </a>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {team.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}