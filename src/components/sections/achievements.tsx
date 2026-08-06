"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Target, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Algorithm Mastery",
    description: "Solved 200+ algorithmic challenges across multiple platforms demonstrating problem-solving excellence.",
    color: "text-amber-400",
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    description: "Active contributor to open-source projects with merged repositories and community recognition.",
    color: "text-electric",
  },
  {
    icon: Target,
    title: "Perfect Score Projects",
    description: "Delivered multiple projects achieving 100% client satisfaction with zero revision requests.",
    color: "text-cyan",
  },
  {
    icon: Award,
    title: "Continuous Learner",
    description: "Completed 15+ certifications and courses in web development, algorithms, and system design.",
    color: "text-purple",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-400 tracking-widest uppercase">Achievements</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Milestones & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className="group flex gap-5 p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-500"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} className={item.color} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-frost mb-2">{item.title}</h3>
                <p className="text-sm text-titanium/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
