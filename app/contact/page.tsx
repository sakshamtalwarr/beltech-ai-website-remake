"use client";
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl font-bold mb-8">Get in <span className="text-cyan-400">Touch</span></h1>
          <p className="text-slate-400 mb-12 text-lg">
            Interested in a pilot program for your city? Reach out to our government relations team.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-cyan-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg">Headquarters</h3>
                <p className="text-slate-400">HSR Layout, Bangalore<br/>Karnataka, India - 560102</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="text-cyan-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg">Email</h3>
                <p className="text-slate-400">contact@beltech.ai</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900/50 p-8 rounded-3xl border border-white/10"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Organization / Govt Body</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
            <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-colors">
              Send Message
            </button>
          </div>
        </motion.form>

      </div>
    </div>
  );
}