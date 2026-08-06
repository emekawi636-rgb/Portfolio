"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/xyzgbkdl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, _to: "emekawi636@gmail.com" }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric/3 rounded-full blur-[150px]" />

      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center"
        >
          <span className="text-sm font-medium text-electric tracking-widest uppercase">Contact</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-frost">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-titanium/60 max-w-2xl text-center">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
                  <Mail size={20} className="text-electric" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-frost">Email</h4>
                  <p className="text-sm text-titanium/60">emekawi636@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <MapPin size={20} className="text-cyan" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-frost">Location</h4>
                  <p className="text-sm text-titanium/60">Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass">
              <p className="text-sm text-titanium/60 leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, please mention it in the subject line.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-strong space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl bg-white/5 border text-frost text-sm placeholder:text-titanium/30 focus:outline-none focus:border-electric/50 transition-colors",
                      errors.name ? "border-red-500/50" : "border-white/10"
                    )}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl bg-white/5 border text-frost text-sm placeholder:text-titanium/30 focus:outline-none focus:border-electric/50 transition-colors",
                      errors.email ? "border-red-500/50" : "border-white/10"
                    )}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3.5 rounded-xl bg-white/5 border text-frost text-sm placeholder:text-titanium/30 focus:outline-none focus:border-electric/50 transition-colors",
                    errors.subject ? "border-red-500/50" : "border-white/10"
                  )}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3.5 rounded-xl bg-white/5 border text-frost text-sm placeholder:text-titanium/30 focus:outline-none focus:border-electric/50 transition-colors resize-none",
                    errors.message ? "border-red-500/50" : "border-white/10"
                  )}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-electric to-cyan text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60 transition-all hover:shadow-lg hover:shadow-electric/20"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={18} />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-emerald-400 text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400 text-center"
                >
                  Something went wrong. Please try again or email directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
