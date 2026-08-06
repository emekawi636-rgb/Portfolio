"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 82 },
      { name: "UI/UX Principles", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-titanium/85">{name}</span>
        <span className="text-xs text-cyan font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden ring-1 ring-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-purple shadow-[0_0_24px_rgba(6,182,212,0.35)]"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#09090b] via-[#0d0d12] to-[#11111a]">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro mb-16"
        >
          <span className="section-tag text-purple">Skills</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold tracking-tight text-frost">
            Expertise & <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="mt-4 text-base text-titanium/60 leading-relaxed">
            A deliberate mix of systems thinking, product craft, and modern web execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="p-8 rounded-[1.75rem] glass-strong border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-heading font-semibold text-frost text-xl mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.15 + skillIdx * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
