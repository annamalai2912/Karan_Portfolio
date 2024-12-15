import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600"
              alt="Developer"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;