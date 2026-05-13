import React from 'react';
import logoImg from '../assets/images/regenerated_image_1778661483325.jpg';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Diamond Background to match the angular luxury feel */}
        <div className="absolute inset-0 bg-navy-dark border border-gold/50 shadow-2xl overflow-hidden">
           <img 
            src={logoImg} 
            alt="Vinhomes Logo" 
            className="w-full h-full object-cover scale-110"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.fallback-text') as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        </div>
        {/* Fallback stylized V */}
        <div className="fallback-text relative text-gold font-serif text-4xl font-bold flex flex-col items-center hidden">
          <span className="leading-none">V</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-serif font-medium tracking-[0.2em] text-sm leading-tight">VINHOMES</span>
        <span className="text-gold font-serif font-bold tracking-[0.1em] text-xl leading-tight">SAIGON PARK</span>
      </div>
    </div>
  );
};
