import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Palette } from "lucide-react";
import { Project } from "../constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isGraphicDesign = project.category === "Graphic Design";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block space-y-4">
        {/* Image Container */}
        <div
          className={`relative overflow-hidden bg-zinc-100 shadow-sm group-hover:shadow-xl group-hover:shadow-zinc-200/60 transition-all duration-500 ${
            isGraphicDesign
              ? "aspect-[3/4] rounded-[20px]"
              : "aspect-[4/3] rounded-[28px]"
          }`}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              isGraphicDesign
                ? "object-cover object-top"
                : "object-cover"
            }`}
          />

          {/* Graphic Design badge overlay — top right */}
          {isGraphicDesign && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <Palette size={12} className="text-rose-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-500">
                Design
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-zinc-900/65 opacity-0 group-hover:opacity-100 transition-all duration-400 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4 p-6 text-center">
            <h4 className="text-white text-xl font-bold transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">
              {project.name}
            </h4>
            <span className="px-6 py-3 bg-lemon text-zinc-900 rounded-full font-bold flex items-center gap-2 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-100 text-sm shadow-xl hover:bg-white hover:scale-105 transition-transform">
              {isGraphicDesign ? "View Gallery" : "View Case Study"}
              <ArrowUpRight size={16} />
            </span>
          </div>

          {/* Color accent bar at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ backgroundColor: project.color }}
          />
        </div>

        {/* Card Footer */}
        <div className="flex justify-between items-start pt-1">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    isGraphicDesign
                      ? "text-rose-400 border border-rose-100 bg-rose-50/50"
                      : "text-zinc-400 border border-zinc-100"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold group-hover:text-lemon-dark transition-colors duration-200 truncate">
              {project.name}
            </h3>
            <p className="text-zinc-500 font-light text-sm line-clamp-1 mt-0.5">
              {project.shortDescription}
            </p>
          </div>

          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center ml-4 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
            style={{ backgroundColor: `${project.color}15` }}
          >
            <ArrowUpRight size={16} style={{ color: project.color }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
