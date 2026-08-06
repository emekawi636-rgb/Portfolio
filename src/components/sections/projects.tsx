"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, ExternalLinkIcon } from "@/components/icons";

const projects = [
  {
    title: "Algorithm Visualizer",
    description: "Interactive platform for visualizing sorting and pathfinding algorithms in real-time with smooth animations.",
    tech: ["C++", "JavaScript", "HTML5", "CSS3"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-electric/30",
    github: "https://github.com/emekawi636-rgb",
    live: "#",
  },
  {
    title: "Real-Time Dashboard",
    description: "Modern analytics dashboard with live data visualization, dark theme, and responsive layout for monitoring systems.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple/30",
    github: "https://github.com/emekawi636-rgb",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with product filtering, cart functionality, and seamless checkout experience.",
    tech: ["Next.js", "TypeScript", "Node.js", "CSS3"],
    color: "from-cyan-500/20 to-emerald-500/20",
    borderColor: "hover:border-cyan/30",
    github: "https://github.com/emekawi636-rgb",
    live: "#",
  },
  {
    title: "Portfolio Generator",
    description: "Open-source tool for developers to create stunning portfolio websites with customizable themes and layouts.",
    tech: ["JavaScript", "HTML5", "CSS3", "C++"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "hover:border-orange-500/30",
    github: "https://github.com/emekawi636-rgb",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop, real-time updates, and team workspace functionality.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-500/30",
    github: "https://github.com/emekawi636-rgb",
    live: "#",
  },
  {
    title: "Weather Intelligence",
    description: "Beautiful weather application with animated backgrounds, 7-day forecasts, and location-based alerts.",
    tech: ["JavaScript", "HTML5", "CSS3", "API"],
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "hover:border-sky-500/30",
    github: "https://github.com/emekawi636-rgb",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative rounded-[1.75rem] glass-strong border border-white/10 ${project.borderColor} transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.25)]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative p-8 md:p-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
            <span className="font-heading font-bold text-electric text-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-titanium/60 hover:text-frost hover:bg-white/10 transition-all"
            >
              <GithubIcon size={16} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-titanium/60 hover:text-frost hover:bg-white/10 transition-all"
            >
              <ExternalLinkIcon size={16} />
            </motion.a>
          </div>
        </div>

        <h3 className="font-heading text-xl font-bold text-frost mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-titanium/60 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-white/5 text-xs text-titanium/60 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Project</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative flex w-full flex-col items-center overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#101017] via-[#0d0d12] to-[#09090b]">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[150px]" />

      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro mb-16"
        >
          <span className="section-tag text-electric">Portfolio</span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold tracking-tight text-frost">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-base text-titanium/60 leading-relaxed">
            A selection of projects that showcase modern build quality, thoughtful UX, and polished execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
