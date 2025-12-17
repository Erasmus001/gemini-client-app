
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Search, Plus, Filter, MoreHorizontal, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Client } from '../types';

const MOCK_CLIENTS: Client[] = [
  { id: '1', name: "Acme Corp", email: "alice@acme.com", project: "Q3 Marketing Sprint", status: "Active", value: "$12,500", lastActive: "2h ago" },
  { id: '2', name: "Vertex Labs", email: "bob@vertex.io", project: "Platform Redesign", status: "Pending", value: "$8,000", lastActive: "5h ago" },
  { id: '3', name: "Linear", email: "carol@linear.app", project: "Brand Advisory", status: "Active", value: "$4,200", lastActive: "1d ago" },
  { id: '4', name: "Raycast", email: "thomas@raycast.com", project: "Extension Dev", status: "Inactive", value: "$2,100", lastActive: "2w ago" },
  { id: '5', name: "Vercel", email: "guillermo@vercel.com", project: "Next.js Conf", status: "Active", value: "$25,000", lastActive: "3d ago" },
];

export const DashboardClients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredClients = MOCK_CLIENTS.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
         <div>
            <h1 className="text-2xl font-semibold text-black mb-1">Clients</h1>
            <p className="text-zinc-500 text-sm">Manage your relationships and project status.</p>
         </div>
         
         <div className="flex gap-2">
            <Button variant="secondary" className="!h-9 !px-4 text-sm gap-2">
               <Filter size={16} /> Filter
            </Button>
            <Button className="!h-9 !px-4 text-sm gap-2">
               <Plus size={16} /> Add Client
            </Button>
         </div>
      </header>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-zinc-100 bg-zinc-50/50">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input 
                placeholder="Search clients, projects..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 w-full bg-white border border-zinc-200 rounded-md text-sm focus:outline-none focus:border-zinc-400 transition-colors"
              />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/30">
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Client</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Current Project</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Status</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Value</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 text-right">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-zinc-100">
                {filteredClients.map((client) => (
                   <tr key={client.id} className="hover:bg-zinc-50/80 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium border border-zinc-200 text-zinc-600">
                               {client.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                               <div className="text-sm font-medium text-black">{client.name}</div>
                               <div className="text-xs text-zinc-500">{client.email}</div>
                            </div>
                         </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-zinc-600">{client.project}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center gap-1.5">
                            {client.status === 'Active' && <CheckCircle size={14} className="text-green-500" />}
                            {client.status === 'Pending' && <Clock size={14} className="text-amber-500" />}
                            {client.status === 'Inactive' && <AlertCircle size={14} className="text-zinc-400" />}
                            <span className={`text-sm ${
                               client.status === 'Active' ? 'text-green-700' : 
                               client.status === 'Pending' ? 'text-amber-700' : 'text-zinc-500'
                            }`}>
                               {client.status}
                            </span>
                         </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-black">
                         {client.value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                         <button className="p-2 text-zinc-300 hover:text-black transition-colors rounded hover:bg-zinc-100">
                            <MoreHorizontal size={16} />
                         </button>
                      </td>
                   </tr>
                ))}
                {filteredClients.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 text-sm">
                      No clients found matching "{searchTerm}"
                    </td>
                  </tr>
                )}
             </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-zinc-100 flex justify-between items-center bg-zinc-50/30">
           <div className="text-xs text-zinc-500">Showing {filteredClients.length} of {MOCK_CLIENTS.length} clients</div>
           <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border border-zinc-200 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 text-xs border border-zinc-200 rounded hover:bg-white">Next</button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};
