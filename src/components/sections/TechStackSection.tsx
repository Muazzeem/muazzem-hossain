import { Card } from "@/components/ui/card";
import { Layers, Sparkles, Database, Paintbrush } from "lucide-react";

const TechStackSection = () => {
  return (
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
  );
};

export default TechStackSection;
