import React from 'react';
import { Code, Server, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              I create responsive and interactive user interfaces using modern
              frameworks like React, with a focus on performance and accessibility.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Server className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <p className="text-gray-600">
              I build scalable server-side applications and APIs using Node.js
              and modern database technologies.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Palette className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              I design intuitive and beautiful user interfaces with a focus on
              user experience and modern design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;