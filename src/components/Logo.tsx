import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  color?: 'orange' | 'blue';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1dlfLtDSPkkNKdEv6LSroHW1gevugrzGy" 
        alt="Logo NK AUTOMEC" 
        className="h-10 md:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className={`font-sans font-bold text-lg md:text-xl tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>
        NK AUTOMEC
      </span>
    </div>
  );
};
