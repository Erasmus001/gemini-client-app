import React from 'react';

const testimonials = [
  { text: "Paper has completely automated our intake flow.", author: "Alex Rivera, Studio Alpha" },
  { text: "The most beautiful software we use daily.", author: "Sarah Chen, Chen Design" },
  { text: "Finally, a tool that respects engineering precision.", author: "Marcus Thorne, Thorne & Co" },
  { text: "It's like Linear for client management.", author: "Elena Vosse, Vosse Digital" },
  { text: "Client friction dropped to zero overnight.", author: "David Park, Park Studio" },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-zinc-200 overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll whitespace-nowrap flex gap-8">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i}
              className="inline-block w-[400px] p-8 rounded-sm bg-white border border-zinc-200 shadow-sm"
            >
               <p className="text-xl text-[#111111] mb-6 whitespace-normal font-medium leading-relaxed">"{t.text}"</p>
               <div className="text-sm font-mono text-zinc-500 uppercase tracking-wider">{t.author}</div>
            </div>
          ))}
        </div>
        
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>
      </div>
    </section>
  );
};