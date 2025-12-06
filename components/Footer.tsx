import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-black">Product</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-black transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-black">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-black transition-colors">Manifesto</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-black">Stay Updated</h4>
          <div className="flex gap-2 max-w-sm">
            <input 
              type="email" 
              placeholder="enter@email.com" 
              className="bg-zinc-50 border border-zinc-200 rounded-sm px-4 py-2 w-full text-black placeholder-zinc-400 focus:outline-none focus:border-black transition-colors"
            />
            <button className="bg-black text-white px-4 py-2 rounded-sm font-medium hover:bg-zinc-800 transition-colors">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-zinc-400 text-sm">
         <div>© 2024 Paper Labs Inc.</div>
         <div className="font-mono text-xs text-black">System Normal</div>
      </div>
    </footer>
  );
};