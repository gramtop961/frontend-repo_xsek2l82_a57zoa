import React from 'react';
import { Code2, Cpu, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            I'm a recent CS graduate focused on building products that balance performance and delightful UX. I enjoy end‑to‑end development: designing APIs, shaping data models, and crafting pixel‑perfect interfaces. Interests include systems design, web performance, and interactive 3D on the web.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Full‑Stack</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              JavaScript/TypeScript, React, Node, Python, FastAPI, MongoDB, PostgreSQL.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Systems & Scaling</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              API design, caching, message queues, CI/CD, containers, and cloud.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Continuous Learning</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              I iterate quickly, write tests, and document trade‑offs to grow effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
