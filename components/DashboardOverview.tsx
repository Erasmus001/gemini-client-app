
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Users, FileText, Bell, Search, Plus, ArrowUpRight, CheckCircle, Clock, MoreHorizontal } from 'lucide-react';
import { Client } from '../types';

export const DashboardOverview: React.FC = () => {
  const clients: Client[] = [
    { id: '1', name: "Acme Corp", email: "contact@acme.com", project: "Q3 Marketing Sprint", status: "Active", value: "$12,500", lastActive: "2h ago" },
    { id: '2', name: "Vertex Labs", email: "team@vertex.io", project: "Platform Redesign", status: "Pending", value: "$8,000", lastActive: "5h ago" },
    { id: '3', name: "Linear", email: "hello@linear.app", project: "Brand Advisory", status: "Active", value: "$4,200", lastActive: "1d ago" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
           <div>
              <h1 className="text-2xl font-semibold text-black mb-1">Overview</h1>
              <p className="text-zinc-500 text-sm">Good morning. Here's what's happening today.</p>
           </div>
           
           <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                 <input 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 w-full md:w-64 bg-white border border-zinc-200 rounded-md text-sm focus:outline-none focus:border-zinc-400"
                 />
              </div>
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-black transition-colors">
                 <Bell size={16} />
              </button>
              <Button className="!h-9 !px-4 text-sm gap-2 whitespace-nowrap">
                 <Plus size={16} /> <span className="hidden sm:inline">New Client</span>
              </Button>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="p-2 bg-zinc-50 rounded-lg text-zinc-500">
                    <Users size={20} />
                 </div>
                 <span className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
              </div>
              <div className="text-3xl font-bold text-black mb-1">14</div>
              <div className="text-sm text-zinc-500">Active Clients</div>
           </div>

           <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="p-2 bg-zinc-50 rounded-lg text-zinc-500">
                    <FileText size={20} />
                 </div>
                 <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-1 rounded">0%</span>
              </div>
              <div className="text-3xl font-bold text-black mb-1">3</div>
              <div className="text-sm text-zinc-500">Pending Signatures</div>
           </div>

           <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="p-2 bg-zinc-50 rounded-lg text-zinc-500">
                    <ArrowUpRight size={20} />
                 </div>
                 <span className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">+24%</span>
              </div>
              <div className="text-3xl font-bold text-black mb-1">$24.5k</div>
              <div className="text-sm text-zinc-500">Monthly Revenue</div>
           </div>
        </div>

        {/* Recent Activity / Clients List */}
        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
           <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
              <h3 className="font-semibold text-black">Recent Activity</h3>
              <button className="text-sm text-zinc-500 hover:text-black">View all</button>
           </div>
           
           <div className="divide-y divide-zinc-100">
              {clients.map((client, i) => (
                 <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={client.id} 
                    className="p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer group"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-sm font-medium border border-zinc-200">
                          {client.name.substring(0, 2).toUpperCase()}
                       </div>
                       <div>
                          <p className="font-medium text-black">{client.name}</p>
                          <p className="text-xs text-zinc-500">{client.project}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                       <div className="hidden md:flex items-center gap-2">
                          {client.status === 'Active' ? (
                             <CheckCircle size={14} className="text-green-500" />
                          ) : (
                             <Clock size={14} className="text-amber-500" />
                          )}
                          <span className={`text-sm ${client.status === 'Active' ? 'text-zinc-600' : 'text-zinc-500'}`}>
                             {client.status}
                          </span>
                       </div>
                       <div className="text-sm font-medium text-black w-20 text-right">{client.value}</div>
                       <button className="p-2 text-zinc-300 hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                          <MoreHorizontal size={16} />
                       </button>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
    </motion.div>
  );
};
