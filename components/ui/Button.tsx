import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative h-[48px] px-8 text-[15px] font-medium transition-all duration-300 rounded-md flex items-center justify-center overflow-hidden";
  
  const variants = {
    primary: "bg-[#111111] text-white hover:bg-black hover:scale-[1.02] shadow-lg shadow-black/5",
    secondary: "bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#CCCCCC] hover:bg-gray-50",
    ghost: "bg-transparent text-[#666666] hover:text-[#111111]",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};