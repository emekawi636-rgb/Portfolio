"use client";

import { Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/emekawi636-rgb", label: "GitHub" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:emekawi636@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-matte">
      <div className="section-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-items-stretch">
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left">
            <a href="#" className="font-heading text-2xl font-bold text-frost">
              <span className="text-gradient">{"<"}</span>
              Dev
              <span className="text-gradient">{" />"}</span>
            </a>
            <p className="mt-4 text-titanium/60 text-sm leading-relaxed">
              Building beautiful digital experiences with clean code, modern technologies, and exceptional design.
            </p>
          </div>

          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-heading font-semibold text-frost mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-3 items-center md:items-start">
              {["About", "Projects", "Experience", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-titanium/60 hover:text-electric transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-heading font-semibold text-frost mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-titanium/70 hover:text-electric hover:border-electric/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-titanium/50 text-center">
              emekawi636@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-titanium/40 md:flex-row md:justify-center md:gap-8">
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <Heart size={14} className="text-electric fill-electric" />
              <span>using Next.js & Framer Motion</span>
            </div>
            <div>© {new Date().getFullYear()} All rights reserved.</div>
          </div>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -3 }}
          aria-label="Back to top"
          className="fixed right-8 bottom-8 w-10 h-10 rounded-xl glass flex items-center justify-center text-titanium/70 hover:text-electric transition-colors z-50"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
