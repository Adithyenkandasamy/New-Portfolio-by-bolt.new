import React from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { useSound } from './hooks/useSound';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Background from './components/Background';
import { projects, certificates } from './data';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const { playHover, playClick, playImageHover } = useSound();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <Background />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} playHover={playHover} playClick={playClick} />
      
      <main className="container mx-auto px-4 py-8 space-y-20 relative z-10">
        <Hero playHover={playHover} />
        <Projects 
          projects={projects} 
          playHover={playHover} 
          playClick={playClick} 
          playImageHover={playImageHover}
        />
        <Certificates 
          certificates={certificates} 
          playHover={playHover} 
          playClick={playClick} 
          playImageHover={playImageHover}
        />
        <Contact playHover={playHover} playClick={playClick} />
      </main>

      <footer className="py-6 bg-opacity-50 backdrop-blur-lg relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Adithyen Kandasamy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Adithyenkandasamy"
              className="hover:scale-110 transition-transform text-white hover:text-blue-400"
              onMouseEnter={playHover}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/adithyen-kandasamy"
              className="hover:scale-110 transition-transform text-white hover:text-blue-400"
              onMouseEnter={playHover}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;