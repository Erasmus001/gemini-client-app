
import React, { useState } from 'react';
import { DashboardOverview } from './DashboardOverview';
import { DashboardClients } from './DashboardClients';
import { DashboardContracts } from './DashboardContracts';
import { DashboardSettings } from './DashboardSettings';
import { 
  LayoutGrid, Users, FileText, Settings, LogOut
} from 'lucide-react';
import { OnboardingData } from '../types';

interface DashboardProps {
  userData: OnboardingData;
  onLogout: () => void;
}

type DashboardView = 'overview' | 'clients' | 'contracts' | 'settings';

export const Dashboard: React.FC<DashboardProps> = ({ userData, onLogout }) => {
  const [activeTab, setActiveTab] = useState<DashboardView>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'clients':
        return <DashboardClients />;
      case 'contracts':
        return <DashboardContracts />;
      case 'settings':
        return <DashboardSettings userData={userData} />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 bg-white hidden md:flex flex-col fixed top-0 bottom-0 left-0 z-20">
        <div className="p-6 border-b border-zinc-100">
           <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-black rounded-sm"></div>
              <span className="font-bold tracking-tight text-black text-lg">Paper</span>
           </div>
        </div>

        <div className="p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-black hover:bg-zinc-50'}`}
          >
            <LayoutGrid size={18} /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'clients' ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-black hover:bg-zinc-50'}`}
          >
            <Users size={18} /> Clients
          </button>
          <button 
            onClick={() => setActiveTab('contracts')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'contracts' ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-black hover:bg-zinc-50'}`}
          >
            <FileText size={18} /> Contracts
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-black hover:bg-zinc-50'}`}
          >
            <Settings size={18} /> Settings
          </button>
        </div>

        <div className="mt-auto p-4 border-t border-zinc-100">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">
                {userData.agencyName ? userData.agencyName.substring(0,2).toUpperCase() : 'AG'}
            </div>
            <div className="flex-1 min-w-0">
               <p className="text-sm font-medium text-black truncate">{userData.agencyName || 'Agency'}</p>
               <button onClick={onLogout} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 transition-colors">
                  <LogOut size={10} /> Sign out
               </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 max-w-7xl mx-auto min-w-0">
        {renderContent()}
      </main>
    </div>
  );
};
