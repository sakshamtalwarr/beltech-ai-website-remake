"use client";
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const team = [
  { 
    name: "Agastya Bellad", 
    role: "Founder & CEO", 
    bio: "Leading the vision for smarter Indian cities. Merging political insight with deep-tech infrastructure to solve urban congestion.",
    // Replace with actual image path in public/ folder
    image: "/team/agastya.jpg" 
  },
  { 
    name: "Pinakee Biswas", 
    role: "Chief Technology Officer", 
    bio: "The architect behind Beltech's Computer Vision stack. Expert in scaling real-time AI on edge devices.",
    // Replace with actual image path in public/ folder
    image: "/team/pinakee.jpg" 
  },
  { 
    name: "Join Our Team", 
    role: "We are Hiring", 
    bio: "Are you a Rust or C++ developer interested in Smart Cities? We are looking for engineers to build the next generation of urban tech.",
    isHiring: true
  },
];

export default function Team() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Meet the <span className="text-cyan-400">Leadership</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A blend of civic leadership and engineering excellence. We are building the operating system for India's future cities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`bg-slate-900 border ${member.isHiring ? 'border-dashed border-cyan-500/50' : 'border-slate-800'} p-8 rounded-3xl text-center hover:border-cyan-500/50 transition-all group`}
          >
            {!member.isHiring ? (
                <>
                    <div className="w-40 h-40 mx-auto bg-slate-800 rounded-full mb-8 overflow-hidden relative border-4 border-slate-900 group-hover:border-cyan-500/30 transition-colors">
                        {/* Placeholder for actual image */}
                        <div className="absolute inset-0 bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-2xl">
                            {member.name.charAt(0)}
                        </div> 
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-4 uppercase tracking-wider text-xs">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="flex justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <Linkedin className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
                    </div>
                </>
            ) : (
                <div className="h-full flex flex-col justify-center items-center py-10">
                    <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 text-cyan-400 animate-pulse">
                        <ArrowRight size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-6 uppercase tracking-wider text-xs">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{member.bio}</p>
                    <Link href="/contact">
                        <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Apply Now
                        </button>
                    </Link>
                </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}