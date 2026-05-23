import { ExternalLink } from "lucide-react";

const works = [
  {
    title: "RoleFit",
    tagline: "Know Your Job Fit Before You Apply",
    description:
      "An AI-powered resume-to-job-description matching platform. Scores how well a candidate's resume aligns with a specific job posting in seconds — serving both job seekers and hiring teams.",
    url: "https://rolefit.kentstack.me/",
    tags: ["AI Agent", "SaaS"],
    accent: "from-cyan-500 to-blue-500",
    accentBg: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "Mingann Info Service",
    tagline: "明安資訊服務有限公司",
    description:
      "Corporate website for a Taiwanese IT solutions company (est. 2005) serving 100+ government agencies. Custom application development, gateway security, network services, and open-source implementations.",
    url: "https://demo-mingann.kentstack.me/",
    tags: ["SaaS", "Enterprise"],
    accent: "from-teal-500 to-emerald-500",
    accentBg: "from-teal-500/10 to-emerald-500/10",
  },
  {
    title: "Kent's Resume",
    tagline: "Interactive Developer Portfolio",
    description:
      "A modern, interactive online resume and portfolio page built to showcase technical skills, work history, and projects in a clean, engaging format.",
    url: "https://resume.kentstack.me/",
    tags: ["Web", "Portfolio"],
    accent: "from-violet-500 to-purple-500",
    accentBg: "from-violet-500/10 to-purple-500/10",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects We&apos;ve Built
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${work.accent}`} />

              {/* Gradient background accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${work.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10 p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-200">
                  {work.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3 font-medium">
                  {work.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {work.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-1.5 mt-5 text-cyan-400 text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
