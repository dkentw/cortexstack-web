import Image from "next/image";
import { Link } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-10">
          Meet the Founder
        </span>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-left">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-cyan-500/20">
              KC
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">Kent Chen</h3>
            <p className="text-cyan-400 text-sm font-medium mb-4">Founder &amp; CEO, CortexStack</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Kent is a software engineer and entrepreneur passionate about building intelligent systems.
              He founded CortexStack to help businesses leverage the power of AI agents, scalable SaaS
              platforms, and IoT technology — turning complex ideas into production-ready products.
            </p>
            <a
              href="https://www.linkedin.com/in/kent-chen-6a80059/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#0958a8] text-white text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/30"
            >
              <Link className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
