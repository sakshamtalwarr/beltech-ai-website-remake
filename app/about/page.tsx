"use client";
import { motion } from 'framer-motion';
import { MapPin, Target, Zap, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Civil Infrastructure, <br/>
          <span className="text-cyan-400">Reimagined.</span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          Beltech AI is not just a software company. We are a civic partner. 
          Founded with the goal of solving India's $22 Billion traffic congestion problem, 
          we deploy autonomous intelligence that pays for itself.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
         <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <Target className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">The Mission</h3>
            <p className="text-slate-400">
               To reduce urban commute times by 30% across Tier-1 and Tier-2 cities in India by 2028, while ensuring 100% enforcement of traffic laws without human intervention.
            </p>
         </div>
         <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <Zap className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">The Model</h3>
            <p className="text-slate-400">
               <strong>Zero Cost to Government.</strong> We invest the CAPEX. We maintain the infrastructure. The city pays only for the value delivered, making smart cities accessible to every municipality, not just the wealthy ones.
            </p>
         </div>
      </div>

      <h3 className="text-3xl font-bold mb-8">Our Footprint</h3>
      <div className="space-y-6">
         <LocationCard 
            city="Bangalore" 
            detail="Central Business District (CBD)" 
            stat="42% Wait Time Reduction" 
            status="live"
         />
         <LocationCard 
            city="Hubballi - Dharwad" 
            detail="Smart City Project" 
            stat="City-wide Surveillance Integration" 
            status="live"
         />
         <LocationCard 
            city="Goa" 
            detail="Merces Junction" 
            stat="High-Speed Violation Detection" 
            status="live"
         />
      </div>

      {/* --- PARTNERS SECTION --- */}
      <div className="mt-32 pt-20 border-t border-white/5">
        <h3 className="text-2xl font-bold text-center mb-12 opacity-80">Technology & Strategic Partners</h3>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-slate-300 flex items-center gap-2"><Cpu /> NVIDIA <span className="text-[10px] bg-green-900 text-green-400 px-1 rounded">INCEPTION</span></span>
            <span className="text-2xl font-bold text-slate-300">AWS</span>
            <span className="text-2xl font-bold text-slate-300">Honeywell</span>
            <span className="text-2xl font-bold text-slate-300">Matrix Comsec</span>
        </div>
      </div>

    </div>
  );
}

function LocationCard({ city, detail, stat, status }: { city: string, detail: string, stat: string, status: string }) {
   return (
      <div className="flex items-center gap-6 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-colors">
         <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
            <MapPin className="text-cyan-400 w-6 h-6" />
         </div>
         <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
               <h4 className="text-xl font-bold text-white">{city}</h4>
               <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase tracking-wider">
                  {status}
               </span>
            </div>
            <p className="text-slate-400 text-sm">{detail}</p>
         </div>
         <div className="hidden md:block text-right">
            <p className="text-white font-bold">{stat}</p>
            <p className="text-xs text-slate-500 uppercase">Impact Metric</p>
         </div>
      </div>
   )
}