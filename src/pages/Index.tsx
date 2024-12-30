import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Layers,
  Sparkles,
  Database,
  Paintbrush,
} from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 text-center px-4 pt-20">
        <div className="mb-8">
          <img
            src="/lovable-uploads/558c528f-4aaa-460f-a271-ce48cb781ab7.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-2 border-blue-500/20"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Building Tomorrow's
          <br />
          <span className="gradient-text text-5xl md:text-7xl block mt-2">
            AI Solutions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-20">
          A generalist software engineer and designer with a passion for building - from early days of tinkering with{" "}
          <span className="text-blue-400">electronics</span> to now crafting cutting-edge generative AI solutions.
        </p>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {/* Fullstack Card */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Fullstack</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">FRONTEND</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Vue", "JavaScript", "Tailwind", "Three.js", "Firebase"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">BACKEND</p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "Express.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Gen AI Card */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Gen AI</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">CORE</p>
                  <div className="flex flex-wrap gap-2">
                    {["LLMs", "Diffusion Models", "Prompt Engineering", "Fine Tuning"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Cloud/Data Card */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Cloud/Data</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">CLOUD PLATFORMS</p>
                  <div className="flex flex-wrap gap-2">
                    {["GCP", "Cloudflare", "Docker", "Terraform"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Designing Card */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Paintbrush className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Designing</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">DESIGN TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "ShadCn", "Three.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer / Get in Touch Section */}
        <div className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            <a href="mailto:your@email.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;