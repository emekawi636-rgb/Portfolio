"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Palette, Brain, Users, Monitor } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const highlights = [
  { icon: Code2, label: "Clean Coding", desc: "Writing maintainable, scalable code" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed and efficiency" },
  { icon: Palette, label: "Modern UI", desc: "Beautiful, intuitive interfaces" },
  { icon: Monitor, label: "Responsive", desc: "Flawless on every device" },
  { icon: Brain, label: "Problem Solving", desc: "Creative solutions to complex challenges" },
  { icon: Users, label: "User-Focused", desc: "End-user experience at the core" },
];

export function AboutSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric/3 rounded-full blur-[150px]" />

      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-electric tracking-widest uppercase">About Me</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Passionate About <span className="text-gradient">Craft</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-titanium/70 leading-relaxed">
              I&apos;m a dedicated Web Developer with a deep passion for creating
              exceptional digital experiences. With expertise spanning C++, JavaScript,
              and HTML, I bring a unique blend of systems-level thinking and modern
              web development to every project.
            </p>
            <p className="text-lg text-titanium/70 leading-relaxed">
              My approach combines clean, efficient code with stunning visual design.
              I believe that great software should not only perform flawlessly but
              also delight users with its aesthetics and interactions.
            </p>
            <p className="text-lg text-titanium/70 leading-relaxed">
              Whether building from scratch or enhancing existing systems, I focus
              on delivering solutions that are performant, accessible, and visually
              compelling.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["C++", "JavaScript", "HTML5", "CSS3", "React", "Next.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl glass text-sm text-titanium/80 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-5 rounded-2xl glass hover:bg-white/5 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric/20 to-cyan/20 flex items-center justify-center mb-3 group-hover:from-electric/30 group-hover:to-cyan/30 transition-all">
                  <item.icon size={18} className="text-electric" />
                </div>
                <h4 className="font-heading font-semibold text-frost text-sm">{item.label}</h4>
                <p className="mt-1 text-xs text-titanium/50">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
