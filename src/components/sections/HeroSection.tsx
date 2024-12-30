import React from 'react';

const HeroSection = () => {
  return (
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
    </div>
  );
};

export default HeroSection;