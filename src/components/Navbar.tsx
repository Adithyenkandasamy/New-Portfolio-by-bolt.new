import React from 'react';
import { Moon, Sun, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  playHover: () => void;
  playClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, playHover, playClick }) => {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm border-b ${
      isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Adithyen
            </h1>
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/Adithyenkandasamy"
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/adithyen-kandasamy"
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <a
              href="#projects"
              className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              onMouseEnter={playHover}
            >
              Projects
            </a>
            <a
              href="#certificates"
              className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              onMouseEnter={playHover}
            >
              Certificates
            </a>
            <a
              href="#contact"
              className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              onMouseEnter={playHover}
            >
              Contact
            </a>
            
            <button
              onClick={() => {
                toggleTheme();
                playClick();
              }}
              onMouseEnter={playHover}
              className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="text-yellow-500" size={20} /> : <Moon className="text-gray-600" size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;