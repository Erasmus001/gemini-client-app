import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

interface NavbarProps {
  onStart: () => void;
}

const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <a href={href} className="relative group py-1">
    <span className="relative z-10 text-sm font-medium text-zinc-500 group-hover:text-black transition-colors duration-200">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
  </a>
);

export const Navbar: React.FC<NavbarProps> = ({ onStart }) => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-full px-2 py-2 flex items-center justify-between gap-8 md:gap-12 min-w-[320px] md:min-w-[500px]"
      >
        <div className="pl-6 flex items-center gap-2">
          <div className="w-4 h-4 bg-black rounded-sm"></div>
          <span className="font-bold tracking-tight text-black">Paper</span>
        </div>
        
        <div className="hidden md:flex gap-6">
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Manifesto</NavLink>
        </div>

        <div className="flex items-center gap-2 pr-2">
           <a href="#" className="text-sm font-medium text-zinc-500 hover:text-black px-4 hidden md:block transition-colors">Log in</a>
           <Button variant="primary" onClick={onStart} className="!h-9 !px-5 text-sm !rounded-full">Access</Button>
        </div>
      </motion.nav>
    </div>
  );
};