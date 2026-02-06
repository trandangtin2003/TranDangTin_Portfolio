
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

      <div className="p-8 lg:p-10 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-5">
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

        <p className="text-slate-300 text-base mb-5 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-xs font-bold bg-slate-950/80 text-slate-400 border border-slate-800 rounded-lg group-hover:text-green-400 group-hover:border-green-500/40 transition-all uppercase tracking-wider backdrop-blur-sm hover:scale-110">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - EXTREMELY CLEAR LINKS */}
        <div className={`grid ${project.playUrl || project.googlePlayUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-5`}>
          {project.sourceCodeUrl && (
            <a 
              href={project.sourceCodeUrl} 
              target="_blank" 
              className="flex items-center justify-center gap-2 py-4 px-5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-green-500/40 text-white text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Code size={16} /> Git Source
            </a>
          )}
          {(project.playUrl || project.googlePlayUrl) && (
            <a 
              href={project.playUrl || project.googlePlayUrl} 
              target="_blank" 
              className="flex items-center justify-center gap-2 py-4 px-5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:scale-105"
            >
              {project.googlePlayUrl ? <Smartphone size={16} /> : <Zap size={16} />}
              {project.googlePlayUrl ? "Play Store" : "Demo Play"}
            </a>
          )}
        </div>
        
        {/* Key Implementations */}
        <div className="mt-5 pt-5 border-t border-slate-800/60">
           <div className="flex items-center gap-2 mb-4 group/header">
             <div className="p-1.5 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg group-hover/header:from-green-500/30 group-hover/header:to-emerald-500/30 transition-all duration-300 group-hover/header:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
               <Zap size={18} className="text-green-400 group-hover/header:text-green-300 transition-colors" />
             </div>
             <h4 className="text-base font-black text-white uppercase tracking-wider group-hover/header:text-transparent group-hover/header:bg-clip-text group-hover/header:bg-gradient-to-r group-hover/header:from-green-400 group-hover/header:to-emerald-400 transition-all duration-300">Key Features</h4>
             <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent group-hover/header:from-green-500/50 transition-colors"></div>
           </div>
           <div className="relative group/scroll">
             {/* Scroll container with gradient fade */}
             <div 
               className={`grid gap-2 features-scroll ${project.implementations.length > 3 ? 'max-h-[280px] overflow-y-auto pr-2' : ''}`}
               style={project.implementations.length > 3 ? {
                 scrollbarWidth: 'thin',
                 scrollbarColor: 'rgba(34, 197, 94, 0.4) rgba(30, 41, 59, 0.3)'
               } as React.CSSProperties : undefined}
             >
             {project.implementations.map((item, idx) => {
               const parts = item.split(':');
               const title = parts[0];
               const description = parts.slice(1).join(':');
               return (
                 <div key={idx} className="relative bg-slate-950/60 border border-slate-800/60 rounded-lg p-3 hover:border-green-400/70 transition-all duration-300 group/item hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-[1.02] cursor-pointer">
                   {/* Glow effect on hover */}
                   <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/0 via-green-400/5 to-emerald-400/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                   <div className="flex items-start gap-2 relative z-10">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_6px_#22c55e] group-hover/item:shadow-[0_0_12px_#22c55e] group-hover/item:bg-green-400 group-hover/item:scale-[2] transition-all duration-300"></div>
                     <div className="text-sm leading-relaxed">
                       {description ? (
                         <>
                           <span className="text-green-400 font-bold group-hover/item:text-green-300 transition-colors">{title}:</span>
                           <span className="text-slate-300 group-hover/item:text-slate-100 transition-colors">{description}</span>
                         </>
                       ) : (
                         <span className="text-slate-300 group-hover/item:text-slate-100 transition-colors">{item}</span>
                       )}
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
           
           {/* Fade gradient overlays for scroll indication */}
           {project.implementations.length > 3 && (
             <>
               <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-transparent pointer-events-none z-10"></div>
               <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent pointer-events-none z-10"></div>
               
               {/* Glowing scroll track indicator */}
               <div className="absolute -right-3 top-5 bottom-5 w-0.5 bg-gradient-to-b from-green-500/10 via-emerald-500/15 to-green-500/10 rounded-full blur-sm opacity-0 group-hover/scroll:opacity-100 group-hover/scroll:w-1.5 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-b from-green-300/70 via-emerald-300/80 to-green-300/70 rounded-full opacity-0 group-hover/scroll:opacity-100 group-hover/scroll:animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
               </div>
               
               {/* Scroll indicator arrows */}
               <div className="absolute -right-2 top-2 flex flex-col gap-0.5 opacity-0 group-hover/scroll:opacity-100 transition-all duration-300 z-10 animate-bounce scale-75 group-hover/scroll:scale-110">
                 <div className="group-hover/scroll:animate-glow-pulse">
                   <ChevronRight size={18} className="text-green-300 rotate-90" style={{ filter: 'drop-shadow(0 0 8px rgba(110, 231, 183, 0.8)) brightness(1.5)' }} />
                 </div>
               </div>
               <div className="absolute -right-2 bottom-2 flex flex-col gap-0.5 opacity-0 group-hover/scroll:opacity-100 transition-all duration-300 z-10 scale-75 group-hover/scroll:scale-110" style={{ animation: 'bounce 1s infinite', animationDirection: 'reverse' }}>
                 <div className="group-hover/scroll:animate-glow-pulse" style={{ animationDelay: '0.25s' }}>
                   <ChevronRight size={18} className="text-emerald-300 rotate-90" style={{ filter: 'drop-shadow(0 0 8px rgba(110, 231, 183, 0.8)) brightness(1.5)' }} />
                 </div>
               </div>
             </>
           )}
           </div>
        </div>
      </div>
    </div>
  );
};
