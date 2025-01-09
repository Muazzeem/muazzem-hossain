import { ParticlesBackground } from "@/components/ParticlesBackground";
import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;