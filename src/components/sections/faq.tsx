"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in C++, JavaScript, and HTML, with extensive experience in modern frameworks like React, Next.js, and Tailwind CSS. I also work with TypeScript, Node.js, and various build tools.",
  },
  {
    question: "Do you take on freelance projects?",
    answer: "Yes! I'm available for freelance work, contract positions, and collaboration on exciting projects. Feel free to reach out through the contact form to discuss your requirements.",
  },
  {
    question: "What's your development approach?",
    answer: "I follow a user-first approach with emphasis on clean, maintainable code, performance optimization, and responsive design. I believe in iterative development with regular feedback loops.",
  },
  {
    question: "Are you open to full-time opportunities?",
    answer: "Absolutely! I'm actively seeking full-time opportunities where I can contribute to challenging projects and grow alongside talented teams.",
  },
  {
    question: "How do you ensure code quality?",
    answer: "I follow best practices including code reviews, testing, proper documentation, and adherence to industry standards. I'm committed to writing scalable, efficient code.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-heading font-medium text-frost group-hover:text-electric transition-colors pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-titanium/40" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-titanium/60 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
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
          <span className="text-sm font-medium text-cyan tracking-widest uppercase">FAQ</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="glass rounded-2xl p-6 sm:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
