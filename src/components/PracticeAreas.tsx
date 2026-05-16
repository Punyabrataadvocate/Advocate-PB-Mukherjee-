import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Users, Scale, ShieldAlert, Landmark, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function PracticeAreas() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const practices = [
    { 
      icon: <FileText />, 
      title: "DEEDS & DOCUMENTATION", 
      desc: "Expert drafting and registration of critical legal documents.",
      details: [
        "Sale Deeds & Gift Deeds",
        "Wills & Codicils",
        "Power of Attorney",
        "Trust Deeds",
        "Partnership Deeds",
        "Lease & Rent Agreements"
      ]
    },
    { 
      icon: <Users />, 
      title: "CIVIL & FAMILY", 
      desc: "Strategic representation in property and matrimonial matters.",
      details: [
        "Property Partition Suits",
        "Injunction & Stay Orders",
        "Divorce & Maintenance",
        "Child Custody Cases",
        "Succession Certificates",
        "Title Investigation Reports"
      ]
    },
    { 
      icon: <ShieldAlert />, 
      title: "CRIMINAL DEFENSE", 
      desc: "Robust representation in all tiers of criminal proceedings.",
      details: [
        "Anticipatory & Regular Bail",
        "Criminal Trials & Appeals",
        "Cheque Bounce (Sec 138 NI Act)",
        "Cyber Crime Defense",
        "Matrimonial Criminal Cases",
        "Police Station Procedures"
      ]
    },
    { 
      icon: <Landmark />, 
      title: "BANKING & RECOVERY", 
      desc: "Specialized financial legal strategy and recovery processes.",
      details: [
        "DRT & DRAT Litigation",
        "SARFAESI Act Matters",
        "Insolvency (IBC/NCLT)",
        "Loan Recovery Suits",
        "Consumer Forum Cases",
        "Arbitration Proceedings"
      ]
    },
  ];

  return (
    <section id="practice" className="py-32 px-6 bg-transparent relative overflow-hidden">
      {/* Lady Justice Watermark for section */}
      <div className="absolute inset-0 bg-watermark pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-serif text-6xl md:text-9xl font-black text-black leading-tight mb-8 tracking-tighter">
            Expertise <br />
            <span className="text-black italic">Across</span> <br />
            <span className="text-accent italic">Legal Domains</span>
          </h2>
          <div className="w-48 h-3 bg-accent rounded-full shadow-lg" />
          <p className="mt-8 font-serif text-xl font-bold text-black/60 italic">Tap any field to view detailed services</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveTab(activeTab === i ? null : i)}
              className={cn(
                "p-10 rounded-[3rem] border-4 transition-all duration-500 cursor-pointer flex flex-col group relative overflow-hidden",
                i % 2 === 0 
                  ? "bg-black text-white border-black" 
                  : "bg-white text-black border-accent",
                activeTab === i ? "scale-105 shadow-2xl z-20" : "hover:scale-[1.02]"
              )}
            >
              <div className={cn(
                "w-16 h-16 flex items-center justify-center mb-8 shrink-0 transition-transform duration-500 group-hover:scale-110",
                i % 2 === 0 ? "text-accent" : "text-black"
              )}>
                {item.icon}
              </div>

              <h3 className="font-serif text-2xl font-black mb-6 leading-tight tracking-[0.05em]">
                {item.title}
              </h3>

              <p className={cn(
                "text-base font-bold leading-relaxed mb-8 transition-opacity duration-500",
                activeTab === i ? "opacity-0 h-0 overflow-hidden" : "opacity-70"
              )}>
                {item.desc}
              </p>

              <AnimatePresence>
                {activeTab === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className={cn("w-4 h-4 shrink-0", i % 2 === 0 ? "text-accent" : "text-black")} />
                        <span className="text-sm font-black tracking-wide text-left">{detail}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={cn(
                "mt-auto pt-6 flex justify-center transition-transform duration-500",
                activeTab === i ? "rotate-180" : ""
              )}>
                <ChevronDown className={cn("w-6 h-6", i % 2 === 0 ? "text-accent/50" : "text-black/30")} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
