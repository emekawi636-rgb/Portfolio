"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Rocket, ArrowUpRight } from "lucide-react";

export function VercelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-titanium tracking-widest uppercase">Deployments</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Live on <span className="text-gradient">Vercel</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <a
            href="https://vercel.com/mekki1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-8 rounded-3xl glass-strong hover:bg-white/5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 76 65" fill="currentColor" className="w-10 h-10 text-frost">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-heading text-xl font-bold text-frost mb-2 group-hover:text-gradient transition-all duration-300">
                  My Vercel Deployments
                </h3>
                <p className="text-sm text-titanium/60 mb-3">
                  Explore my live projects and deployments. Each project showcases different aspects of my development skills and design approach.
                </p>
                <div className="flex items-center gap-4 text-xs text-titanium/40">
                  <span className="flex items-center gap-1"><Globe size={12} /> Live Projects</span>
                  <span className="flex items-center gap-1"><Rocket size={12} /> Auto Deploy</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-titanium/60 group-hover:text-frost group-hover:bg-white/10 transition-all"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>

            <div className="relative mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-titanium/40 font-mono">vercel.com/mekki1</span>
              <span className="flex items-center gap-1.5 text-xs text-electric">
                <ExternalLink size={12} />
                View Deployments
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
