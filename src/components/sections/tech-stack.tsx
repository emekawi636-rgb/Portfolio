"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const technologies = [
  { name: "C++", color: "#00599C", icon: "C++" },
  { name: "JavaScript", color: "#F7DF1E", icon: "JS" },
  { name: "HTML5", color: "#E34F26", icon: "H5" },
  { name: "CSS3", color: "#1572B6", icon: "C3" },
  { name: "Tailwind", color: "#06B6D4", icon: "Tw" },
  { name: "React", color: "#61DAFB", icon: "Re" },
  { name: "Next.js", color: "#ffffff", icon: "Nx" },
  { name: "TypeScript", color: "#3178C6", icon: "Ts" },
  { name: "Node.js", color: "#339933", icon: "No" },
  { name: "Git", color: "#F05032", icon: "Gt" },
  { name: "GitHub", color: "#ffffff", icon: "GH" },
  { name: "Vercel", color: "#ffffff", icon: "Vc" },
  { name: "VS Code", color: "#007ACC", icon: "VS" },
];

export function TechStackSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple/3 rounded-full blur-[150px]" />

      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-cyan tracking-widest uppercase">Tech Stack</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="mt-4 text-titanium/60 max-w-xl mx-auto">
            A curated toolkit of modern technologies I use to build exceptional digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group relative p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-bold text-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-titanium/70 group-hover:text-frost transition-colors">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
