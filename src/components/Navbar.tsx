import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav 
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-6`}
    >
      <div className={`flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500 ${
        scrolled 
          ? "glass shadow-xl shadow-zinc-200/50 w-full max-w-2xl" 
          : "bg-white/50 backdrop-blur-sm border border-zinc-100 w-full max-w-4xl"
      }`}>
        <Link to="/" className="text-lg font-bold tracking-tighter flex items-center gap-2 shrink-0">
          <span className="w-7 h-7 bg-lemon rounded-lg flex items-center justify-center text-[10px] font-black">P.</span>
          <span className="hidden sm:inline">Philemon</span>
        </Link>

        {/* Desktop Nav - Centered items */}
        <div className="flex-grow flex justify-center items-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="hidden md:flex px-5 py-2 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-lemon hover:text-zinc-900 transition-all shrink-0"
        >
          Hire
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden shrink-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-900"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
