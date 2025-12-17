
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { OnboardingData } from '../types';
import { Bell, CreditCard, Shield, Globe, Mail } from 'lucide-react';

interface DashboardSettingsProps {
    userData: OnboardingData;
}

export const DashboardSettings: React.FC<DashboardSettingsProps> = ({ userData }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <header className="mb-8">
         <h1 className="text-2xl font-semibold text-black mb-1">Settings</h1>
         <p className="text-zinc-500 text-sm">Manage your workspace configuration and preferences.</p>
      </header>

      <div className="space-y-8">
         {/* Profile Section */}
         <section className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-black mb-6 flex items-center gap-2">
                <Globe size={18} /> Workspace
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Agency Name" defaultValue={userData.agencyName} />
                <Input label="Workspace URL" defaultValue={userData.agencySlug} />
                <div className="col-span-full">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                        Logo
                    </label>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400">
                            img
                        </div>
                        <Button variant="secondary" className="!h-9 !px-4 text-sm">Upload New</Button>
                        <button className="text-sm text-red-500 hover:text-red-600">Remove</button>
                    </div>
                </div>
            </div>
         </section>

         {/* Notifications Section */}
         <section className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-black mb-6 flex items-center gap-2">
                <Bell size={18} /> Notifications
            </h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                    <div>
                        <div className="text-sm font-medium text-black">Email Notifications</div>
                        <div className="text-xs text-zinc-500">Receive weekly summaries and contract updates.</div>
                    </div>
                    <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer left-1 top-1 checked:right-1 checked:left-auto" defaultChecked/>
                        <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-200 cursor-pointer checked:bg-black"></label>
                    </div>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-zinc-100">
                    <div>
                        <div className="text-sm font-medium text-black">Slack Integration</div>
                        <div className="text-xs text-zinc-500">Post updates to a dedicated Slack channel.</div>
                    </div>
                    <Button variant="secondary" className="!h-8 !px-3 text-xs">Connect</Button>
                </div>
            </div>
         </section>

         {/* Billing Section */}
         <section className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-black mb-6 flex items-center gap-2">
                <CreditCard size={18} /> Billing
            </h2>
            <div className="flex items-start justify-between bg-zinc-50 p-4 rounded-lg border border-zinc-200 mb-6">
                <div>
                    <div className="text-sm font-medium text-black">Studio Plan</div>
                    <div className="text-xs text-zinc-500 mb-2">$24/month, billed yearly</div>
                    <div className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <Shield size={10} /> Active
                    </div>
                </div>
                <Button variant="secondary" className="!h-8 !px-3 text-xs">Manage Subscription</Button>
            </div>
            
            <div>
                 <h3 className="text-sm font-medium text-black mb-4">Payment Methods</h3>
                 <div className="flex items-center gap-3 p-3 border border-zinc-200 rounded-md">
                    <div className="w-10 h-6 bg-[#111] rounded px-1 flex items-center justify-center text-white text-[8px] font-bold tracking-wider">VISA</div>
                    <div className="text-sm text-zinc-600">•••• 4242</div>
                    <div className="text-xs text-zinc-400 ml-auto">Expires 12/25</div>
                 </div>
            </div>
         </section>

         <div className="flex justify-end gap-4 pt-4">
            <button className="text-sm text-zinc-500 hover:text-black">Cancel</button>
            <Button className="!h-10 !px-6">Save Changes</Button>
         </div>
      </div>
    </motion.div>
  );
};
