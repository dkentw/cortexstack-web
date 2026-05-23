import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <Image src="/logo.webp" alt="CortexStack" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-white tracking-tight">
                CortexStack
              </span>
            </a>
            <p className="text-slate-500 text-sm">
              Building intelligent AI, SaaS, and IoT solutions.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Services</a>
            <a href="#works" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Works</a>
            <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Contact</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-sm">
            &copy; 2025 CortexStack. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
