"use client";
import { motion } from 'framer-motion';
import { Server, Shield, Cpu, Database, Network } from 'lucide-react';

export default function Technology() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6">Under the <span className="text-cyan-400">Hood</span></h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg">
          We don't just record video; we understand it. Our platform processes 30 frames per second across thousands of cameras simultaneously. Here is how we do it.
        </p>
      </motion.div>

      {/* Section 1: Edge Computing */}
      <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
        <div className="md:w-1/2">
            <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                <Cpu size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Edge-First Architecture</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
                Streaming 4K video to the cloud is expensive and slow. Beltech uses <strong>Edge AI boxes</strong> deployed directly at the traffic junction.
            </p>
            <ul className="space-y-4">
                <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">1</div>
                    <p className="text-sm text-slate-400">Video is processed locally on NVIDIA Jetson / Coral TPUs.</p>
                </li>
                <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">2</div>
                    <p className="text-sm text-slate-400">Only metadata (e.g., "Car, Red, KA-01-AB-1234") is sent to the server.</p>
                </li>
                <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">3</div>
                    <p className="text-sm text-slate-400">Bandwidth usage drops by 95%, allowing operation on 4G SIM cards.</p>
                </li>
            </ul>
        </div>
        <div className="md:w-1/2 bg-slate-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden h-[400px] flex items-center justify-center">
            {/* Visual Representation of Edge Processing */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
            <div className="relative z-10 text-center">
                <Server className="w-24 h-24 text-slate-700 mx-auto mb-4" />
                <div className="flex gap-4 justify-center">
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded text-xs font-mono border border-green-500/20">LATENCY: 12ms</span>
                    <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs font-mono border border-blue-500/20">BANDWIDTH: 50KB/s</span>
                </div>
            </div>
        </div>
      </div>

      {/* Section 2: Privacy */}
      <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
        <div className="md:w-1/2">
            <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
                <Shield size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Privacy by Design</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
                We adhere to India's DPDP Act and Global GDPR standards. We ensure that surveillance does not become intrusion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-2">Auto-Redaction</h4>
                    <p className="text-xs text-slate-400">Faces and non-violating license plates are blurred automatically before storage.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-2">Audit Logs</h4>
                    <p className="text-xs text-slate-400">Every view of the video feed is logged on an immutable ledger.</p>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 bg-slate-900 rounded-3xl p-8 border border-white/10 h-[400px] flex items-center justify-center relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
             <LockVisual />
        </div>
      </div>
    </div>
  );
}

function LockVisual() {
    return (
        <div className="relative w-48 h-48 border-4 border-slate-700 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent animate-spin" />
            <Shield className="w-16 h-16 text-purple-500" />
        </div>
    )
}