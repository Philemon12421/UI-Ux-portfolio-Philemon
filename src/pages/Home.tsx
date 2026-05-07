import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "../components/Hero";
import About from "../components/About";
import ReadmeSection from "../components/ReadmeSection";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import { PROJECTS, SKILLS, ACHIEVEMENTS } from "../constants";
import { Star, Award, CheckCircle2, Filter } from "lucide-react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    // Build category list: All + UI/UX + Graphic Design + unique tags
    const tags = PROJECTS.flatMap((p) => p.tags);
    const uniqueTags = [...new Set(tags)];
    return ["All", "UI/UX", "Graphic Design", ...uniqueTags.filter(t => t !== "UI/UX" && t !== "Graphic Design")];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    if (activeFilter === "UI/UX") return PROJECTS.filter(p => p.category === "UI/UX");
    if (activeFilter === "Graphic Design") return PROJECTS.filter(p => p.category === "Graphic Design");
    return PROJECTS.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="bg-white">
      <Hero />

      {/* Featured Work */}
      <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase">Portfolio</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Selected <br />
                <span className="text-zinc-300">Works.</span>
              </h3>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                <Filter size={13} />
                Filter by category
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Only show key filters to avoid clutter */}
                {["All", "UI/UX", "Graphic Design", "Mobile App", "Branding"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                      activeFilter === cat
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-md"
                        : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300 hover:text-zinc-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <About />

      <ReadmeSection />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase mb-4">Capabilities</h2>
              <h3 className="text-4xl font-bold tracking-tight mb-6">
                Technical <br />
                <span className="text-zinc-300">&amp; Creative</span> <br />
                Arsenal.
              </h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Utilizing industry-standard tools and modern frontend frameworks to deliver
                high-performance design systems.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(199, 240, 0, 0.04)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative bg-white p-6 rounded-[24px] border border-zinc-100 flex items-center gap-4 transition-all hover:border-lemon/30 hover:shadow-sm cursor-default"
                >
                  <div className="w-9 h-9 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-lemon" size={15} />
                  </div>
                  <span className="font-bold text-sm text-zinc-900">{skill.name}</span>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 p-3 bg-zinc-900 text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-20 text-center leading-relaxed">
                    {skill.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-zinc-900" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Achievements */}
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase mb-4">Recognition</h2>
                <h3 className="text-4xl font-bold tracking-tight">Achievements &amp; Awards.</h3>
              </div>

              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.title}
                  className="p-10 bg-zinc-900 rounded-[40px] text-zinc-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={110} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-lemon mb-4">
                      <Star size={18} fill="#C7F000" />
                      <span className="text-xs font-black uppercase tracking-widest">
                        {ach.organization} • {ach.year}
                      </span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-4">{ach.title}</h4>
                    <p className="font-light leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-6 flex flex-col justify-center">
              {[
                {
                  quote:
                    "Philemon has a rare ability to understand complex technical constraints and turn them into beautiful, simple user journeys.",
                  author: "Alex Benson",
                  role: "Project Manager, Bankiti",
                },
                {
                  quote:
                    "His attention to detail and passion for UI consistency helped us scale our design system globally with zero friction.",
                  author: "Sarah Chen",
                  role: "Lead Platform Designer, Zudika",
                },
              ].map((testi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 border border-zinc-100 rounded-[32px] hover:border-lemon/40 hover:shadow-sm transition-all"
                >
                  <p className="text-lg text-zinc-700 italic font-light mb-6 leading-relaxed">
                    "{testi.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-500 text-sm">
                      {testi.author[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{testi.author}</h5>
                      <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">
                        {testi.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
