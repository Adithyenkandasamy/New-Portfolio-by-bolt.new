import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  playHover: () => void;
  playClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, playHover, playClick }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-xl premium-card transition-transform duration-300 hover:scale-105 ${
              activeProject === index ? 'glow-effect' : ''
            }`}
            onMouseEnter={() => {
              setActiveProject(index);
              playHover();
            }}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-blue-100 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-blue-300 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                >
                  <Github size={20} className="mr-2" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-blue-300 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                >
                  <ExternalLink size={20} className="mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;