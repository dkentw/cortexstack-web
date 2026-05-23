import { Bot, Cloud, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
    title: "AI Agent Development",
    description:
      "We design and deploy intelligent AI agents that automate complex workflows, enhance decision-making, and integrate seamlessly with your existing systems. From LLM-powered chatbots to autonomous task executors.",
    link: "#contact",
  },
  {
    icon: Cloud,
    color: "from-teal-500 to-cyan-500",
    shadow: "shadow-teal-500/20",
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development from architecture to launch. We build scalable, multi-tenant platforms with modern tech stacks — React, Next.js, Node.js, and cloud-native infrastructure.",
    link: "#contact",
  },
  {
    icon: Cpu,
    color: "from-blue-500 to-teal-500",
    shadow: "shadow-blue-500/20",
    title: "IoT Solutions",
    description:
      "Connect the physical and digital worlds. We build IoT systems from hardware integration to cloud dashboards, enabling real-time monitoring and control across industrial and consumer environments.",
    link: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three powerful pillars of technology expertise, delivered by a team
            that lives and breathes innovation.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:bg-slate-900/80 hover:-translate-y-1"
              >
                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 to-teal-500/5" />

                {/* Icon */}
                <div
                  className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg ${service.shadow} mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 relative">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6 relative">
                  {service.description}
                </p>

                {/* Learn more link */}
                <a
                  href={service.link}
                  className="relative inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
