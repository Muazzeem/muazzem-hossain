import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import {
  Layers,
  Sparkles,
  Database,
  PlaneTakeoff,
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
          Hello, I'm
          <br />
          <span className="gradient-text text-5xl md:text-7xl block mt-2">
            Muazzem Hossain
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
                    {["Angular", "Vue", "JavaScript"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">BACKEND</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Django","Django-REST", "Flask", "FastAPI"].map((tech) => (
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
                    {["Document-AI","Vertex-AI", "Prompt Engineering", "Fine Tuning"].map((tech) => (
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
                    {["GCP", "AWS", "Docker", "Terraform"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1a1d27] rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* CI/CD Card */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex items-center gap-3 mb-4">
                <PlaneTakeoff className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">CI/CD</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">DEPLOYMENT TOOLS</p>
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

        {/* Projects Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
            {/* Project 1 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/placeholder.svg" 
                alt="Project 1" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">AI Image Generator</h3>
              <p className="text-gray-400 mb-4">
                A state-of-the-art image generation tool powered by stable diffusion models.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/placeholder.svg" 
                alt="Project 2" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">LLM Chat Interface</h3>
              <p className="text-gray-400 mb-4">
                A modern chat interface for interacting with large language models.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/placeholder.svg" 
                alt="Project 3" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure Dashboard</h3>
              <p className="text-gray-400 mb-4">
                Real-time monitoring and management of cloud resources.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/placeholder.svg" 
                alt="Project 4" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Design System</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive design system built with React and Tailwind CSS.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
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
