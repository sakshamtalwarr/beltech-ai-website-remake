"use client";
import { motion } from 'framer-motion';
import { 
  Activity, Shield, MapPin, Zap, Lock, Smartphone, 
  BarChart3, AlertTriangle, Eye, Navigation, Ticket, Users, FileText 
} from 'lucide-react';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Products() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      
      {/* --- HEADER --- */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6">Our <span className="text-cyan-400">Product Suite</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
           Comprehensive AI solutions for Traffic, Security, and Tourism.
        </p>
      </motion.div>

      {/* =========================================================
          SECTION 1: TRAFFIC MANAGEMENT
         ========================================================= */}
      <section className="mb-40">
        <SectionHeader title="AI Driven Integrated Traffic Management" icon={<Activity />} color="text-cyan-400" />
        
        {/* 1.1 Traffic Management System */}
        <FeatureBlock 
           title="Traffic Management System"
           desc="Optimizes traffic flow by reducing congestion and coordinating signals across the city using AI."
           points={[
             "Coordination of traffic signals across the city using AI",
             "Automatic green-corridor for emergency/VIP vehicles",
             "AI is always auto learning and improving",
             "Can be integrated with existing traffic lights"
           ]}
           stat={{ val: "42% ↓", label: "Reduction in total wait-time" }}
        />

        {/* 1.2 Traffic Violation System */}
        <FeatureBlock 
           title="Traffic Violation System"
           desc="Automatically detects traffic violations and sends proof/payment links to the violator's mobile."
           points={[
             "AI Driven Challan Collection App for authorities",
             "Reduces traffic violations over time",
             "Night vision enabled detection",
             "Violation proof sent automatically"
           ]}
           stat={{ val: "95% +", label: "Accuracy", sub: "1000+ Violations/Day" }}
           align="right"
        />

        {/* 1.3 Toxic Emissions */}
        <FeatureBlock 
           title="Reduction in Toxic Emissions"
           desc="Direct reduction in idle time at junctions leads to massive environmental benefits."
           points={[
             "Reduction in idle time at junctions",
             "Reduction in fuel expenses for commuters",
             "Healthier air quality for citizens"
           ]}
           stat={{ val: "200 Tons", label: "Toxic emissions reduced/day" }}
        />

        {/* 1.4 Dashboard & App */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <SubFeatureCard 
                title="AI Ways Online Dashboard"
                icon={<BarChart3 />}
                items={[
                    "Control traffic signals remotely",
                    "View of all traffic violations",
                    "Traffic and violation analytics",
                    "Customisable user authentication"
                ]}
            />
            <SubFeatureCard 
                title="AI Driven Challan Collection"
                icon={<Smartphone />}
                items={[
                    "Live location of vehicles with unpaid violations nearby",
                    "AI driven prompts to collect unpaid challans",
                    "Real-time update on traffic violations",
                    "Smart and effective collection strategy"
                ]}
            />
        </div>
      </section>


      {/* =========================================================
          SECTION 2: SECURITY
         ========================================================= */}
      <section className="mb-40 border-t border-white/10 pt-20">
        <SectionHeader title="AI Driven Integrated Security Platform" icon={<Shield />} color="text-purple-400" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SubFeatureCard 
                title="Crime Detection"
                icon={<AlertTriangle />}
                desc="AI automatically detects suspicious/violent activities."
                items={[
                    "Real-time alerts",
                    "Detects: violence, theft, harassment",
                    "Instant notification to command center"
                ]}
            />
             <SubFeatureCard 
                title="Criminal Detection"
                icon={<Eye />}
                desc="Detects people of interest and alerts authorities."
                items={[
                    "Real-time intelligence of suspected criminals",
                    "Tracks places visited and people met",
                    "Change in pattern detection",
                    "Highly customisable intelligence parameters"
                ]}
            />
             <SubFeatureCard 
                title="Women Safety"
                icon={<Lock />}
                desc="Specialized models trained to detect harassment."
                items={[
                    "AI automatically detects suspicious/violent activities",
                    "Real-time alerts for immediate response",
                    "Detects stalking or distress signals"
                ]}
            />
             <SubFeatureCard 
                title="Intrusion Detection"
                icon={<UserXIcon />} // Custom icon below
                desc="Perimeter security for sensitive zones."
                items={[
                    "Registers users (temporary or permanent)",
                    "Alerts authorities if unauthorised person detected",
                    "Real-time tracking of unauthorised people"
                ]}
            />
        </div>
      </section>


      {/* =========================================================
          SECTION 3: TOURISM
         ========================================================= */}
      <section className="mb-20 border-t border-white/10 pt-20">
        <SectionHeader title="AI Driven Tourism Platform" icon={<MapPin />} color="text-green-400" />

        <div className="flex flex-col md:flex-row gap-12">
            {/* Authority Platform */}
            <div className="md:w-1/2 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-800 rounded-lg text-green-400"><Users /></div>
                    <h3 className="text-2xl font-bold">For Authorities</h3>
                </div>
                <ul className="space-y-4">
                    <ListItem text="Registers and tracks tourists in sensitive areas" />
                    <ListItem text="Issuing tickets/permits to restricted areas" />
                    <ListItem text="Real-time demographics and analytics" />
                    <ListItem text="Tourism related vendor management" />
                </ul>
            </div>

            {/* Tourist App */}
            <div className="md:w-1/2 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-800 rounded-lg text-green-400"><Ticket /></div>
                    <h3 className="text-2xl font-bold">App for Tourists</h3>
                </div>
                <ul className="space-y-4">
                    <ListItem text="Online booking of tickets" />
                    <ListItem text="Online application and approvals of permits" />
                    <ListItem text="Access to call center" />
                    <ListItem text="Digital Tourist guide" />
                </ul>
            </div>
        </div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function SectionHeader({ title, icon, color }: any) {
    return (
        <div className="flex items-center gap-4 mb-12">
            <div className={`p-4 bg-slate-900 rounded-2xl border border-slate-800 ${color}`}>
                {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
    )
}

function FeatureBlock({ title, desc, points, stat, align }: any) {
    return (
        <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center mb-24`}
        >
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-slate-400 text-lg mb-6">{desc}</p>
                <ul className="space-y-3">
                    {points.map((p: string, i: number) => <ListItem key={i} text={p} />)}
                </ul>
            </div>
            
            {/* Stat Box */}
            <div className="md:w-1/2 w-full">
                <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl flex flex-col items-center justify-center text-center h-[250px] hover:border-cyan-500/30 transition-colors">
                    <div className="text-6xl font-black text-cyan-400 mb-2">{stat.val}</div>
                    <div className="text-white font-bold text-xl mb-1">{stat.label}</div>
                    {stat.sub && <div className="text-slate-500 text-sm uppercase">{stat.sub}</div>}
                </div>
            </div>
        </motion.div>
    )
}

function SubFeatureCard({ title, icon, desc, items }: any) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="text-cyan-400">{icon}</div>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            {desc && <p className="text-slate-400 mb-6 text-sm">{desc}</p>}
            <ul className="space-y-3">
                {items.map((item: string, i: number) => <ListItem key={i} text={item} />)}
            </ul>
        </motion.div>
    )
}

function ListItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-slate-300">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 shrink-0" />
            <span className="leading-relaxed">{text}</span>
        </li>
    )
}

function UserXIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-x"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" x2="23" y1="8" y2="13"/><line x1="23" x2="18" y1="8" y2="13"/></svg>
    )
}