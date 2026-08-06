"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { HeroScene } from "@/components/three/hero-scene";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center min-h-screen overflow-hidden py-20 sm:py-24 lg:py-28">
      <HeroScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte/40 via-transparent via-50% to-matte z-[1]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px] z-[1]" />

      <div className="relative z-10 flex w-full section-shell flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-xl sm:mb-8"
          >
            <Sparkles size={14} className="text-electric" />
            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-titanium/75 sm:text-[0.68rem]">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-4xl font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.035em] text-frost sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block">Building</span>
            <span className="mt-2 block text-gradient sm:mt-3">Beautiful</span>
            <span className="mt-3 block sm:mt-4">Digital Experiences</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-16 max-w-2xl text-base leading-7 text-titanium/65 sm:mt-20 sm:text-lg sm:leading-8 lg:text-xl"
          >
            Web Developer specializing in C++, JavaScript, and HTML. I craft
            performant, elegant digital solutions that merge clean code with
            exceptional design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex min-w-[180px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-electric to-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_18px_55px_rgba(59,130,246,0.35)] sm:min-w-[190px] sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan to-electric opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-frost shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:min-w-[190px] sm:px-8 sm:py-4 sm:text-base"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex justify-center sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-titanium/40"
          >
            <span className="text-[0.7rem] uppercase tracking-[0.32em]">Scroll</span>
            <ArrowDown size={16} className="opacity-80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
