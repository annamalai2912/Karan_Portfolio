import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
              </a>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;