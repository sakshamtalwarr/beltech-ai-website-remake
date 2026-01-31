"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Technology', href: '/technology' }, // NEW
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/resources' }, // NEW LINK
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },       // NEW
  { name: 'Contact', href: '/contact' },
];
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
          >
            BELTECH<span className="text-cyan-400">.AI</span>
          </motion.div>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
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

        <Link href="/contact">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2.5 px-6 rounded-full text-sm shadow-lg shadow-cyan-500/20"
          >
            Get in Touch
          </motion.button>
        </Link>
        
        <div className="md:hidden text-white"><Menu /></div>
      </div>
    </nav>
  );
}