"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter">
              BELTECH<span className="text-cyan-500">.AI</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Building the nervous system of modern cities with zero cost to government infrastructure.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <SocialIcon icon={<Linkedin size={18} />} />
               <SocialIcon icon={<Twitter size={18} />} />
               <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h4 className="text-white font-bold mb-6">Sitemap</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors">Products</Link></li>
              <li><Link href="/impact" className="hover:text-cyan-400 transition-colors">Impact</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/team" className="hover:text-cyan-400 transition-colors">Team</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

           {/* Column 4: Contact/Address */}
           <div>
            <h4 className="text-white font-bold mb-6">Headquarters</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              HSR Layout, Sector 2<br />
              Bengaluru, Karnataka<br />
              India - 560102
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-slate-600 text-xs">
              © 2026 Beltech Artificial Intelligence Pvt Ltd.
           </div>
           <div className="flex gap-8 text-xs text-slate-500">
              <Link href="#" className="hover:text-white transition-colors">Terms & conditions</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy policy</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: any }) {
    return (
        <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 transition-all cursor-pointer">
            {icon}
        </div>
    )
}