import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Dribbble } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-xs font-black tracking-[0.2em] text-lemon-dark uppercase mb-4">Contact</h2>
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Let’s work <br /><span className="text-zinc-300">together.</span></h3>
            <p className="text-zinc-500 font-light mb-8 leading-relaxed max-w-md">
              Have a project in mind? Want to collaborate on something amazing? Or just want to say hi? 
              My inbox is always open.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:philemonkusi292@gmail.com" className="block text-xl font-medium hover:text-lemon-dark transition-colors underline underline-offset-8 decoration-lemon/30">
                philemonkusi292@gmail.com
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 border border-zinc-100 rounded-xl flex items-center justify-center hover:bg-lemon transition-colors cursor-pointer group">
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/Philemon12421" className="w-10 h-10 border border-zinc-100 rounded-xl flex items-center justify-center hover:bg-lemon transition-colors cursor-pointer group">
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 border border-zinc-100 rounded-xl flex items-center justify-center hover:bg-lemon transition-colors cursor-pointer group">
                  <Dribbble size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Name</label>
                <div className="relative">
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Your name"
                    className={`w-full p-5 bg-zinc-50 border ${errors.name ? 'border-red-400 focus:ring-red-50' : 'border-zinc-100 focus:ring-lemon/5'} rounded-3xl outline-none focus:border-lemon focus:ring-4 transition-all transition-colors`}
                  />
                  {errors.name && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 flex items-center gap-1 text-xs">
                      <AlertCircle size={14} />
                      {errors.name}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Email</label>
                <div className="relative">
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Your@example.com"
                    className={`w-full p-5 bg-zinc-50 border ${errors.email ? 'border-red-400 focus:ring-red-50' : 'border-zinc-100 focus:ring-lemon/5'} rounded-3xl outline-none focus:border-lemon focus:ring-4 transition-all transition-colors`}
                  />
                  {errors.email && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 flex items-center gap-1 text-xs">
                      <AlertCircle size={14} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Message</label>
                <div className="relative">
                  <motion.textarea 
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project..."
                    className={`w-full p-5 bg-zinc-50 border ${errors.message ? 'border-red-400 focus:ring-red-50' : 'border-zinc-100 focus:ring-lemon/5'} rounded-3xl outline-none focus:border-lemon focus:ring-4 transition-all transition-colors resize-none`}
                  ></motion.textarea>
                  {errors.message && (
                    <span className="absolute right-4 bottom-4 text-red-500 flex items-center gap-1 text-xs">
                      <AlertCircle size={14} />
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="md:col-span-2 pt-4">
                <motion.button 
                  animate={!isSubmitting && !isSuccess ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 py-5 ${isSuccess ? 'bg-lemon text-zinc-900 shadow-lemon/20' : 'bg-zinc-900 text-white'} rounded-3xl font-bold flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all shadow-xl shadow-zinc-200`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 animate-pulse">Sending...</span>
                  ) : isSuccess ? (
                    <>Sent Successfully! <CheckCircle2 size={18} /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
