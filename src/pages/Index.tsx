import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileDown,
  Link,
  NotebookPen,
  Code2,
  Briefcase,
  BookOpen,
  MessageSquare,
  ChevronDown,
  Star,
  GitFork,
  Globe,
} from "lucide-react";
import { Layers, Sparkles, Database, PlaneTakeoff } from "lucide-react";
import { useGithubRepos } from "@/hooks/use-github-repos";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Repos", href: "#repos" },
  { label: "Contact", href: "#contact" },
];

const GlassCard = ({
  children,
  className = "",
  hoverBorder = "hover:border-white/20",
}: {
  children: React.ReactNode;
  className?: string;
  hoverBorder?: string;
}) => (
  <div
    className={`backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-2xl shadow-lg shadow-black/30 transition-all duration-300 hover:bg-white/[0.07] ${hoverBorder} ${className}`}
  >
    {children}
  </div>
);

const SectionBadge = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/10 text-sm text-gray-400 mb-4">
    {icon}
    {label}
  </div>
);

const AnimateIn = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) => {
  const [ref, inView] = useInView();
  const translate = {
    up: inView ? "translate-y-0" : "translate-y-10",
    left: inView ? "translate-x-0" : "-translate-x-10",
    right: inView ? "translate-x-0" : "translate-x-10",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } ${translate} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const LANG_COLORS: Record<string, string> = {
  Python: "#3776AB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Vue: "#41B883",
  HCL: "#844FBA",
  HTML: "#E34F26",
};

const RepoSkeleton = () => (
  <div className="backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-2xl p-5 animate-pulse">
    <div className="h-4 bg-white/10 rounded w-2/3 mb-3" />
    <div className="h-3 bg-white/[0.06] rounded w-full mb-1" />
    <div className="h-3 bg-white/[0.06] rounded w-4/5 mb-4" />
    <div className="flex gap-3">
      <div className="h-3 bg-white/[0.06] rounded w-12" />
      <div className="h-3 bg-white/[0.06] rounded w-12" />
    </div>
  </div>
);

const Index = () => {
  const { repos, loading, error } = useGithubRepos("Muazzeem");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const PAGE_SIZE = 6;

  const languages = [
    "All",
    ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[])),
  ];

  const filtered =
    activeFilter === "All"
      ? repos
      : repos.filter((r) => r.language === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (lang: string) => {
    setActiveFilter(lang);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBackground />

      {/* Ambient glow orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[45%] left-[35%] w-[400px] h-[400px] rounded-full bg-cyan-500/[0.08] blur-[120px] pointer-events-none z-0" />

      {/* Sticky Glass Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <GlassCard className="px-6 py-3 flex items-center justify-between">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10">
              <img src="/mamun.png" alt="Mamun" className="w-full h-full object-cover" />
            </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:muazzem.mamun@gmail.com"
            className="hidden md:block text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/20 text-blue-300 hover:border-blue-400/50 transition-all"
          >
            Hire Me
          </a>
        </GlassCard>
      </nav>

      <div className="relative z-10 text-center px-4 pt-32">

        {/* ── Hero ── */}
        <section id="about" className="mb-8">
          <div className="mb-8 flex justify-center">
            <div className="w-28 h-28 rounded-full border border-white/10 shadow-xl shadow-blue-500/10 ring-1 ring-inset ring-white/5 overflow-hidden">
              <img src="/mamun.png" alt="Mamun" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/10 text-sm text-gray-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hello, I'm
              <br />
              <span className="gradient-text text-5xl md:text-7xl block mt-2">
                Muazzem Hossain
              </span>
            </h1>
          </div>

          <div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
              A versatile backend engineer with a passion for building scalable
              and efficient systems — from early explorations of coding to building
              powerful APIs that now power cloud-native solutions and modern
              applications.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="https://drive.google.com/file/d/1lNbPv7a0mo4YLCF386LJRjRUHJJM49-n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white border-0 shadow-lg shadow-blue-500/25"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>

          <AnimateIn delay={500} direction="none">
            <div className="flex justify-center mb-16 animate-bounce">
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </div>
          </AnimateIn>
        </section>

        {/* ── Stats ── */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Shipped", value: "20+" },
              { label: "Technologies", value: "15+" },
              { label: "Open Source Repos", value: "10+" },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 100}>
                <GlassCard className="p-5">
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section id="stack" className="mb-24">
          <AnimateIn>
            <SectionBadge icon={<Code2 className="w-4 h-4" />} label="Tech Stack" />
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              What I Work With
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {[
              {
                icon: <Layers className="w-5 h-5 text-blue-400" />,
                iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                hoverBorder: "hover:border-blue-400/30",
                title: "Fullstack",
                sections: [
                  { label: "Frontend", items: ["Angular", "Vue", "JavaScript", "React"] },
                  {
                    label: "Backend",
                    items: ["Python", "Django", "Django-REST", "Oscar", "Flask", "FastAPI"],
                  },
                ],
              },
              {
                icon: <Sparkles className="w-5 h-5 text-purple-400" />,
                iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
                hoverBorder: "hover:border-purple-400/30",
                title: "Gen AI",
                sections: [
                  {
                    label: "Core",
                    items: ["Document-AI", "Vertex-AI", "Prompt Engineering", "Fine Tuning"],
                  },
                ],
              },
              {
                icon: <Database className="w-5 h-5 text-cyan-400" />,
                iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
                hoverBorder: "hover:border-cyan-400/30",
                title: "Cloud / Data",
                sections: [{ label: "Cloud Platforms", items: ["GCP", "AWS"] }],
              },
              {
                icon: <PlaneTakeoff className="w-5 h-5 text-green-400" />,
                iconBg: "bg-green-500/10 group-hover:bg-green-500/20",
                hoverBorder: "hover:border-green-400/30",
                title: "CI/CD",
                sections: [
                  {
                    label: "Deployment",
                    items: ["Github Actions", "AWS CodePipeline", "Docker", "Terraform"],
                  },
                ],
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 100}>
              <GlassCard
                hoverBorder={card.hoverBorder}
                className="p-6 group text-left h-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                </div>
                <div className="space-y-4">
                  {card.sections.map((sec) => (
                    <div key={sec.label}>
                      <p className="text-xs text-gray-600 mb-2 uppercase tracking-widest">
                        {sec.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sec.items.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="mb-10">
          <AnimateIn>
            <SectionBadge icon={<Code2 className="w-4 h-4" />} label="Projects" />
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              Things I've Built
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
            {[
              {
                img: "/jobkhuzi.png",
                title: "Job Search Portal",
                desc: "A specialized job search portal designed for engineers, offering advanced capabilities such as powerful search, filtering, and sorting features.",
                github: null,
                live: "https://jobkhuzi.com/",
                liveLabel: "Live Demo",
              },
              {
                img: "/portat.png",
                title: "Portal Scraping",
                desc: "A Python-based project for scraping data from job portals. Easy to use and customizable.",
                github: "https://github.com/saifulazad/portal-scraping",
                live: null,
                liveLabel: "Live Demo",
              },
              {
                img: "/doc-ai.png",
                title: "Python Package for Google Document-AI",
                desc: "A reusable package for integrating Google Document AI into Python applications, streamlining document processing workflows.",
                github: "https://github.com/Muazzeem/reusable-doc-ai-package",
                live: "https://pypi.org/project/reusable-code-for-document-ai/",
                liveLabel: "PyPI",
              },
              {
                img: "/google-auth.png",
                title: "Keyless Authentication",
                desc: "Authenticate from GitHub Actions to create and manage Google Cloud resources using Workload Identity Federation.",
                github: "https://github.com/Muazzeem/gcp-infrastructure-using-terraform/tree/main/wlif",
                live: null,
                liveLabel: "Live Demo",
              },
            ].map((project, i) => (
              <AnimateIn key={project.title} delay={i * 120}>
              <GlassCard className="p-6 group text-left h-full">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white text-xs"
                      >
                        <Github className="w-3 h-3" /> GitHub
                      </Button>
                    </a>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-white/[0.02] border-white/5 text-gray-600 text-xs"
                    >
                      <Github className="w-3 h-3" /> GitHub
                    </Button>
                  )}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white text-xs"
                      >
                        <ExternalLink className="w-3 h-3" /> {project.liveLabel}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-white/[0.02] border-white/5 text-gray-600 text-xs"
                    >
                      <ExternalLink className="w-3 h-3" /> {project.liveLabel}
                    </Button>
                  )}
                </div>
              </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </section>

        <div className="mb-24">
          <a
            href="https://github.com/Muazzeem?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white"
            >
              <Link className="w-4 h-4" />
              See More Projects on GitHub
            </Button>
          </a>
        </div>

        {/* ── Experience ── */}
        <section id="experience" className="mb-24">
          <AnimateIn>
            <SectionBadge
              icon={<Briefcase className="w-4 h-4" />}
              label="Experience"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              Where I've Worked
            </h2>
          </AnimateIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

            <div className="space-y-6">
              {[
                {
                  logo: "/Vemate.png",
                  company: "Vemate",
                  role: "Fullstack Developer",
                  period: "2025 – Present",
                  dotColor: "bg-blue-500",
                  bulletColor: "text-blue-400",
                  bullets: [
                    "Build automated marketing and sales solutions with Python and Django.",
                    "Create full-stack applications using Nuxt for the front end and Django for the back end.",
                    "Design and manage a reliable CI/CD pipeline leveraging GitLab Actions and Docker.",
                  ],
                },
                {
                  logo: "/29563467.jpeg",
                  company: "Bitstrapped",
                  role: "Backend Developer",
                  period: "2023 – 2024",
                  dotColor: "bg-purple-500",
                  bulletColor: "text-purple-400",
                  bullets: [
                    "Developed innovative AI applications for healthcare and finance using advanced ML models.",
                    "Provisioned multi-state infrastructures with Terraform in reusable modules.",
                    "Established seamless data migration pipeline from AWS to GCP.",
                  ],
                },
                {
                  logo: "/1633533238917.jpeg",
                  company: "Fractalslab",
                  role: "Fullstack Developer",
                  period: "2020 – 2023",
                  dotColor: "bg-cyan-500",
                  bulletColor: "text-cyan-400",
                  bullets: [
                    "Built a job recommendation system using advanced algorithms.",
                    "Developed strong and scalable backend solutions with Python and Django.",
                    "Designed and deployed architecture using Terraform, improving scalability and reliability.",
                  ],
                },
              ].map((exp, i) => (
                <AnimateIn key={exp.company} delay={i * 150} direction="left">
                <GlassCard className="p-6 text-left md:ml-16 relative">
                  <div
                    className={`absolute -left-[52px] top-6 w-4 h-4 rounded-full ${exp.dotColor} border-4 border-black hidden md:block`}
                  />
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-14 h-14 rounded-xl object-cover border border-white/10"
                    />
                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.company}
                        </h3>
                        <p className="text-purple-400 text-sm">{exp.role}</p>
                      </div>
                      <span className="text-xs text-gray-500 backdrop-blur-md bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className={`mt-1 ${exp.bulletColor}`}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Blog ── */}
        <section id="blog" className="mb-24">
          <AnimateIn>
            <SectionBadge icon={<BookOpen className="w-4 h-4" />} label="Blog" />
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              Latest Articles
            </h2>
          </AnimateIn>
          <p className="text-gray-500 mb-12 text-sm">
            Thoughts on engineering, AI, and cloud architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {[
              {
                tag: "Cloud",
                tagStyle: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
                title: "Keyless Authentication with GCP & GitHub Actions",
                desc: "How to authenticate from GitHub Actions to manage Google Cloud resources using Workload Identity Federation — no secrets required.",
              },
              {
                tag: "AI",
                tagStyle: "text-purple-400 bg-purple-400/10 border-purple-400/20",
                title: "Building Reusable Python Packages for Document AI",
                desc: "A deep dive into packaging Google Document AI integrations as a reusable Python library for streamlined workflows.",
              },
              {
                tag: "Infrastructure",
                tagStyle: "text-green-400 bg-green-400/10 border-green-400/20",
                title: "Multi-Cloud Data Migration: AWS to GCP",
                desc: "Lessons learned from designing a seamless data migration pipeline from Amazon Web Services to Google Cloud Platform.",
              },
            ].map((post, i) => (
              <AnimateIn key={post.title} delay={i * 100}>
                <a
                  href="https://medium.com/@muazzem.mamun"
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full"
                >
                  <GlassCard className="p-6 text-left h-full flex flex-col hover:border-white/20">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border w-fit mb-3 ${post.tagStyle}`}
                    >
                      {post.tag}
                    </span>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {post.desc}
                    </p>
                    <p className="text-blue-400 text-xs mt-4 group-hover:underline">
                      Read on Medium →
                    </p>
                  </GlassCard>
                </a>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://medium.com/@muazzem.mamun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white"
              >
                <NotebookPen className="w-4 h-4" />
                See All Articles on Medium
              </Button>
            </a>
          </div>
        </section>

        {/* ── GitHub Repos ── */}
        <section id="repos" className="mb-24">
          <AnimateIn>
            <SectionBadge icon={<Github className="w-4 h-4" />} label="Open Source" />
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              GitHub Repositories
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              All public repos, updated in real-time from GitHub.
            </p>
          </AnimateIn>

          {/* Language filter pills */}
          {!loading && !error && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleFilterChange(lang)}
                  className={`px-4 py-1.5 rounded-full text-xs border transition-all duration-200 ${
                    activeFilter === lang
                      ? "bg-white/10 border-white/30 text-white"
                      : "bg-white/[0.03] border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/20"
                  }`}
                >
                  {lang === "All" ? (
                    "All"
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: LANG_COLORS[lang] ?? "#888" }}
                      />
                      {lang}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)
              : error
              ? (
                <p className="col-span-3 text-gray-500 text-sm">
                  Could not load repositories.
                </p>
              )
              : visible.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <GlassCard className="p-5 h-full flex flex-col text-left hover:border-white/20 group-hover:shadow-blue-500/5">
                      {/* Name + external icon */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug break-all">
                          {repo.name}
                        </h3>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 shrink-0 mt-0.5 transition-colors" />
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3 line-clamp-2">
                        {repo.description ?? "No description provided."}
                      </p>

                      {/* Topics */}
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {repo.topics.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-[10px] text-blue-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer: language · stars · forks · homepage */}
                      <div className="flex items-center gap-3 text-xs text-gray-600 mt-auto flex-wrap">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: LANG_COLORS[repo.language] ?? "#888",
                              }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="ml-auto flex items-center gap-1 text-blue-400 hover:underline"
                          >
                            <Globe className="w-3 h-3" />
                            Live
                          </a>
                        )}
                      </div>
                    </GlassCard>
                  </a>
                ))}
          </div>

          {!loading && !error && (
            <div className="mt-8 flex flex-col items-center gap-3">
              {hasMore ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white min-w-[160px]"
                >
                  Show More
                  <span className="text-xs text-gray-500">
                    ({filtered.length - visibleCount} remaining)
                  </span>
                </Button>
              ) : filtered.length > PAGE_SIZE && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setVisibleCount(PAGE_SIZE)}
                  className="gap-2 backdrop-blur-md bg-white/[0.04] border-white/10 hover:bg-white/[0.08] text-white min-w-[160px]"
                >
                  Show Less
                </Button>
              )}
              <p className="text-xs text-gray-600">
                Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} repos
              </p>
              <a
                href="https://github.com/Muazzeem?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-gray-500 hover:text-white text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  View All on GitHub
                </Button>
              </a>
            </div>
          )}
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="pb-20">
          <AnimateIn>
            <SectionBadge
              icon={<MessageSquare className="w-4 h-4" />}
              label="Contact"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-12 max-w-md mx-auto text-sm">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="max-w-md mx-auto">
              <GlassCard className="p-8">
              <div className="flex justify-center gap-5 mb-8">
                {[
                  {
                    href: "mailto:muazzem.mamun@gmail.com",
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    hoverStyle:
                      "group-hover:border-blue-400/40 group-hover:bg-blue-400/10 group-hover:text-blue-400",
                  },
                  {
                    href: "https://www.linkedin.com/in/muazzem-hossain/",
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    hoverStyle:
                      "group-hover:border-blue-400/40 group-hover:bg-blue-400/10 group-hover:text-blue-400",
                  },
                  {
                    href: "https://github.com/Muazzeem",
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                    hoverStyle:
                      "group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white",
                  },
                  {
                    href: "https://medium.com/@muazzem.mamun",
                    icon: <NotebookPen className="w-5 h-5" />,
                    label: "Medium",
                    hoverStyle:
                      "group-hover:border-green-400/40 group-hover:bg-green-400/10 group-hover:text-green-400",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl backdrop-blur-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-500 transition-all ${social.hoverStyle}`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
              <a href="mailto:muazzem.mamun@gmail.com">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white border-0 shadow-lg shadow-blue-500/20">
                  <Mail className="w-4 h-4 mr-2" />
                  Say Hello
                </Button>
              </a>
            </GlassCard>
            </div>
          </AnimateIn>

          <AnimateIn delay={300} direction="none">
            <p className="text-gray-700 text-xs mt-10">
              © 2025 Muazzem Hossain · Built with React & Tailwind
            </p>
          </AnimateIn>
        </section>
      </div>
    </div>
  );
};

export default Index;
