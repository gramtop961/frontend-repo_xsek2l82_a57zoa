import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Board',
    description:
      'A multiplayer whiteboard with WebRTC data channels, CRDT syncing, and offline support.',
    tags: ['React', 'WebRTC', 'CRDT', 'TypeScript'],
    link: '#',
    gradient: 'from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20',
  },
  {
    title: 'AI‑Powered Code Reviewer',
    description:
      'Analyzes pull requests, suggests diffs, and enforces architectural rules with policy checks.',
    tags: ['FastAPI', 'OpenAI', 'PostgreSQL'],
    link: '#',
    gradient: 'from-emerald-500/20 via-cyan-500/20 to-blue-500/20',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive product viewer with Spline and WebGL shaders, optimized for mobile.',
    tags: ['Spline', 'Three.js', 'Vite'],
    link: '#',
    gradient: 'from-amber-500/20 via-rose-500/20 to-purple-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Projects</h2>
          <p className="mt-3 text-slate-300">
            Highlights from recent work that blend performance, interactivity, and thoughtful UX.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-lg">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-white/10 border border-white/15 p-2 text-white group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-slate-200 bg-black/30 border border-white/10 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
