import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/cursor";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TechStackSection } from "@/components/sections/tech-stack";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ServicesSection } from "@/components/sections/services";
import { AchievementsSection } from "@/components/sections/achievements";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StatsSection } from "@/components/sections/stats";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { VercelSection } from "@/components/sections/vercel-deploy";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative flex w-full flex-col items-center">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <AchievementsSection />
        
        <TestimonialsSection />
        <StatsSection />
        <VercelSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
