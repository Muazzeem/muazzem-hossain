import React from 'react';
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Experience</h2>
      <div className="space-y-8 max-w-4xl mx-auto px-4">
        <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span className="text-gray-400">2022 - Present</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Senior AI Engineer</h3>
          <p className="text-gray-400 mb-2">TechCorp AI</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Led development of large language model applications</li>
            <li>Implemented state-of-the-art image generation systems</li>
            <li>Optimized model performance and reduced inference costs by 40%</li>
          </ul>
        </Card>

        <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span className="text-gray-400">2020 - 2022</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Machine Learning Engineer</h3>
          <p className="text-gray-400 mb-2">AI Solutions Inc</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Developed and deployed computer vision models</li>
            <li>Built scalable ML infrastructure using cloud services</li>
            <li>Collaborated with cross-functional teams to deliver AI solutions</li>
          </ul>
        </Card>

        <Card className="bg-[#0F1117] border-[#1a1d27] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span className="text-gray-400">2018 - 2020</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Software Engineer</h3>
          <p className="text-gray-400 mb-2">Tech Innovators</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Built full-stack applications using React and Node.js</li>
            <li>Implemented CI/CD pipelines and automated testing</li>
            <li>Mentored junior developers and led technical discussions</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceSection;