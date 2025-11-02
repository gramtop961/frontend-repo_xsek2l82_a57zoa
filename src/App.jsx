import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-white">CS Portfolio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/resume.pdf" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10 transition-colors">Résumé</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
