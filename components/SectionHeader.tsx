
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-20 text-center">
      <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-black mb-5 relative inline-block">
        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 blur-sm opacity-50">
          {title}
        </span>
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      <div className="flex justify-center items-center gap-3 mt-8">
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
        <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
      </div>
    </div>
  );
};
