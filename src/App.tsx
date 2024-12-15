import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;