import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;
