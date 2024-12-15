import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff95]/20 to-transparent animate-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-6 h-6 text-[#00ff95]" />
              <span className="text-[#00ff95]">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-[#00ff95] inline-block animate-wave">
                Karan Pandian S
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
              Freelance Web Developer & Photoshop Enthusiast
            </h2>
            <div className="flex gap-4">
              <Button variant="primary" size="lg">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ff95] blur-3xl opacity-20 animate-pulse" />
              <img
                src="karan.png"
                alt="Karan Pandian S"
                className="relative rounded-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;