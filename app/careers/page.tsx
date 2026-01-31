"use client";
import { motion } from 'framer-motion';
import { Code2, Coffee, Zap, Globe, ArrowRight, Briefcase } from 'lucide-react';

const jobs = [
  {
    title: "Senior Computer Vision Engineer",
    type: "Full-time",
    location: "Bangalore (On-site)",
    dept: "AI Research",
    desc: "Lead the development of our detection algorithms. Experience with PyTorch, OpenCV, and TensorRT required."
  },
  {
    title: "Full Stack Developer (Python/React)",
    type: "Full-time",
    location: "Bangalore",
    dept: "Platform",
    desc: "Build the dashboard used by traffic police commissioners. Next.js on the frontend, Django/FastAPI on the backend."
  },
  {
    title: "Embedded Systems Engineer",
    type: "Full-time",
    location: "Bangalore",
    dept: "Hardware",
    desc: "Optimize our AI models to run on Jetson Nano and Edge devices. C++ and CUDA experience is a plus."
  },
  {
    title: "Government Relations Manager",
    type: "Full-time",
    location: "Delhi / Remote",
    dept: "Sales",
    desc: "Manage relationships with municipal corporations and Smart City CEOs across North India."
  }
];

export default function Careers() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Build the <span className="text-cyan-400">Nervous System</span> of India</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We are solving problems that affect millions of citizens every day. Join us and write code that saves time, fuel, and lives.
        </p>
      </div>

      {/* Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <Perk icon={<Zap />} title="High Impact Work" desc="Your code deploys to live intersections. You will see the results of your work on your morning commute." />
        <Perk icon={<Code2 />} title="Modern Stack" desc="We don't deal with legacy code. We use the latest in Edge AI, React Server Components, and Rust." />
        <Perk icon={<Coffee />} title="HSR Layout Office" desc="Located in the heart of Bangalore's startup hub. Competitive salary and equity options." />
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-cyan-400" /> Open Positions
        </h2>
        
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center group hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                  <span className="flex items-center gap-1"><Globe size={14} /> {job.location}</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">{job.type}</span>
                </div>
              </div>
              
              <button className="bg-white/5 hover:bg-cyan-600 hover:text-white text-slate-300 font-bold py-2 px-6 rounded-full transition-all flex items-center gap-2">
                Apply <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Perk({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}