import { motion } from "motion/react";
import { Trophy, Code, Lightbulb, Users, Layout } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase mb-4">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Bridging the gap between <span className="text-zinc-400 font-light">Logic</span> and <span className="text-lemon-dark italic">Design.</span>
              </h3>
            </div>

            <div className="space-y-6 text-zinc-500 text-lg font-light leading-relaxed">
              <p>
                Philemon Osei Kusi is a passionate UI/UX and Graphic Designer and Computer Science student at KNUST. 
                Since starting his design journey in 2023, he has worked on multiple impactful projects across 
                different industries, including Bankiti, Zudika, and ISeek.
              </p>
              <p>
                He specializes in creating intuitive user experiences, clean interfaces, and visually engaging designs 
                that solve real-world problems. His technical background in computer science gives him an edge in 
                understanding both design and development workflows.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-lemon/5 rounded-3xl border border-lemon/10">
              <div className="w-12 h-12 bg-lemon rounded-2xl flex items-center justify-center shrink-0">
                <Trophy className="text-zinc-900" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">3rd Best UI/UX Designer</h4>
                <p className="text-sm text-zinc-500">Recognized at CodeQuest for exceptional design thinking and prototyping skills.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="aspect-square bg-zinc-50 rounded-3xl p-8 flex flex-col justify-end gap-3 group hover:bg-lemon transition-colors">
                <Code className="text-zinc-400 group-hover:text-zinc-900" />
                <h5 className="font-bold">CS Student</h5>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-700">Analytical Approach</p>
              </div>
              <div className="aspect-[4/5] bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end gap-3 text-white">
                <Users className="text-lemon" />
                <h5 className="font-bold">Team Player</h5>
                <p className="text-xs text-zinc-400">Collaborative Workflow</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-lemon rounded-3xl p-8 flex flex-col justify-end gap-3">
                <Lightbulb className="text-zinc-900" />
                <h5 className="font-bold">Innovator</h5>
                <p className="text-xs text-zinc-700">Problem Solver</p>
              </div>
              <div className="aspect-square bg-zinc-50 rounded-3xl p-8 flex flex-col justify-end gap-3 group hover:bg-zinc-100 transition-colors">
                <Layout className="text-zinc-400" />
                <h5 className="font-bold">Visualist</h5>
                <p className="text-xs text-zinc-400">Clean Aesthetics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
