
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { View, OnboardingData } from './types';
import { AnimatePresence, motion } from 'framer-motion';

// Logos for social proof
const SocialProof = () => (
  <div className="w-full border-y border-zinc-200 py-12 bg-white overflow-hidden">
    <div className="text-center mb-8">
       <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Trusting the protocol</span>
    </div>
    <div className="flex justify-center items-center gap-16 md:gap-32 opacity-40 grayscale flex-wrap px-8">
      {/* Logos updated to black fill for light mode */}
      <svg height="30" width="100" viewBox="0 0 100 30"><path d="M0 15 L15 0 L30 15 L15 30 Z" fill="#000"/><text x="40" y="22" fontFamily="Inter" fontWeight="bold" fontSize="20" fill="#000">Pentagon</text></svg>
      <svg height="30" width="100" viewBox="0 0 100 30"><circle cx="15" cy="15" r="15" fill="#000"/><text x="40" y="22" fontFamily="Inter" fontWeight="bold" fontSize="20" fill="#000">Circle</text></svg>
      <svg height="30" width="100" viewBox="0 0 100 30"><rect width="30" height="30" fill="#000"/><text x="40" y="22" fontFamily="Inter" fontWeight="bold" fontSize="20" fill="#000">Square</text></svg>
      <svg height="30" width="100" viewBox="0 0 100 30"><path d="M0 30 L15 0 L30 30 Z" fill="#000"/><text x="40" y="22" fontFamily="Inter" fontWeight="bold" fontSize="20" fill="#000">Vertex</text></svg>
    </div>
  </div>
);

function App() {
  const [view, setView] = useState<View>('landing');
  const [userData, setUserData] = useState<OnboardingData | null>(null);

  const startOnboarding = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('onboarding');
  };

  const completeOnboarding = (data: OnboardingData) => {
    setUserData(data);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUserData(null);
    setView('landing');
  };

  return (
    <main className="min-h-screen font-sans selection:bg-zinc-200 selection:text-black bg-[#FAFAFA]">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar onStart={startOnboarding} />
            <Hero onStart={startOnboarding} />
            <SocialProof />
            <BentoGrid />
            <Workflow />
            <section className="bg-white py-32 px-4 text-center border-y border-zinc-200">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-[#111111] text-5xl md:text-7xl tracking-tighter mb-8 font-semibold">Your workflow,<br/>clarified.</h2>
                <p className="text-zinc-500 text-xl mb-12">The canvas for the modern agency.</p>
                
                <div className="h-[400px] w-full bg-[#FAFAFA] rounded-xl border border-zinc-200 relative overflow-hidden group shadow-sm">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    
                    <div className="absolute top-1/4 left-1/4 w-40 h-24 bg-white rounded-lg border border-zinc-200 p-4 shadow-lg z-10 flex flex-col gap-2 group-hover:translate-x-4 transition-transform duration-700">
                      <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-xs">P</div>
                      <div className="h-2 w-20 bg-zinc-100 rounded"></div>
                    </div>
                    
                    <div className="absolute top-1/3 left-1/2 w-40 h-24 bg-white rounded-lg border border-zinc-200 p-4 shadow-lg z-20 flex flex-col gap-2 group-hover:-translate-x-4 transition-transform duration-700">
                      <div className="w-8 h-8 bg-zinc-200 rounded flex items-center justify-center text-black text-xs">S</div>
                      <div className="h-2 w-20 bg-zinc-100 rounded"></div>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 text-zinc-400 font-mono text-xs">
                        DRAG_AND_DROP_ENABLED
                    </div>
                </div>
              </div>
            </section>
            <Testimonials />
            <Pricing onStart={startOnboarding} />
            <Footer />
          </motion.div>
        )}

        {view === 'onboarding' && (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Onboarding 
              onComplete={completeOnboarding} 
              onBack={() => setView('landing')} 
            />
          </motion.div>
        )}

        {view === 'dashboard' && userData && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dashboard userData={userData} onLogout={handleLogout} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
