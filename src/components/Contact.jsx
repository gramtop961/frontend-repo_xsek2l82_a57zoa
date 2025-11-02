import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }
    setStatus('Thanks! Your message has been queued.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-slate-300">
            Let's collaborate. I'm open to internships, full‑time roles, and freelance projects.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-slate-200">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>Send a message</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold px-4 py-3 hover:bg-cyan-400 transition-colors">
                Send
                <Send className="h-4 w-4" />
              </button>
              {status && (
                <p className="text-sm text-slate-300">{status}</p>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Around the web</h3>
            <p className="mt-3 text-sm text-slate-300">
              Prefer email? Reach me at <span className="text-white/90">you@example.com</span>
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white hover:bg-black/40">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white hover:bg-black/40">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
