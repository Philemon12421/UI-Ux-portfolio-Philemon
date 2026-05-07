import { Github, Linkedin, Dribbble, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="font-bold text-lg">Philemon Osei Kusi</h3>
          <p className="text-zinc-500 text-sm">UI/UX & Graphic Designer</p>
        </div>
        
        <div className="flex gap-6 text-zinc-600">
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center hover:bg-lemon transition-all hover:-translate-y-1 shadow-sm">
            <Github size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center hover:bg-lemon transition-all hover:-translate-y-1 shadow-sm">
            <Linkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center hover:bg-lemon transition-all hover:-translate-y-1 shadow-sm">
            <Dribbble size={18} />
          </a>
          <a href="mailto:philemonkusi292@gmail.com" className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center hover:bg-lemon transition-all hover:-translate-y-1 shadow-sm">
            <Mail size={18} />
          </a>
        </div>
        
        <p className="text-zinc-400 text-xs">
          © {new Date().getFullYear()} Philemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
