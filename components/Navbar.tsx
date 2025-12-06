import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
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
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-black transition-colors">Features</a>
          <a href="#" className="hover:text-black transition-colors">Pricing</a>
          <a href="#" className="hover:text-black transition-colors">Manifesto</a>
        </div>

        <div className="flex items-center gap-2 pr-2">
           <a href="#" className="text-sm font-medium text-zinc-500 hover:text-black px-4 hidden md:block">Log in</a>
           <Button variant="primary" className="!h-9 !px-5 text-sm !rounded-full">Access</Button>
        </div>
      </motion.nav>
    </div>
  );
};