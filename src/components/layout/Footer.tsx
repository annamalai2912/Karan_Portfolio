import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold">Karan Pandian S</p>
            <p className="text-gray-400">Freelance Web Developer & Photoshop Specialist</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff95] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff95] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-[#00ff95] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Karan Pandian S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;