export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="font-bold text-lg">Philemon Osei Kusi</h3>
          <p className="text-zinc-500 text-sm">UI/UX & Graphic Designer</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-zinc-600">
          <a href="#" className="hover:text-lemon-dark hover:underline underline-offset-4">GitHub</a>
          <a href="#" className="hover:text-lemon-dark hover:underline underline-offset-4">LinkedIn</a>
          <a href="#" className="hover:text-lemon-dark hover:underline underline-offset-4">Dribbble</a>
          <a href="mailto:philemonkusi292@gmail.com" className="hover:text-lemon-dark hover:underline underline-offset-4">Email</a>
        </div>
        
        <p className="text-zinc-400 text-xs">
          © {new Date().getFullYear()} Philemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
