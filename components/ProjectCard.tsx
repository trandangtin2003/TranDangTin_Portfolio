
import React from 'react';
import { Project } from '../types';
import { getEmbedUrl } from '../utils';
import { Play, Code, ExternalLink, Smartphone, ChevronRight, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const embedUrl = getEmbedUrl(project.videoUrl);

  return (
    <div className="group bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 border-2 border-slate-800/60 hover:border-green-500/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_70px_-20px_rgba(34,197,94,0.4)] flex flex-col backdrop-blur-sm hover:scale-[1.02]">
      {/* Video Container with Mockup effect */}
      <div className="p-3 pb-0">
        <div className="aspect-video w-full bg-gradient-to-br from-slate-950 to-slate-900 rounded-[2rem] overflow-hidden border-2 border-slate-800/60 group-hover:border-green-500/30 relative shadow-2xl transition-all duration-500">
          <iframe
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={embedUrl}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute top-5 left-5 pointer-events-none">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/60"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="p-10 lg:p-12 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <span className="text-xs font-black text-green-400 uppercase tracking-[0.25em] bg-gradient-to-r from-green-500/15 to-emerald-500/15 px-4 py-1.5 rounded-full border border-green-500/30 shadow-lg shadow-green-500/10">
               {project.category}
            </span>
            <h3 className="heading-font text-3xl lg:text-4xl font-black text-white leading-tight mt-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-500">{project.title}</h3>
          </div>
          {project.date && (
            <span className="text-xs text-slate-400 font-bold bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800 whitespace-nowrap uppercase tracking-wider backdrop-blur-sm">
               {project.date}
            </span>
          )}
        </div>

        <p className="text-slate-300 text-base mb-10 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-4 py-2 text-xs font-bold bg-slate-950/80 text-slate-400 border border-slate-800 rounded-xl group-hover:text-green-400 group-hover:border-green-500/40 transition-all uppercase tracking-wider backdrop-blur-sm hover:scale-110">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - EXTREMELY CLEAR LINKS */}
        <div className={`mt-auto grid ${project.playUrl || project.googlePlayUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-5`}>
          {project.sourceCodeUrl && (
            <a 
              href={project.sourceCodeUrl} 
              target="_blank" 
              className="flex items-center justify-center gap-3 py-5 px-6 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-green-500/40 text-white text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Code size={18} /> Git Source
            </a>
          )}
          {(project.playUrl || project.googlePlayUrl) && (
            <a 
              href={project.playUrl || project.googlePlayUrl} 
              target="_blank" 
              className="flex items-center justify-center gap-3 py-5 px-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:scale-105"
            >
              {project.googlePlayUrl ? <Smartphone size={18} /> : <Zap size={18} />}
              {project.googlePlayUrl ? "Play Store" : "Demo Play"}
            </a>
          )}
        </div>
        
        {/* Key Implementations list */}
        <div className="mt-10 pt-10 border-t-2 border-slate-800/60">
           <h4 className="text-xs font-black text-slate-400 uppercase mb-5 tracking-[0.2em]\">Core Mechanics:</h4>
           <ul className="space-y-4">
             {project.implementations.map((item, idx) => (
               <li key={idx} className="text-sm text-slate-300 flex items-start gap-3 italic leading-relaxed">
                 <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_5px_#22c55e]"></div>
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
};
