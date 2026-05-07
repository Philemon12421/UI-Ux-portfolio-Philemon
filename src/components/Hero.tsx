import { motion } from "motion/react";
import { ArrowRight, Download, Figma, Image, PenTool, Layout, Monitor } from "lucide-react";

export default function Hero() {
  const tools = [
    { icon: <Figma size={32} />, x: "15%", y: "20%", delay: 0 },
    { icon: <Layout size={28} />, x: "80%", y: "15%", delay: 0.5 },
    { icon: <PenTool size={24} />, x: "10%", y: "70%", delay: 1 },
    { icon: <Image size={30} />, x: "85%", y: "60%", delay: 1.5 },
    { icon: <Monitor size={26} />, x: "75%", y: "80%", delay: 0.8 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 px-6">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lemon/10 rounded-full blur-[120px] -z-10" />
      
      {/* Floating Icons */}
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-16 h-16 bg-white shadow-xl rounded-2xl text-zinc-300 pointer-events-none z-0"
          style={{ left: tool.x, top: tool.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: tool.delay,
            ease: "easeInOut"
          }}
        >
          {tool.icon}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          {/* Animated decorative ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-lemon-dark/30 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-zinc-100 rounded-full"
          />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 0, 0] // baseline
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
              alt="Philemon Kusi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 bg-lemon px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg z-20"
          >
            Digital Artist
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          className="flex flex-col items-center"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block px-4 py-1.5 bg-lemon/20 text-lemon-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6"
          >
            Based in Ghana
          </motion.span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-zinc-900 leading-[0.9] mb-8 text-balance">
            {"Designing Experiences That Feel ".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-[0.2em]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              className="text-zinc-400 font-light italic inline-block"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            >
              Effortless.
            </motion.span>
          </h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4 transition-all duration-700"
          >
            UI/UX & Graphic Designer crafting intuitive, modern, and impactful digital products. 
            Blending Computer Science logic with creative vision.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#work" 
              className="group w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-lemon hover:text-zinc-900 transition-all shadow-xl shadow-zinc-200 active:scale-95"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-600 border border-zinc-200 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all active:scale-95">
              Download Resume
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
