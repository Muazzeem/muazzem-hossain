import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Connekt Studio",
      role: "Founder & CEO",
      period: "2022 - Present",
      description: "Building AI products with diffusion models, LLMs and computer vision. Leading a team of 10+ engineers & creatives while designing scalable systems.",
      logo: "/lovable-uploads/34724bcb-a260-42b0-884a-bf2b4d86c77c.png"
    },
    {
      company: "AudienceTown",
      role: "Data & Cloud Engineer",
      period: "2023 - Present",
      description: "Building data pipelines and analytics systems at scale. Core infrastructure and cloud automation for large datasets.",
      logo: "/lovable-uploads/34724bcb-a260-42b0-884a-bf2b4d86c77c.png"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Experience</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-[#0F1117] border-[#1a1d27] p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <img 
                src={exp.logo} 
                alt={exp.company} 
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-blue-400">{exp.role}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;