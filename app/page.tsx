"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  ArrowRight, Activity, Shield, MapPin, 
  ChevronDown, ChevronUp, Github 
} from 'lucide-react';
import Link from 'next/link';

// --- ANIMATION VARIANTS (Simpler version to fix Build Error) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } // Removed 'ease' to fix strict type error
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// --- WELCOME SCREEN COMPONENT ---
function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const finishTimer = setTimeout(() => {
        onComplete();
    }, 2800);

    return () => {
        clearInterval(timer);
        clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="text-5xl font-bold tracking-tighter text-white">
            BELTECH<span className="text-cyan-500">.AI</span>
        </div>
        <div className="absolute -bottom-4 left-0 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-cyan-500" 
                style={{ width: `${progress}%` }} 
            />
        </div>
      </motion.div>
      <p className="text-slate-500 font-mono text-sm animate-pulse">INITIALIZING NEURAL GRID...</p>
    </motion.div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isLoading]);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <AnimatePresence>
        {isLoading && <WelcomeScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
        <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_60%)]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Copy */}
            <motion.div 
                initial="hidden"
                animate={!isLoading ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-cyan-950/30 border border-cyan-500/30 rounded-full px-3 py-1 mb-6 backdrop-blur-md">
                   <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">Computer Vision • AI • IoT</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                    Building Cities of the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                       Future With AI.
                    </span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                    We build AI to make cities smarter, safer and more effective. Our technological focus is Computer Vision with <span className="text-white font-bold">Zero Cost to the Government.</span>
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                    <Link href="/products">
                        <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2">
                            Our Products <ArrowRight size={18} />
                        </button>
                    </Link>
                    <Link href="/impact">
                        <button className="bg-slate-900 border border-slate-700 hover:border-white text-white font-bold py-4 px-8 rounded-lg transition-all">
                            View Impact
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right Side: Dashboard Visual */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={!isLoading ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
            >
                <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                        <div className="text-xs font-mono text-slate-400">IMPACT_METRICS // LIVE</div>
                        <div className="flex gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <DashboardStat val="42%" label="Reduction in Wait Time" color="text-cyan-400" sub="↓" />
                        <DashboardStat val="95%" label="Detection Accuracy" color="text-purple-400" sub="+" />
                        <DashboardStat val="1000" label="Violations / Day" color="text-red-400" sub="+" />
                        <DashboardStat val="200" label="Tons CO2 Reduced" color="text-green-400" sub="T" />
                    </div>
                    
                    <div className="h-32 bg-slate-800 rounded-lg relative overflow-hidden group border border-white/5">
                        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1146553860/photo/aerial-view-of-traffic-jam-at-night.jpg?s=612x612&w=0&k=20&c=pI02b37k-uQx-iFzR3TjH_wGz7iQoRk_eZgO6_y_5Rk=')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400 bg-black/50 px-2 rounded">LIVE FEED: BENGALURU</div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- TRUST TICKER (Fade In) --- */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-y border-white/5 bg-slate-950/80 backdrop-blur-sm py-10"
      >
        <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">Operational In</p>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 transition-all hover:opacity-100">
           {["BENGALURU", "HUBBALLI-DHARWAD", "BELAGAVI", "GOA"].map((city, i) => (
             <span key={i} className="text-xl font-bold text-slate-300">{city}</span>
           ))}
        </div>
      </motion.section>

      {/* --- OPEN SOURCE SECTION (Slide Up) --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-slate-900 border-b border-white/5"
      >
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Github size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Commitment to Open Source</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
               Our platform will be open-sourced soon to allow everyone to contribute towards building smarter, safer, and more effective cities.
            </p>
            <button className="text-cyan-400 font-bold uppercase text-sm tracking-widest hover:text-white transition-colors">
               View Roadmap →
            </button>
         </div>
      </motion.section>

      {/* --- PRODUCTS SECTION (Staggered Reveal) --- */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="flex justify-between items-end mb-16"
          >
             <div>
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Our Products</h2>
                <h3 className="text-4xl font-bold">Comprehensive City Solutions</h3>
             </div>
             <Link href="/products" className="hidden md:block text-slate-400 hover:text-white transition-colors">View All →</Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
             <ProductCard 
                title="AI Driven Traffic Management"
                desc="Reduces congestion by controlling signals using AI. Automatic green-corridor for emergency/VIP vehicles."
                icon={<Activity />}
             />
             <ProductCard 
                title="AI Driven Integrated Security"
                desc="Detects suspicious/illegal activities, criminal detection, and customizable intelligence parameters."
                icon={<Shield />}
             />
             <ProductCard 
                title="AI Driven Tourism Platform"
                desc="Single platform to manage tourists and vendors. Detailed analytics to boost tourism revenue."
                icon={<MapPin />}
             />
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA (Scale Up) --- */}
      <section className="py-32 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-cyan-600/5" />
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto px-6"
         >
            <h2 className="text-5xl font-bold mb-8">Zero Cost to Government.</h2>
            <p className="text-xl text-slate-400 mb-10">
               Join the cities using Beltech to secure their streets and optimize their flow.
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg font-bold py-5 px-10 rounded-full shadow-2xl shadow-cyan-500/20 transition-all transform hover:scale-105">
               Contact Us
            </button>
         </motion.div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function DashboardStat({ val, label, color, sub }: any) {
    return (
        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
            <div className={`text-3xl font-bold ${color}`}>{val} <span className="text-sm">{sub}</span></div>
            <div className="text-slate-500 text-[10px] uppercase font-bold mt-1">{label}</div>
        </div>
    )
}

function ProductCard({ title, desc, icon }: { title: string, desc: string, icon: any }) {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            variants={cardVariants}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group cursor-pointer h-full flex flex-col hover:-translate-y-2 duration-300"
        >
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {desc}
            </p>
            <div className="text-cyan-400 text-sm font-bold group-hover:translate-x-2 transition-transform flex items-center gap-2">
                Know more <ArrowRight size={14} />
            </div>
        </motion.div>
    )
}