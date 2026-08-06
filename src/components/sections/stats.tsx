"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Years of Learning", value: 4, suffix: "+" },
  { label: "Lines of Code", value: 150, suffix: "k+" },
  { label: "Technologies Used", value: 13, suffix: "" },
  { label: "Satisfied Clients", value: 10, suffix: "+" },
  { label: "Commits", value: 500, suffix: "+" },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="font-heading text-4xl sm:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl glass-strong"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                <p className="mt-4 sm:mt-5 text-sm text-titanium/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
