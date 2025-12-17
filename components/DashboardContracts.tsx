
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Search, Plus, FileText, Download, Send, Eye } from 'lucide-react';
import { Contract } from '../types';

const MOCK_CONTRACTS: Contract[] = [
  { id: '1', title: "MSA - Acme Corp", client: "Acme Corp", status: "Signed", value: "$12,500", date: "Oct 24, 2024" },
  { id: '2', title: "SOW - Project Alpha", client: "Acme Corp", status: "Signed", value: "$4,500", date: "Oct 26, 2024" },
  { id: '3', title: "Advisory Agreement", client: "Vertex Labs", status: "Sent", value: "$8,000", date: "Nov 02, 2024" },
  { id: '4', title: "ND - Linear", client: "Linear", status: "Draft", value: "-", date: "Nov 05, 2024" },
  { id: '5', title: "Retainer Agreement", client: "Vercel", status: "Signed", value: "$25,000", date: "Sep 12, 2024" },
];

export const DashboardContracts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Signed' | 'Drafts'>('All');
  
  const filteredContracts = MOCK_CONTRACTS.filter(c => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Signed') return c.status === 'Signed';
    if (activeTab === 'Drafts') return c.status === 'Draft' || c.status === 'Sent';
    return true;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
         <div>
            <h1 className="text-2xl font-semibold text-black mb-1">Contracts</h1>
            <p className="text-zinc-500 text-sm">Create, manage, and track your legal agreements.</p>
         </div>
         
         <Button className="!h-9 !px-4 text-sm gap-2">
            <Plus size={16} /> New Contract
         </Button>
      </header>

      <div className="mb-6 flex space-x-1 border-b border-zinc-200">
        {['All', 'Signed', 'Drafts'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab 
                ? 'border-black text-black' 
                : 'border-transparent text-zinc-500 hover:text-black hover:border-zinc-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/30">
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Contract</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Client</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Date</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Value</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Status</th>
                   <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 text-right">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-zinc-100">
                {filteredContracts.map((contract) => (
                   <tr key={contract.id} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-zinc-50 rounded text-zinc-400 border border-zinc-100">
                               <FileText size={16} />
                            </div>
                            <span className="text-sm font-medium text-black">{contract.title}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">
                         {contract.client}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                         {contract.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                         {contract.value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            contract.status === 'Signed' ? 'bg-green-100 text-green-800' :
                            contract.status === 'Sent' ? 'bg-blue-100 text-blue-800' :
                            'bg-zinc-100 text-zinc-800'
                         }`}>
                            {contract.status}
                         </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                         <div className="flex justify-end gap-2">
                            <button className="p-1.5 text-zinc-400 hover:text-black transition-colors" title="View">
                               <Eye size={16} />
                            </button>
                            <button className="p-1.5 text-zinc-400 hover:text-black transition-colors" title="Download">
                               <Download size={16} />
                            </button>
                            {contract.status !== 'Signed' && (
                               <button className="p-1.5 text-zinc-400 hover:text-blue-600 transition-colors" title="Send Reminder">
                                  <Send size={16} />
                               </button>
                            )}
                         </div>
                      </td>
                   </tr>
                ))}
                {filteredContracts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500 text-sm">
                      No contracts found in {activeTab}.
                    </td>
                  </tr>
                )}
             </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
