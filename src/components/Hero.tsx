import { motion } from "motion/react";
import { ArrowRight, Download, Figma, Image, PenTool, Layout, Monitor, Code2, Layers, Cpu, Globe } from "lucide-react";

// Custom SVG icons for tools not in lucide
const BlenderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 9V4M9 4h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="14.5" cy="13.5" r="1.5" fill="currentColor"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M7 16V8h3.5a2.5 2.5 0 0 1 0 5H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 16c0-2.2 1.8-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 16l2.5-8 2.5 8M9 13h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export default function Hero() {
  const tools = [
    { icon: <Figma size={22} />, x: "8%",  y: "22%", delay: 0,   label: "Figma" },
    { icon: <Layout size={20} />,  x: "82%", y: "18%", delay: 0.5, label: "UI Design" },
    { icon: <PenTool size={20} />, x: "6%",  y: "65%", delay: 1,   label: "Pen Tool" },
    { icon: <Image size={22} />,   x: "86%", y: "58%", delay: 1.5, label: "Graphics" },
    { icon: <Monitor size={20} />, x: "78%", y: "80%", delay: 0.8, label: "Web" },
    { icon: <BlenderIcon />,        x: "14%", y: "80%", delay: 1.2, label: "Blender" },
    { icon: <PhotoshopIcon />,      x: "88%", y: "38%", delay: 0.3, label: "Photoshop" },
    { icon: <IllustratorIcon />,    x: "4%",  y: "42%", delay: 1.8, label: "Illustrator" },
    { icon: <Code2 size={20} />,    x: "70%", y: "10%", delay: 0.7, label: "Code" },
    { icon: <Layers size={20} />,   x: "20%", y: "12%", delay: 1.4, label: "Layers" },
    { icon: <Cpu size={18} />,      x: "92%", y: "72%", delay: 2,   label: "Tech" },
    { icon: <Globe size={20} />,    x: "55%", y: "6%",  delay: 0.9, label: "Global" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lemon/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Floating Tool Icons — desktop only */}
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex flex-col items-center justify-center w-14 h-14 bg-white shadow-lg rounded-2xl text-zinc-400 pointer-events-none z-0 border border-zinc-50"
          style={{ left: tool.x, top: tool.y }}
          animate={{ y: [0, -16, 0], rotate: [0, 6, -6, 0] }}
          transition={{
            duration: 4.5 + i * 0.3,
            repeat: Infinity,
            delay: tool.delay,
            ease: "easeInOut",
          }}
        >
          {tool.icon}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-lemon-dark/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-zinc-100 rounded-full"
          />

          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10"
          >
            <img
              src="/done2.png"
              alt="Philemon Kusi"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 bg-lemon px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg z-20 text-zinc-900"
          >
            Digital Artist
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block px-4 py-1.5 bg-lemon/20 text-lemon-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6"
          >
            Based in Ghana 🇬🇭
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
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4"
          >
            UI/UX & Graphic Designer crafting intuitive, modern, and impactful digital products.
            Blending Computer Science logic with creative vision.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-8 mb-10"
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "1", label: "Award" },
              { value: "3+", label: "Years Exp." },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-zinc-900">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

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
            <a
              href="/Philemon_Kusi_Resume.pdf"
              download
              className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-600 border border-zinc-200 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all active:scale-95"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-zinc-300 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
