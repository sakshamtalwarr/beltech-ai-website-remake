"use client";
import { motion } from 'framer-motion';
import { FileText, Download, ArrowUpRight, BarChart3, PieChart } from 'lucide-react';

export default function Resources() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6">Impact <span className="text-cyan-400">Reports</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Deep dives into our deployments. Analysis of traffic patterns, violation trends, and the measurable ROI of smart infrastructure.
        </p>
      </motion.div>

      {/* --- FEATURED CASE STUDY (Bangalore) --- */}
      <div className="mb-32">
        <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">Featured Case Study</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row hover:border-cyan-500/30 transition-all">
           <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                 <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">SUCCESS STORY</span>
                 <span className="text-slate-500 text-sm">October 2025</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Decongesting Bangalore's CBD: A 90-Day Pilot</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                 How Beltech deployed 40 edge-nodes across M.G. Road and Brigade Road to synchronize signals dynamically, resulting in a documented 42% reduction in peak-hour wait times.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                 <div>
                    <div className="text-3xl font-bold text-white">-42%</div>
                    <div className="text-xs text-slate-500 uppercase">Avg Wait Time</div>
                 </div>
                 <div>
                    <div className="text-3xl font-bold text-white">12k</div>
                    <div className="text-xs text-slate-500 uppercase">Violations/Month</div>
                 </div>
              </div>

              <div className="flex gap-4">
                 <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                    Read Full Report <ArrowUpRight size={18} />
                 </button>
                 <button className="border border-slate-700 hover:border-white text-slate-300 font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                    Download PDF <Download size={18} />
                 </button>
              </div>
           </div>
           <div className="md:w-1/2 bg-slate-800 relative min-h-[400px]">
              {/* Abstract Data Visualization Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-full max-w-sm p-6 bg-slate-900/90 backdrop-blur rounded-xl border border-white/10 shadow-2xl">
                    <div className="flex justify-between items-end mb-4">
                       <h4 className="font-bold text-slate-300 text-sm">Traffic Flow Efficiency</h4>
                       <span className="text-green-400 text-xs font-bold">+ Improved</span>
                    </div>
                    <div className="flex items-end gap-2 h-32">
                       <div className="w-1/5 h-[40%] bg-slate-700 rounded-t-md relative group"><div className="absolute -top-6 left-0 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Before</div></div>
                       <div className="w-1/5 h-[50%] bg-slate-700 rounded-t-md" />
                       <div className="w-1/5 h-[45%] bg-slate-700 rounded-t-md" />
                       <div className="w-1/5 h-[70%] bg-cyan-600 rounded-t-md relative"><div className="absolute -top-8 left-0 text-cyan-400 font-bold text-xs">Pilot</div></div>
                       <div className="w-1/5 h-[85%] bg-cyan-500 rounded-t-md" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- WHITEPAPERS GRID --- */}
      <div>
         <h2 className="text-3xl font-bold mb-10">Technical Whitepapers</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PaperCard 
               title="The Edge AI Advantage" 
               desc="Why cloud-based processing is too slow for critical safety infrastructure."
               tag="Technology"
            />
             <PaperCard 
               title="Privacy in Public Spaces" 
               desc="Implementing automated face-redaction compliant with India's DPDP Act 2023."
               tag="Policy"
            />
             <PaperCard 
               title="The ROI of Smart Signals" 
               desc="Financial breakdown of fuel savings and productivity gains for municipalities."
               tag="Economics"
            />
         </div>
      </div>
    </div>
  );
}

function PaperCard({ title, desc, tag }: { title: string, desc: string, tag: string }) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 group cursor-pointer transition-all hover:-translate-y-1"
      >
         <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
               <FileText size={24} />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tag}</span>
         </div>
         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
         <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
         <div className="flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-white">
            Download <Download size={14} />
         </div>
      </motion.div>
   )
}