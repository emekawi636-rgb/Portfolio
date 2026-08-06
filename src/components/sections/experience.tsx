"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2023 — Present",
    description: "Building modern web applications for clients, focusing on performance, responsive design, and clean code architecture.",
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2022 — 2023",
    description: "Developed multiple web projects mastering React, Next.js, and TypeScript while exploring advanced UI animations.",
    current: false,
  },
  {
    role: "Programming Student",
    company: "Self-Taught Journey",
    period: "2021 — 2022",
    description: "Intensive self-study of C++ fundamentals, data structures, algorithms, and web development technologies.",
    current: false,
  },
];

const education = [
  {
    degree: "Web Development Bootcamp",
    school: "Online Program",
    period: "2023",
    description: "Intensive program covering full-stack development, modern frameworks, and deployment strategies.",
  },
  {
    degree: "Computer Science Fundamentals",
    school: "Self-Study & Courses",
    period: "2021 — 2023",
    description: "Focused on algorithms, data structures, OOP principles with C++, and systems programming.",
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-cyan tracking-widest uppercase">Journey</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                <Briefcase size={18} className="text-electric" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-frost">Experience</h3>
            </div>

            <div className="relative space-y-8">
              <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-electric/30 via-cyan/20 to-transparent" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-12"
                >
                  <div className={`absolute left-3 top-1.5 w-3 h-3 rounded-full border-2 ${
                    exp.current ? 'border-electric bg-electric/30' : 'border-titanium/30 bg-matte'
                  }`} />

                  <div className="p-5 rounded-2xl glass">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-frost">{exp.role}</h4>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-electric/10 text-electric text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-electric mb-1">{exp.company}</p>
                    <p className="text-xs text-titanium/40 font-mono mb-2">{exp.period}</p>
                    <p className="text-sm text-titanium/60 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
                <GraduationCap size={18} className="text-purple" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-frost">Education</h3>
            </div>

            <div className="relative space-y-8">
              <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple/30 via-purple/20 to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full border-2 border-purple/50 bg-matte" />

                  <div className="p-5 rounded-2xl glass">
                    <h4 className="font-heading font-semibold text-frost mb-1">{edu.degree}</h4>
                    <p className="text-sm text-purple mb-1">{edu.school}</p>
                    <p className="text-xs text-titanium/40 font-mono mb-2">{edu.period}</p>
                    <p className="text-sm text-titanium/60 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
