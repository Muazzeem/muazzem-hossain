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
                    {["Python", "Django","Django-REST", "Oscar", "Flask", "FastAPI"].map((tech) => (
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
                    {["GCP", "AWS"].map((tech) => (
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
                    {["Github Actions", "AWS CodePipeline", "Docker", "Terraform"].map((tech) => (
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
                src="/jobkhuzi.png"
                alt="Project 1" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Job Search Portal</h3>
              <p className="text-gray-400 mb-4">
                A specialized job search portal designed for engineers, offering advanced capabilities such as powerful search, filtering, and sorting features.
              </p>
              <div className="flex gap-4">
                <Button disabled={true} variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4"/>
                  GitHub
                </Button>
                <a href="https://jobkhuzi.com/" target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4"/>
                    Live Demo
                  </Button>
                  </a>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/portat.png"
                alt="Project 2" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Portal Scraping</h3>
              <p className="text-gray-400 mb-4">
                A Python-based project for scraping data from job portal. Easy to use and customizable.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/saifulazad/portal-scraping" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                  </a>
                <Button disabled={true} variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/doc-ai.png"
                alt="Project 3" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Python Package for Google Document-AI</h3>
              <p className="text-gray-400 mb-4">
                A reusable package for integrating Google Document AI into Python applications, streamlining document
                processing workflows.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Muazzeem/reusable-doc-ai-package" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                </a>
                <a href="https://pypi.org/project/reusable-code-for-document-ai/" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
                  </a>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <img 
                src="/google-auth.png"
                alt="Project 4" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Keyless Authentication</h3>
              <p className="text-gray-400 mb-4">
                Authenticate from GitHub Actions to create and manage Google Cloud
                resources using Workload Identity Federation.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Muazzeem/gcp-infrastructure-using-terraform/tree/main/wlif" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                </a>
                <Button disabled={true} variant="outline" size="sm" className="gap-2">
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
            <a href="mailto:muazzem.mamun@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/muazzem-hossain/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/Muazzeem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
