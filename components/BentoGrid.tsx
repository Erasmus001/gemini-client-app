import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { User, PenTool, FormInput, CreditCard, Lock, ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const SpotlightCard: React.FC<BentoCardProps> = ({ title, description, className = "", children, icon }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-zinc-200 bg-white overflow-hidden flex flex-col group transition-shadow duration-300 hover:shadow-lg ${className}`}
    >
      {/* Subtle Dark Spotlight Gradient for Light Mode */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.04), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-zinc-50 rounded-lg text-black border border-zinc-100">
            {icon}
          </div>
          <ArrowUpRight className="text-zinc-300 group-hover:text-black transition-colors" size={20} />
        </div>
        
        <h3 className="text-xl font-medium text-[#111111] mb-2">{title}</h3>
        <p className="text-zinc-500 leading-relaxed mb-8">{description}</p>
        
        <div className="mt-auto relative rounded-lg bg-zinc-50 border border-zinc-100 overflow-hidden min-h-[200px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto bg-[#FAFAFA]">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] mb-6">The Architecture.</h2>
        <p className="text-zinc-500 max-w-xl text-lg">Modular components designed for radical clarity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Client Portal */}
        <SpotlightCard 
          title="Client Portals" 
          description="A dedicated, branded environment for every client relationship."
          className="md:col-span-2"
          icon={<User size={24} />}
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full h-full bg-white rounded-lg border border-zinc-200 flex overflow-hidden shadow-sm">
               <div className="w-20 border-r border-zinc-100 bg-zinc-50 p-3 space-y-3">
                  <div className="w-full aspect-square rounded bg-zinc-200 mb-4"></div>
                  <div className="w-full h-1 bg-zinc-200 rounded"></div>
                  <div className="w-2/3 h-1 bg-zinc-200 rounded"></div>
               </div>
               <div className="flex-1 p-5">
                  <div className="flex justify-between items-center mb-6">
                     <div className="h-3 w-24 bg-zinc-100 rounded"></div>
                     <div className="h-5 w-16 bg-green-50 text-green-600 text-[10px] rounded flex items-center justify-center font-mono border border-green-100">ACTIVE</div>
                  </div>
                  <div className="space-y-3">
                     <div className="h-12 w-full bg-zinc-50 rounded border border-zinc-100"></div>
                     <div className="h-12 w-full bg-zinc-50 rounded border border-zinc-100"></div>
                  </div>
               </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2: Smart Contracts */}
        <SpotlightCard 
          title="Smart Contracts" 
          description="Legally binding, cryptographically secure."
          className="md:col-span-1"
          icon={<PenTool size={24} />}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50">
            <div className="text-center">
               <div className="text-5xl font-serif italic text-black select-none opacity-80">Signature</div>
               <div className="mt-4 flex justify-center">
                 <div className="h-0.5 w-24 bg-black rounded"></div>
               </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 3: Automated Intake */}
        <SpotlightCard 
          title="Auto-Intake" 
          description="Forms that populate your CRM instantly."
          className="md:col-span-1"
          icon={<FormInput size={24} />}
        >
           <div className="absolute inset-0 p-8 flex flex-col gap-4 bg-white">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
                <div className="h-2 w-24 bg-zinc-100 rounded"></div>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
                <div className="h-2 w-32 bg-zinc-100 rounded"></div>
             </div>
             <div className="mt-4 p-3 bg-zinc-50 rounded border border-zinc-100 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-zinc-600 font-medium">Sync Complete</span>
             </div>
           </div>
        </SpotlightCard>

        {/* Card 4: Payments */}
        <SpotlightCard 
          title="Instant Settlements" 
          description="Stripe integration with automated milestone unlocking."
          className="md:col-span-2"
          icon={<CreditCard size={24} />}
        >
           <div className="absolute inset-0 flex items-center justify-center gap-12 bg-zinc-50/50">
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-zinc-200 shadow-sm">
                 <User className="text-zinc-400" />
              </div>
              <div className="h-[1px] w-32 bg-zinc-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-black w-1/3 animate-[shimmer_1.5s_infinite]"></div>
              </div>
              <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center border border-black shadow-lg">
                 <Lock className="text-white" />
              </div>
           </div>
        </SpotlightCard>
      </div>
    </section>
  );
};