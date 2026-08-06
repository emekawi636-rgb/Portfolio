"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Startup Founder",
    text: "Exceptional work ethic and clean code delivery. The project exceeded our expectations with pixel-perfect implementation and smooth performance.",
    avatar: "AC",
  },
  {
    name: "Sarah Miller",
    role: "Product Manager",
    text: "A rare talent who combines technical depth with design sensibility. The final product was not only functional but beautiful and intuitive.",
    avatar: "SM",
  },
  {
    name: "David Park",
    role: "Senior Developer",
    text: "Impressive problem-solving skills and attention to detail. Code was well-structured, documented, and a pleasure to work with.",
    avatar: "DP",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple/3 rounded-full blur-[150px]" />

      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-500"
            >
              <Quote size={32} className="text-electric/20 mb-4" />
              <p className="text-titanium/70 leading-relaxed mb-6 text-sm">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-cyan flex items-center justify-center text-white text-xs font-bold">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-frost">{item.name}</p>
                  <p className="text-xs text-titanium/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
