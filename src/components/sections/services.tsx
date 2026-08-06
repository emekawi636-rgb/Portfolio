"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Layout, Briefcase, Palette, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies, optimized for performance and user engagement.",
    color: "text-electric",
    bg: "bg-electric/10",
  },
  {
    icon: Smartphone,
    title: "Responsive Websites",
    description: "Flawless experiences across all devices — from mobile to desktop with pixel-perfect precision.",
    color: "text-cyan",
    bg: "bg-cyan/10",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture attention and drive meaningful action.",
    color: "text-purple",
    bg: "bg-purple/10",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional web presence that communicates your brand value and builds trust with clients.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description: "Translating designs into pixel-perfect, interactive interfaces with smooth animations.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Performance audits and optimizations to achieve blazing-fast load times and smooth interactions.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan/3 rounded-full blur-[150px]" />

      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple tracking-widest uppercase">Services</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="mt-4 text-titanium/60 max-w-xl mx-auto">
            Comprehensive web development services tailored to bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} className={service.color} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-frost mb-3">{service.title}</h3>
              <p className="text-sm text-titanium/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
