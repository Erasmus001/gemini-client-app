import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Proposal Phase",
    desc: "Send interactive documents that look stunning on any device. Track views in real-time.",
    number: "01"
  },
  {
    title: "Negotiation",
    desc: "Redline and comment directly on the contract. Changes are versioned and audit-logged.",
    number: "02"
  },
  {
    title: "Execution",
    desc: "Upon signature, invoices are generated and project portals are automatically provisioned.",
    number: "03"
  }
];

export const Workflow: React.FC = () => {
  return (
    <section className="py-32 relative bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 mb-32 relative ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}>
             {/* Timeline Node */}
             <div className="absolute left-[10px] md:left-1/2 -translate-x-1/2 w-5 h-5 bg-white border border-black rounded-full z-10">
                <div className="absolute inset-1 bg-black rounded-full"></div>
             </div>

             {/* Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
             >
                <span className="text-black font-mono text-sm mb-2 block">{step.number}</span>
                <h3 className="text-3xl font-semibold text-[#111111] mb-4">{step.title}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">{step.desc}</p>
             </motion.div>

             {/* Visual */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
             >
               <div className="aspect-video bg-white rounded-lg border border-zinc-200 relative overflow-hidden group shadow-sm">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-3/4 h-3/4 bg-white/80 backdrop-blur rounded border border-zinc-200 shadow-xl transition-transform duration-500 group-hover:scale-105"></div>
                  </div>
               </div>
             </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};