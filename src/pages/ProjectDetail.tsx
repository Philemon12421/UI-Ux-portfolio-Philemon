import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Monitor, Box, Layers, ArrowUpRight } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button onClick={() => navigate("/")} className="text-lemon-dark font-bold hover:underline">Go Home</button>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-32">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
          >
            <div>
              <div className="flex gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-300 border border-zinc-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">{project.name}</h1>
              <p className="text-lg sm:text-2xl text-zinc-500 font-light leading-relaxed">{project.shortDescription}</p>
            </div>
            
            <div className="flex flex-col gap-8 lg:items-end">
              <div className="flex flex-wrap gap-8 lg:justify-end">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Tools Used</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(t => (
                      <span key={t} className="px-3 py-1 bg-zinc-50 rounded-lg text-xs font-bold">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Role</span>
                  <p className="text-sm font-bold">Lead UI/UX Designer</p>
                </div>
              </div>

              {project.liveUrl && (
                <div className="pt-4 sm:pt-8 w-full sm:w-auto">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-lemon text-zinc-900 rounded-3xl font-bold inline-flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-lemon/10"
                  >
                    Launch Live Version
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto rounded-[48px] overflow-hidden aspect-[21/9] shadow-2xl shadow-zinc-100">
          <img 
            src={project.thumbnail} 
            alt={project.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Discovery */}
      <section className="px-6 py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <span className="w-12 h-12 bg-lemon rounded-2xl flex items-center justify-center">
                <Box size={24} className="text-zinc-900" />
              </span>
              <h3 className="text-3xl font-bold">The Problem</h3>
              <p className="text-zinc-600 font-light leading-relaxed">{project.problem}</p>
            </div>
            <div className="space-y-6">
              <span className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center">
                <Layers size={24} className="text-lemon" />
              </span>
              <h3 className="text-3xl font-bold">The Solution</h3>
              <p className="text-zinc-600 font-light leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Gallery */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {project.screens.map((screen, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] overflow-hidden border border-zinc-100"
            >
              <img 
                src={screen} 
                alt={`${project.name} Screen ${i + 1}`} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-zinc-900 text-white rounded-[40px] sm:rounded-[64px] mx-4 sm:mx-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <span className="text-lemon font-black uppercase tracking-widest text-[10px] sm:text-xs">Conclusion</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">Final Outcome</h2>
          <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed">{project.outcome}</p>
          <div className="pt-4 sm:pt-8">
            <button className="w-full sm:w-auto px-10 py-5 bg-lemon text-zinc-900 rounded-3xl font-bold inline-flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:scale-105">
              Launch Live Version
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
