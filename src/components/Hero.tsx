import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  playHover: () => void;
}

const Hero: React.FC<HeroProps> = ({ playHover }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-8">
      <div className="relative w-32 h-32 mb-8 float-animation">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300"
          alt="Adithyen Kandasamy - Full Stack Developer"
          className="rounded-full w-full h-full object-cover shadow-xl animate-fadeIn hover-card neon-glow"
        />
        <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-pulse shimmer" />
      </div>

      <div className="space-y-4 animate-slideUp">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
          Adithyen Kandasamy
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 font-semibold shimmer">
          Full Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Passionate about creating beautiful, functional, and user-friendly applications.
          Specialized in React, Node.js, and modern web technologies.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 animate-fadeIn">
        <a
          href="#projects"
          className="group flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover-card neon-glow"
          onMouseEnter={playHover}
        >
          View Projects
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </a>
        <a
          href="#contact"
          className="group flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all hover-card shimmer"
          onMouseEnter={playHover}
        >
          Contact Me
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;