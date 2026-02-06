
import React from 'react';
import { Navbar } from './Navbar';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { PROJECTS, EXPERIENCES, SKILLS, PERSONAL_INFO, EDUCATION } from '../constants';
import { 
  Mail, Phone, MapPin, Globe, Code, ExternalLink,
  Cpu, Play, ChevronRight, Layers, Zap, Target, 
  GraduationCap, CheckCircle2, Star, Calendar, User, Linkedin
} from 'lucide-react';
import { getEmbedUrl } from '../utils';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-green-500/10 to-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 animate-glow"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-green-600/5 to-transparent blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-[0.25em] backdrop-blur-sm shadow-lg shadow-green-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e] animate-pulse"></span>
              Available for Game Dev Roles
            </div>
            
            <h1 className="heading-font text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] tracking-tight">
              TRẦN ĐĂNG<br />
              <span className="relative inline-block">
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 blur-sm">TÍN</span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400">
                  TÍN
                </span>
              </span>
            </h1>
            
            <p className="text-slate-300 text-xl lg:text-2xl max-w-2xl leading-relaxed font-light">
              Passionate <span className="text-white font-semibold bg-gradient-to-r from-green-500/20 to-transparent px-2 rounded">Game Developer</span> with expertise across multiple engines — 
              <span className="text-white font-semibold italic"> always ready to tackle new challenges</span> and push the boundaries of interactive entertainment.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#experience" className="group px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(34,197,94,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(34,197,94,0.6)] hover:scale-105 flex items-center gap-3">
                Work Experience <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#projects" className="px-10 py-5 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-white border-2 border-slate-700 hover:border-green-500/60 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                Personal Projects
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative group animate-float">
               <div className="absolute -inset-8 bg-gradient-to-tr from-green-500/40 via-emerald-500/30 to-lime-500/20 blur-[80px] opacity-50 group-hover:opacity-100 transition-all duration-700 rounded-full"></div>
               
               <div className="relative z-10 w-80 lg:w-[420px] aspect-[3/4] rounded-[2.5rem] overflow-hidden border-[6px] border-green-500/40 shadow-[0_0_60px_rgba(34,197,94,0.4)] bg-gradient-to-br from-slate-900 via-slate-950 to-black backdrop-blur-sm">
                  <img 
                    src="/profile.jpg" 
                    alt="Trần Đăng Tín" 
                    className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://i.ibb.co/Xz9kY4d/tin-portrait.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-24">
                    <p className="heading-font text-white font-black text-3xl uppercase tracking-tight leading-none mb-2">Tín Trần</p>
                    <p className="text-green-400 text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Game Developer
                    </p>
                  </div>
               </div>
               
               <div className="absolute -bottom-8 -right-8 z-20 bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-green-500/40 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                  <Zap size={36} className="text-green-400 animate-pulse" />
               </div>
               
               <div className="absolute -top-8 -left-8 z-20 bg-gradient-to-br from-emerald-900/80 to-green-950/80 border-2 border-emerald-500/40 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                  <Code size={28} className="text-emerald-400" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Brief Section (Objective & Education) */}
      <section className="py-32 relative overflow-hidden border-y border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.05),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Compact Objective Card */}
            <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-slate-800/60 p-12 rounded-[2.5rem] relative group overflow-hidden backdrop-blur-sm hover:border-green-500/40 transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] hover:scale-[1.02]">
               <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500">
                 <Target size={200} className="text-green-400 translate-x-12 -translate-y-12" />
               </div>
               <div className="flex items-center gap-5 mb-10">
                 <div className="w-16 h-16 bg-gradient-to-br from-green-500/25 to-emerald-500/25 rounded-2xl flex items-center justify-center text-green-400 border-2 border-green-500/40 shadow-xl shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                   <Target size={32} />
                 </div>
                 <h2 className="heading-font text-3xl font-black text-white uppercase tracking-tight">Professional<br/><span className="text-green-400">Goal</span></h2>
               </div>
               <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm relative z-10">
                 <p className="text-slate-200 text-base leading-relaxed italic">
                   "{PERSONAL_INFO.objective}"
                 </p>
               </div>
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
            </div>

            {/* Personal Info Card - Center */}
            <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-slate-800/60 p-12 rounded-[2.5rem] relative group overflow-hidden backdrop-blur-sm hover:border-green-500/40 transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] hover:scale-[1.02]">
               <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500">
                 <User size={200} className="text-green-400 translate-x-12 -translate-y-12" />
               </div>
               <div className="flex items-center gap-5 mb-10">
                 <div className="w-16 h-16 bg-gradient-to-br from-green-500/25 to-emerald-500/25 rounded-2xl flex items-center justify-center text-green-400 border-2 border-green-500/40 shadow-xl shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                   <User size={32} />
                 </div>
                 <h2 className="heading-font text-3xl font-black text-white uppercase tracking-tight">Personal<br/><span className="text-green-400">Info</span></h2>
               </div>
               <div className="space-y-4 relative z-10">
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 backdrop-blur-sm flex items-center gap-4 hover:border-green-500/30 transition-all duration-300">
                   <Calendar size={20} className="text-green-400 flex-shrink-0" />
                   <div>
                     <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-bold">DOB</p>
                     <p className="text-white font-bold text-sm">March 13, 2003</p>
                   </div>
                 </div>
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 backdrop-blur-sm flex items-center gap-4 hover:border-green-500/30 transition-all duration-300">
                   <User size={20} className="text-green-400 flex-shrink-0" />
                   <div>
                     <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-bold">Gender</p>
                     <p className="text-white font-bold text-sm">Male</p>
                   </div>
                 </div>
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 backdrop-blur-sm flex items-center gap-4 hover:border-green-500/30 transition-all duration-300">
                   <Phone size={20} className="text-green-400 flex-shrink-0" />
                   <div>
                     <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-bold">Phone</p>
                     <p className="text-white font-bold text-sm">0384356037</p>
                   </div>
                 </div>
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 backdrop-blur-sm flex items-center gap-4 hover:border-green-500/30 transition-all duration-300">
                   <Mail size={20} className="text-green-400 flex-shrink-0" />
                   <div>
                     <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-bold">Email</p>
                     <p className="text-white font-bold text-sm break-all">trandangtin2003@gmail.com</p>
                   </div>
                 </div>
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 backdrop-blur-sm flex items-center gap-4 hover:border-green-500/30 transition-all duration-300">
                   <MapPin size={20} className="text-green-400 flex-shrink-0" />
                   <div>
                     <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-bold">Address</p>
                     <p className="text-white font-bold text-sm">Da Nang City, Vietnam</p>
                   </div>
                 </div>
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 backdrop-blur-sm flex items-center gap-4 hover:border-green-500/30 transition-all duration-300">
                   <Linkedin size={20} className="text-green-400 flex-shrink-0" />
                   <div>
                     <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-bold">LinkedIn</p>
                     <a href="https://www.linkedin.com/in/tín-trần-đăng-766aa7329" target="_blank" className="text-green-400 hover:text-green-300 font-bold text-sm transition-colors">View Profile</a>
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
            </div>

            {/* Compact Education Card */}
            <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-slate-800/60 p-12 rounded-[2.5rem] relative group overflow-hidden backdrop-blur-sm hover:border-green-500/40 transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] hover:scale-[1.02]">
               <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500">
                 <GraduationCap size={200} className="text-green-400 translate-x-12 -translate-y-12" />
               </div>
               <div className="flex items-center gap-5 mb-10">
                 <div className="w-16 h-16 bg-gradient-to-br from-green-500/25 to-emerald-500/25 rounded-2xl flex items-center justify-center text-green-400 border-2 border-green-500/40 shadow-xl shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                   <GraduationCap size={32} />
                 </div>
                 <h2 className="heading-font text-3xl font-black text-white uppercase tracking-tight">Academic<br/><span className="text-green-400">Path</span></h2>
               </div>
               <div className="space-y-6 relative z-10">
                 <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm">
                   <h3 className="text-white font-bold text-lg leading-tight mb-3">{EDUCATION.university}</h3>
                   <div className="flex items-center flex-wrap gap-3">
                     <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 text-green-400 text-sm font-black uppercase tracking-wider rounded-full">{EDUCATION.period}</span>
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                     <span className="text-slate-300 text-sm font-medium">{EDUCATION.major}</span>
                   </div>
                 </div>
                 <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-slate-200 text-sm backdrop-blur-sm">
                      <Star size={18} className="text-yellow-400" />
                      <span>GPA: <span className="text-white font-bold">{EDUCATION.details[1].split(': ')[1]}</span></span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-xl text-slate-200 text-sm backdrop-blur-sm">
                      <CheckCircle2 size={18} className="text-green-400" />
                      <span className="font-medium">{EDUCATION.details[0]}</span>
                    </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Technical Skills" subtitle="The advanced toolkit I use to build cutting-edge gaming worlds." />
          
          {/* Game Engines Showcase - Special Layout */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                  <Layers size={24} className="text-green-400" />
                </div>
                <h3 className="heading-font text-4xl font-black text-white uppercase tracking-tight">Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Engines</span></h3>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-500"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Unity', logo: '/engines/unity.png', gradient: 'from-slate-800 via-slate-900 to-black' },
                { name: 'Cocos Creator', logo: '/engines/cocos.png', gradient: 'from-blue-950/40 via-slate-900 to-black' },
                { name: 'Unreal Engine', logo: '/engines/unreal.png', gradient: 'from-slate-800 via-slate-950 to-black' },
                { name: 'Roblox Studio', logo: '/engines/construct.png', gradient: 'from-slate-900 via-slate-950 to-black' },
              ].map((engine, idx) => (
                <div key={engine.name} className="group relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600/0 via-green-600/20 to-green-600/0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                  
                  {/* Main Card */}
                  <div className={`relative bg-gradient-to-br ${engine.gradient} border-2 border-slate-800/80 hover:border-green-500/60 rounded-[2.5rem] p-10 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_80px_-20px_rgba(34,197,94,0.6)] backdrop-blur-sm overflow-hidden`}>
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6">
                      {/* Logo Container */}
                      <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_50px_-10px_rgba(34,197,94,0.4)]">
                        <img 
                          src={engine.logo} 
                          alt={engine.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Name */}
                      <div className="text-center space-y-2">
                        <p className="heading-font text-white font-black text-lg leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">{engine.name}</p>
                        <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent group-hover:via-green-400 group-hover:w-20 transition-all duration-500"></div>
                      </div>
                      
                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-green-500/50 opacity-0 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-500">
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills - Redesigned */}
          <div className="space-y-8">
            {/* All Skill Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.filter(cat => cat.title !== 'Game Engines').map((cat) => (
                <div key={cat.title} className="bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 border-2 border-slate-800/60 hover:border-green-500/40 rounded-[2rem] p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.3)] group backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500/15 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Cpu size={24} />
                    </div>
                    <h3 className="heading-font text-xl font-black text-white uppercase tracking-tight leading-tight">{cat.title}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {cat.skills.map(skill => (
                      <div key={skill} className="flex items-center gap-2.5 text-slate-300 hover:text-green-400 text-sm font-medium transition-colors duration-300 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover/item:shadow-[0_0_8px_#22c55e] group-hover/item:scale-150 transition-all duration-300"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-500/30"></div>
              <p className="text-slate-400 text-sm font-medium italic">Constantly learning and adapting to new technologies</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-500/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-32 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Work Experience" subtitle="A professional journey through top technology companies and studios." />
          <div className="max-w-5xl mx-auto space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-slate-950/90 via-slate-900/60 to-slate-950/80 border-2 border-slate-800/60 p-10 lg:p-14 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.3)]">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/3">
                    <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-500/15 to-emerald-500/15 text-green-400 text-xs font-bold mb-5 border border-green-500/30 shadow-lg shadow-green-500/10">
                      {exp.period}
                    </span>
                    <h3 className="heading-font text-3xl font-black text-white mb-3 leading-tight">{exp.company}</h3>
                    <p className="text-green-400 font-bold text-sm uppercase tracking-[0.2em] mb-2">{exp.role}</p>
                    
                    {idx === 0 && (
                      <div className="mt-8">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">Featured Game Platforms:</p>
                        <div className="grid grid-cols-2 gap-3">
                          <a href="https://bstories.beekids.edu.vn/" target="_blank" className="flex items-center justify-between group/link px-4 py-3 bg-green-600/10 hover:bg-green-600 text-green-400 hover:text-white rounded-xl border border-green-500/20 transition-all hover:scale-105">
                             <span className="font-bold text-sm">BStories</span>
                             <Globe size={16} />
                          </a>
                          <a href="https://bkids.edu.vn/" target="_blank" className="flex items-center justify-between group/link px-4 py-3 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-400 hover:text-white rounded-xl border border-emerald-500/20 transition-all hover:scale-105">
                             <span className="font-bold text-sm">Beekids Edu</span>
                             <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-slate-300 text-lg italic leading-relaxed">"{exp.description}"</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {exp.tasks.map((task, tidx) => (
                        <div key={tidx} className="flex gap-3 text-slate-400 text-sm">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_5px_#22c55e]"></div>
                           {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            title="Personal Projects" 
            subtitle="Where I experiment with the latest technologies like Blockchain, AI, and High-performance Networking."
          />

          <div className="mb-28 text-center max-w-5xl mx-auto space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
               <Play size={14} className="text-green-400" /> General Portfolio Reel
            </div>
            <h3 className="heading-font text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">Quick Look At My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Products</span></h3>
            <div className="relative group p-1.5 bg-gradient-to-tr from-green-500 via-emerald-600 to-green-600 rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] overflow-hidden hover:shadow-[0_30px_80px_-15px_rgba(34,197,94,0.5)] transition-all duration-500">
               <div className="relative aspect-video rounded-[2.2rem] overflow-hidden bg-slate-950">
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(PERSONAL_INFO.mainVideo)}
                    title="Portfolio Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/30 to-black border-t-2 border-slate-900">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.04),transparent_70%)]"></div>
         <div className="container mx-auto px-6 relative z-10">
            <SectionHeader title="Get In Touch" subtitle="Ready to collaborate? Let's connect and build something extraordinary." />
            
            <div className="max-w-6xl mx-auto">
               {/* Main Contact Cards */}
               <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-slate-800/60 hover:border-green-500/40 rounded-[2rem] p-10 transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] backdrop-blur-sm">
                     <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-green-500/50">
                        <Mail size={20} className="text-white" />
                     </div>
                     <Mail size={48} className="text-green-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                     <p className="text-white font-black text-base uppercase tracking-[0.2em] mb-3 text-center">Email</p>
                     <p className="text-slate-300 text-sm font-medium text-center break-all">{PERSONAL_INFO.email}</p>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-slate-800/60 hover:border-green-500/40 rounded-[2rem] p-10 transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] backdrop-blur-sm">
                     <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-green-500/50">
                        <Phone size={20} className="text-white" />
                     </div>
                     <Phone size={48} className="text-green-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                     <p className="text-white font-black text-base uppercase tracking-[0.2em] mb-3 text-center">Phone</p>
                     <p className="text-slate-300 text-sm font-medium text-center">{PERSONAL_INFO.phone}</p>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-slate-800/60 hover:border-green-500/40 rounded-[2rem] p-10 transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.4)] backdrop-blur-sm">
                     <a href="https://www.linkedin.com/in/tín-trần-đăng-766aa7329" target="_blank" className="block">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-green-500/50">
                           <Linkedin size={20} className="text-white" />
                        </div>
                        <Linkedin size={48} className="text-green-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                        <p className="text-white font-black text-base uppercase tracking-[0.2em] mb-3 text-center">LinkedIn</p>
                        <p className="text-slate-300 text-sm font-medium text-center">Professional Network</p>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-16 text-center text-slate-500 text-sm uppercase tracking-[0.2em] border-t-2 border-slate-900 bg-gradient-to-b from-slate-950 to-black">
         <p className="mb-2">© {new Date().getFullYear()} <span className="text-green-400 font-bold">{PERSONAL_INFO.name}</span></p>
      </footer>
    </div>
  );
};

export default App;
