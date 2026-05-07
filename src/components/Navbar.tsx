import { motion, AnimatePresence } from "motion/react";
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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 w-full max-w-[95%] md:max-w-2xl ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-zinc-200/60 border border-zinc-100"
              : "bg-white/60 backdrop-blur-md border border-zinc-100/80"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-base font-bold tracking-tighter flex items-center gap-2 shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="w-7 h-7 bg-lemon rounded-lg flex items-center justify-center text-[10px] font-black text-zinc-900">
              P.
            </span>
            <span className="hidden sm:inline font-extrabold text-zinc-900 tracking-tight">Philemon</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lemon group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="hidden md:flex px-5 py-2 bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-lemon hover:text-zinc-900 transition-all duration-300 shrink-0"
            >
              Hire Me
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+8px)] left-4 right-4 bg-white/95 backdrop-blur-xl border border-zinc-100 rounded-3xl shadow-2xl shadow-zinc-200/50 p-6 flex flex-col gap-1 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-semibold text-zinc-800 hover:text-zinc-900 py-3 px-4 rounded-2xl hover:bg-zinc-50 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="mt-3 pt-3 border-t border-zinc-100">
                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-zinc-900 text-white text-sm font-bold uppercase tracking-widest rounded-2xl hover:bg-lemon hover:text-zinc-900 transition-all flex items-center justify-center"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
