"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-space font-black mb-12">
        Selected <span className="text-[#B026FF]">Works.</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-gradient-to-b from-[#1E293B]/80 to-transparent p-[1px] rounded-2xl overflow-hidden"
          >
            <div className="bg-[#0B0F19] h-full rounded-2xl flex flex-col justify-between group-hover:bg-[#111827] transition-colors duration-500 overflow-hidden">
              
              {/* --- IMAGE SECTION --- */}
              <div className="h-48 md:h-64 w-full bg-[#1E293B] relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold font-space mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* --- CONDITIONAL LINKS SECTION --- */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  
                  {/* Only render if project.github exists and isn't empty */}
                  {project.github && (
                    <a target="_blank" rel="noopener noreferrer" href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <FiGithub size={18} /> Code
                    </a>
                  )}

                  {/* Only render if project.live exists and isn't empty */}
                  {project.live && (
                    <a target="_blank" rel="noopener noreferrer" href={project.live} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}