import { motion } from "motion/react";
import { Terminal, FileCode, Coffee, Globe, Cpu } from "lucide-react";

export default function ReadmeSection() {
  const stats = [
    { label: "Role", value: "Creative Designer", icon: <Globe size={14} /> },
    { label: "Status", value: "Open for Opportunities", icon: <Coffee size={14} /> },
    { label: "Location", value: "Accra, Ghana", icon: <Terminal size={14} /> },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-[40px] shadow-2xl overflow-hidden border border-zinc-800"
        >
          {/* Header */}
          <div className="bg-zinc-800/50 px-8 py-4 flex items-center justify-between border-b border-zinc-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
              <FileCode size={14} />
              README.md
            </div>
            <div className="w-12" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 font-mono">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.h2 
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="text-lemon text-xl md:text-3xl font-bold mb-8 flex items-center gap-4"
              >
                <span className="text-zinc-600">#</span>
                Hi, I'm Philemon Kusi <span className="animate-pulse">_</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="space-y-6"
                >
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    A multi-disciplinary designer and computer science scholar at KNUST. 
                    I build bridges between user empathy and technical feasibility.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Cpu size={14} className="text-lemon" /> system_stats
                    </h3>
                    {stats.map((stat, i) => (
                      <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-zinc-800/50">
                        <span className="text-zinc-500 flex items-center gap-2">
                          {stat.icon} {stat.label}
                        </span>
                        <span className="text-zinc-200">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="bg-zinc-800/30 p-6 rounded-3xl border border-zinc-800"
                >
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Terminal size={14} className="text-lemon" /> core_directives
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: "🎨", text: "Clean Minimalism" },
                      { icon: "⚡", text: "Performance Driven" },
                      { icon: "🧠", text: "Human-Centric UI" },
                      { icon: "🛠️", text: "Scalable Logic" }
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap gap-4"
              >
                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full text-[10px] font-bold">
                  $ build success
                </div>
                <div className="px-4 py-2 bg-lemon/10 border border-lemon-dark/20 text-lemon rounded-full text-[10px] font-bold">
                  $ npm audit 0 vulnerabilities
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
