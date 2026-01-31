import React from 'react';
import { Globe, Database } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">BELTECH.AI</h2>
          <p className="text-slate-400 max-w-sm mb-6">
            Making cities sentient. We are a deep-tech company based in Bangalore, building the nervous system of modern urban infrastructure.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
              <Globe size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                <Database size={18} />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer"><Link href="/about">About Us</Link></li>
            <li className="hover:text-cyan-400 cursor-pointer"><Link href="/team">Our Team</Link></li>
            <li className="hover:text-cyan-400 cursor-pointer"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-cyan-400 cursor-pointer">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/10 text-center text-slate-600 text-sm">
        © 2026 Beltech Artificial Intelligence Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}