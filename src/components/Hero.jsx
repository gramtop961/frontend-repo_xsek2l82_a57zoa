import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[75vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_30%_at_70%_10%,rgba(56,189,248,0.20),transparent),radial-gradient(30%_25%_at_20%_80%,rgba(167,139,250,0.25),transparent)]" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 flex items-center min-h-[75vh] md:min-h-screen">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Computer Science Graduate
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Building thoughtful software with clean code and modern UX
          </h1>
          <p className="mt-4 md:mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
            I craft performant web apps, intuitive interfaces, and scalable systems. Passionate about full‑stack development, human‑centered design, and learning by shipping.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold px-4 py-2 md:px-5 md:py-3 hover:bg-cyan-400 transition-colors"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 text-white px-4 py-2 md:px-5 md:py-3 hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
            <div className="ml-2 flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
