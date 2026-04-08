"use client";
import { motion } from "framer-motion";

const skills = [
  "Node.js", "Express", "Next.js", "React", 
  "PostgreSQL", "MongoDB", "Redis", "Tailwind CSS"
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
      <h2 className="text-3xl font-space font-bold mb-10">
        The <span className="text-[#00F0FF]">Stack.</span>
      </h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1E293B]/50 border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:border-[#B026FF] hover:shadow-[0_0_15px_rgba(176,38,255,0.3)] transition-all cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}