import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block space-y-4">
        <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-zinc-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-lemon/10 transition-all duration-500">
          <img 
            src={project.thumbnail} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-white text-zinc-900 rounded-full font-bold flex items-center gap-2 transform group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
            >
              View Case Study
              <ArrowUpRight size={18} />
            </motion.span>
          </div>
        </div>
        
        <div className="flex justify-between items-start pt-2">
          <div>
            <div className="flex gap-2 mb-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold group-hover:text-lemon-dark transition-colors">{project.name}</h3>
            <p className="text-zinc-500 font-light line-clamp-1">{project.shortDescription}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
