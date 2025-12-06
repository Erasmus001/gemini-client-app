import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight, FileText, CheckCircle, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none"></div>
      
      {/* Soft gradient spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none z-0"></div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 flex flex-col items-center text-center max-w-5xl px-4 mb-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-medium shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
          Now available for Agencies
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[100px] leading-[0.95] font-semibold tracking-tighter text-[#111111] mb-8"
        >
          Client onboarding.<br />
          Finally paperless.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-12 leading-relaxed"
        >
          Transforms the chaos of contracts, intake forms, and deposits into a single, elegant client portal.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" className="h-12 px-8 text-lg !rounded-md">Start for free</Button>
          <Button variant="secondary" className="h-12 px-8 text-lg group !rounded-md">
            View the demo <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Interface Elements */}
      <div className="w-full max-w-5xl mx-auto px-4 relative z-20 perspective-1000">
        <motion.div
           initial={{ rotateX: 10, opacity: 0, y: 50 }}
           animate={{ rotateX: 0, opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.2 }}
           className="relative rounded-xl bg-white border border-zinc-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        >
           {/* Window Controls */}
           <div className="h-12 border-b border-zinc-100 flex items-center px-4 justify-between bg-white">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
              </div>
              <div className="flex gap-4">
                 <div className="h-2 w-32 bg-zinc-50 rounded-full"></div>
              </div>
           </div>

           <div className="flex min-h-[480px] bg-[#FAFAFA]">
              {/* Sidebar */}
              <div className="w-64 border-r border-zinc-100 bg-white p-6 hidden md:block">
                 <div className="space-y-6">
                    <div className="h-8 w-8 bg-zinc-100 rounded-md mb-6"></div>
                    <div className="space-y-3">
                        <div className="h-2 w-20 bg-zinc-100 rounded"></div>
                        <div className="h-8 w-full bg-zinc-50 rounded-md border border-zinc-100"></div>
                        <div className="h-8 w-full bg-white rounded-md"></div>
                        <div className="h-8 w-full bg-white rounded-md"></div>
                    </div>
                     <div className="space-y-3 pt-6 border-t border-zinc-50">
                        <div className="h-2 w-16 bg-zinc-100 rounded"></div>
                        <div className="h-8 w-full bg-white rounded-md"></div>
                        <div className="h-8 w-full bg-white rounded-md"></div>
                    </div>
                 </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8 md:p-12">
                 {/* Header Row */}
                 <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="h-2 w-24 bg-zinc-200 rounded mb-4"></div>
                        <h2 className="text-4xl font-bold text-[#111111] tracking-tight">Acme Corp.</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                        </div>
                        <div className="h-10 w-32 bg-[#111111] rounded-md shadow-lg flex items-center justify-center">
                            <div className="h-2 w-16 bg-zinc-700 rounded-full"></div>
                        </div>
                    </div>
                 </div>

                 {/* Cards Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contract Card */}
                    <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-400">
                                <FileText size={20} strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Contract</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-semibold text-zinc-900">Signed</div>
                            <div className="text-sm text-zinc-400 font-medium">Version 1.2 • Yesterday</div>
                        </div>
                    </div>

                    {/* Deposit Card */}
                    <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-400">
                                <CheckCircle size={20} strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Deposit</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-semibold text-zinc-900">Paid</div>
                            <div className="text-sm text-zinc-400 font-medium">$12,500.00 • Stripe</div>
                        </div>
                    </div>

                     {/* Next Step Card */}
                    <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-400">
                                <Zap size={20} strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Next Step</span>
                        </div>
                        <div className="space-y-3">
                            <div className="text-2xl font-semibold text-zinc-900">Kickoff Call</div>
                            <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-[#111111] h-full w-[60%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
