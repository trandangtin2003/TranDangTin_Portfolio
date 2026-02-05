
import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/98 backdrop-blur-2xl border-b-2 border-green-500/40 py-4 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.9)]' : 'bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm py-7'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 text-white font-bold text-2xl group">
          <div className="p-2.5 bg-gradient-to-br from-green-500 via-emerald-600 to-green-600 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(34,197,94,0.5)]">
            <Gamepad2 size={28} />
          </div>
          <span className="heading-font tracking-tight text-xl">Tín<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Dev</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-base font-bold transition-all duration-300 hover:scale-110 relative group ${
                  isActive ? 'text-green-400' : 'text-slate-200 hover:text-green-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 shadow-[0_0_8px_#22c55e] ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
          <a 
            href="#contact" 
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 hover:from-green-400 hover:via-emerald-500 hover:to-green-500 text-white text-base font-black transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(34,197,94,0.8)] hover:scale-110 uppercase tracking-wider"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-200 hover:text-green-400 transition-colors p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/99 backdrop-blur-2xl border-b-2 border-green-500/40 p-8 flex flex-col gap-6 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-bold transition-all duration-300 hover:translate-x-2 ${
                  isActive ? 'text-green-400' : 'text-slate-100 hover:text-green-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
