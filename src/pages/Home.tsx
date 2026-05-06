import { motion } from "motion/react";
import Hero from "../components/Hero";
import About from "../components/About";
import ReadmeSection from "../components/ReadmeSection";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import { PROJECTS, SKILLS, ACHIEVEMENTS } from "../constants";
import { Star, Award, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Featured Work */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase mb-4">Portfolio</h2>
              <h3 className="text-5xl font-bold tracking-tight">Selected <br /><span className="text-zinc-300">Works.</span></h3>
            </div>
            <p className="text-zinc-500 max-w-sm mb-2 font-light">
              Explorations in digital craft, prioritizing user needs and clean software architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
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
              <h3 className="text-4xl font-bold tracking-tight mb-6">Technical <br /><span className="text-zinc-300">& Creative</span> <br />Arsenal.</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Utilizing industry-standard tools and modern frontend frameworks to deliver high-performance design systems.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[32px] border border-zinc-100 flex items-center gap-4 transition-all hover:bg-lemon/5 hover:border-lemon/20 cursor-default"
                >
                  <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-lemon" size={20} />
                  </div>
                  <span className="font-bold text-zinc-900">{skill}</span>
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
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase mb-4">Recognition</h2>
                <h3 className="text-4xl font-bold tracking-tight mb-8">Achievements & Awards.</h3>
              </div>
              
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.title} className="p-10 bg-zinc-900 rounded-[40px] text-zinc-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-lemon mb-4">
                      <Star size={20} fill="#C7F000" />
                      <span className="text-xs font-black uppercase tracking-widest">{ach.organization} • {ach.year}</span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-4">{ach.title}</h4>
                    <p className="font-light leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              {[
                { 
                  quote: "Philemon has a rare ability to understand complex technical constraints and turn them into beautiful, simple user journeys.", 
                  author: "Alex Benson", 
                  role: "Project Manager, Bankiti" 
                },
                { 
                  quote: "His attention to detail and passion for UI consistency helped us scale our design system globally with zero friction.", 
                  author: "Sarah Chen", 
                  role: "Lead Platform Designer, Zudika" 
                }
              ].map((testi, i) => (
                <div key={i} className="p-10 border border-zinc-100 rounded-[40px] hover:border-lemon/50 transition-colors">
                  <p className="text-xl text-zinc-700 italic font-light mb-8 italic">"{testi.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-400">
                      {testi.author[0]}
                    </div>
                    <div>
                      <h5 className="font-bold">{testi.author}</h5>
                      <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
