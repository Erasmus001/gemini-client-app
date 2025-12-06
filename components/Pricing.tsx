import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto bg-[#FAFAFA]">
       <div className="text-center mb-20">
         <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-8">Transparent Pricing</h2>
         
         <div className="inline-flex bg-zinc-100 p-1 rounded-full relative border border-zinc-200">
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm border border-zinc-200"
              animate={{ x: isAnnual ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-8 py-2 text-sm font-medium transition-colors ${!isAnnual ? 'text-black' : 'text-zinc-500'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-8 py-2 text-sm font-medium transition-colors ${isAnnual ? 'text-black' : 'text-zinc-500'}`}
            >
              Yearly
            </button>
         </div>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: 0, desc: "For solo founders.", features: ["1 Active Project", "Standard Contracts", "Stripe Connect"] },
            { name: "Studio", price: isAnnual ? 24 : 29, desc: "For growing teams.", highlight: true, features: ["Unlimited Projects", "Custom Domain", "White-labeling", "3 Team Seats"] },
            { name: "Agency", price: "Custom", desc: "For global operations.", features: ["SSO Enforcement", "Priority Support", "API Access", "Custom SLAs"] }
          ].map((tier, i) => (
            <div key={i} className={`relative p-8 rounded-xl border flex flex-col ${tier.highlight ? 'bg-white border-zinc-300 shadow-xl' : 'bg-[#FAFAFA] border-zinc-200'}`}>
               
               <div className="mb-8">
                 <h3 className="text-lg font-medium text-black mb-2">{tier.name}</h3>
                 <div className="h-16 flex items-end mb-2">
                   {typeof tier.price === 'number' ? (
                     <>
                      <span className="text-4xl font-bold text-black">$</span>
                      <span className="text-4xl font-bold text-black">
                        {tier.price}
                      </span>
                      <span className="text-zinc-500 ml-2 text-sm">/mo</span>
                     </>
                   ) : (
                     <span className="text-4xl font-bold text-black">{tier.price}</span>
                   )}
                 </div>
                 <p className="text-zinc-500 text-sm">{tier.desc}</p>
               </div>
               
               <ul className="space-y-4 mb-10 flex-1">
                 {tier.features.map((f, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm text-zinc-600">
                     <div className={`p-0.5 rounded-full ${tier.highlight ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                       <Check size={12} />
                     </div>
                     {f}
                   </li>
                 ))}
               </ul>

               <Button variant={tier.highlight ? 'primary' : 'secondary'} className="w-full">
                 {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
               </Button>
            </div>
          ))}
       </div>
    </section>
  );
};