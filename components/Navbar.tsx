"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Impact', href: '/impact' }, // You might need to create this page or link to section
  { name: 'Team', href: '/team' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
            >
              BELTECH<span className="text-cyan-400">.AI</span>
            </motion.div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className={`relative group transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden lg:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2.5 px-6 rounded-full text-sm shadow-lg shadow-cyan-500/20"
            >
              Get in Touch
            </motion.button>
          </Link>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-950 border-l border-white/10 lg:hidden flex flex-col"
          >
            {/* Mobile Header */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
               <span className="text-xl font-bold text-white">Menu</span>
               <button 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg"
               >
                 <X size={24} />
               </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col p-6 gap-4 overflow-y-auto">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group"
                >
                  <span className="text-lg font-medium text-slate-200 group-hover:text-cyan-400">{item.name}</span>
                  <ChevronRight size={18} className="text-slate-600 group-hover:text-cyan-400" />
                </Link>
              ))}
              
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                 <button className="w-full bg-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20">
                    Contact Us
                 </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}