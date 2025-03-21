import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Github, Linkedin, Mail, ExternalLink, FileDown, Link, NotebookPen } from "lucide-react";
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
          <div className="w-10 h-10 rounded-full mx-auto mb-10 border-0">

          </div>
        </div>

        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
          Hello, I'm
          <br/>
          <span className="gradient-text text-5xl md:text-6xl block mt-2">
            Muazzem Hossain
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          A versatile backend engineer with a passion for building scalable and efficient systems - from early explorations of coding to building powerful APIs that now power powerful cloud-native solutions and modern applications.
        </p>
        {/* Download CV Section */}
        <div className="mb-20">
          <a href="https://drive.google.com/file/d/1lNbPv7a0mo4YLCF386LJRjRUHJJM49-n/view?usp=sharing" target="_blank"
             rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <FileDown className="w-4 h-4"/>
              DOWNLOAD MY RESUME
            </Button>
          </a>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {/* Fullstack Card */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8 text-blue-400"/>
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
                    {["Python", "Django", "Django-REST", "Oscar", "Flask", "FastAPI"].map((tech) => (
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
                <Sparkles className="w-8 h-8 text-purple-400"/>
                <h3 className="text-xl font-semibold text-white">Gen AI</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">CORE</p>
                  <div className="flex flex-wrap gap-2">
                    {["Document-AI", "Vertex-AI", "Prompt Engineering", "Fine Tuning"].map((tech) => (
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
                <Database className="w-8 h-8 text-cyan-400"/>
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
                <PlaneTakeoff className="w-8 h-8 text-green-400"/>
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
        <div className="mb-10">
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
                A specialized job search portal designed for engineers, offering advanced capabilities such as powerful
                search, filtering, and sorting features.
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
                    <Github className="w-4 h-4"/>
                    GitHub
                  </Button>
                </a>
                <Button disabled={true} variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4"/>
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
                    <Github className="w-4 h-4"/>
                    GitHub
                  </Button>
                </a>
                <a href="https://pypi.org/project/reusable-code-for-document-ai/" target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4"/>
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
                    <Github className="w-4 h-4"/>
                    GitHub
                  </Button>
                </a>
                <Button disabled={true} variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4"/>
                  Live Demo
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <a href="https://github.com/Muazzeem?tab=repositories" target="_blank"
             rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <Link className="w-4 h-4"/>
              See More Projects on GitHub
            </Button>
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Experience</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Experience 1 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <img
                    src="/Vemate.png"
                    alt='Profile'
                    className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white text-justify">Vemate</h3>
                      <p className="text-purple-400 text-sm">Fullstack Developer</p>
                    </div>
                    <span className="text-gray-400">2025 - Present</span>
                  </div>
                </div>
              </div>
              <span
                  className="text-gray-400 flex mt-2 text-justify">
                Build automated marketing and sales solutions with Python and the Django framework.
              </span>

              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Create full-stack applications using Nuxt for the front end and Django for the back end.
              </span>

              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Design and manage a reliable CI/CD pipeline leveraging GitLab Actions and Docker.
              </span>
            </Card>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto mt-4">
            {/* Experience 2 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <img
                    src="/29563467.jpeg"
                    alt='Profile'
                    className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white text-justify">Bitstrapped</h3>
                      <p className="text-purple-400 text-sm">Backend Developer</p>
                    </div>
                    <span className="text-gray-400">2023 - 2024</span>
                  </div>
                </div>
              </div>
              <span
                  className="text-gray-400 flex mt-2 text-justify">
                Developed innovative AI applications to address complex challenges in healthcare and finance,
                leveraging advanced machine learning models.</span>

              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Provision multi-state infrastructures by terraform in reusable modules.
              </span>

              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Containerize application by docker.
              </span>

              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Establish a seamless connection for data migration from AWS to GCP.
              </span>
            </Card>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto mt-4">
            {/* Experience 3 */}
            <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <img
                    src="/1633533238917.jpeg"
                    alt='Profile'
                    className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold company-name text-white text-justify">Fractalslab</h3>
                      <p className="text-purple-400 text-sm">Fullstack Developer</p>
                    </div>
                    <span className="text-gray-400">2020 - 2023</span>
                  </div>
                </div>
              </div>
              <span
                  className="text-gray-400 flex mt-2 text-justify">
                Build a job recommendation system using advanced algorithms to match candidates with roles based on skills, experience, and preferences.
              </span>
              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Developed strong and scalable backend solutions utilizing Python and Django framework.
              </span>
              <span
                  className="text-gray-400 flex mt-3 text-justify">
                Successfully designed and deployed architecture using Terraform, resulting in a significant
                improvement in scalability and reliability.
              </span>
            </Card>
          </div>
        </div>

        {/* Footer / Get in Touch Section */}
        <div className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            <a href="mailto:muazzem.mamun@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com/in/muazzem-hossain/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8"/>
            </a>
            <a href="https://github.com/Muazzeem" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-8 h-8"/>
            </a>
            <a href="https://medium.com/@muazzem.mamun" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <NotebookPen className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
