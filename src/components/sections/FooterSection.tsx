import React from 'react';
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
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
  );
};

export default FooterSection;