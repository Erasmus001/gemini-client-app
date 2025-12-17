
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { OnboardingData } from '../types';
import { ArrowRight, Check, Loader2, Briefcase, PenTool, Code, Megaphone } from 'lucide-react';

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
  onBack: () => void;
}

const STEPS = {
  IDENTITY: 0,
  FOCUS: 1,
  PROCESSING: 2
};

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(STEPS.IDENTITY);
  const [data, setData] = useState<OnboardingData>({
    agencyName: '',
    agencySlug: '',
    focus: ''
  });
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === STEPS.IDENTITY) {
      if (!data.agencyName) return;
      // Auto-generate slug if empty
      const slug = data.agencySlug || data.agencyName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      setData({ ...data, agencySlug: slug });
      setStep(STEPS.FOCUS);
    } else if (step === STEPS.FOCUS) {
      if (!data.focus) return;
      setStep(STEPS.PROCESSING);
      // Simulate API call/Setup
      setLoading(true);
      setTimeout(() => {
        onComplete(data);
      }, 2000);
    }
  };

  const categories = [
    { id: 'design', label: 'Design & Creative', icon: <PenTool size={20} /> },
    { id: 'dev', label: 'Development', icon: <Code size={20} /> },
    { id: 'marketing', label: 'Marketing', icon: <Megaphone size={20} /> },
    { id: 'advisory', label: 'Consulting', icon: <Briefcase size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none"></div>
      
      {/* Navbar Minimal */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
         <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
            <span className="font-bold tracking-tight text-black">Paper</span>
         </div>
         <button onClick={onBack} className="text-sm text-zinc-400 hover:text-black transition-colors">
            Exit Setup
         </button>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="mb-12 text-center">
           <div className="flex justify-center gap-2 mb-8">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i <= step ? 'w-8 bg-black' : 'w-2 bg-zinc-200'
                  }`}
                />
              ))}
           </div>
        </div>

        <AnimatePresence mode='wait'>
          {step === STEPS.IDENTITY && (
            <motion.div
              key="identity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-[#111111] mb-2">Name your workspace</h2>
              <p className="text-zinc-500 mb-8">This will be the home for your client contracts.</p>
              
              <div className="space-y-6">
                <Input 
                  label="Agency Name" 
                  placeholder="e.g. Studio Alpha" 
                  value={data.agencyName}
                  onChange={(e) => setData({ ...data, agencyName: e.target.value })}
                  autoFocus
                />
                <Input 
                  label="Workspace URL" 
                  placeholder="paper.com/studio-alpha" 
                  value={data.agencySlug}
                  onChange={(e) => setData({ ...data, agencySlug: e.target.value })}
                  className="bg-zinc-50 font-mono text-sm"
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Button onClick={handleNext} disabled={!data.agencyName} className="w-full sm:w-auto">
                  Continue <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === STEPS.FOCUS && (
            <motion.div
              key="focus"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-[#111111] mb-2">Define your protocol</h2>
              <p className="text-zinc-500 mb-8">We'll optimize the templates for your workflow.</p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setData({ ...data, focus: cat.id })}
                    className={`flex items-center gap-4 p-4 rounded-lg border text-left transition-all ${
                      data.focus === cat.id 
                        ? 'border-black bg-zinc-50 ring-1 ring-black' 
                        : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    <div className={`p-2 rounded-md ${data.focus === cat.id ? 'bg-black text-white' : 'bg-white text-zinc-500 border border-zinc-100'}`}>
                       {cat.icon}
                    </div>
                    <span className={`font-medium ${data.focus === cat.id ? 'text-black' : 'text-zinc-600'}`}>{cat.label}</span>
                    {data.focus === cat.id && <Check size={16} className="ml-auto text-black" />}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                 <button onClick={() => setStep(STEPS.IDENTITY)} className="text-sm text-zinc-500 hover:text-black">Back</button>
                 <Button onClick={handleNext} disabled={!data.focus}>
                  Create Workspace
                 </Button>
              </div>
            </motion.div>
          )}

          {step === STEPS.PROCESSING && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="relative w-16 h-16 mx-auto mb-8">
                 <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Constructing Dashboard</h3>
              <p className="text-zinc-400 font-mono text-sm">INITIALIZING_SECURE_ENVIRONMENT...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
