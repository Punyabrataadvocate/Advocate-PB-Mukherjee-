import { motion } from 'motion/react';
import { User, Library, Landmark, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <User />, label: "Expert Counsel", desc: "Enrolled in Bar Council of West Bengal, serving clients with distinction since 2003." },
    { icon: <Library />, label: "Wide Experience", desc: "Deep expertise in Alipore Judge's Court, Calcutta High Court, and other legal forums." },
    { icon: <Landmark />, label: "Strategic Focus", desc: "Specialized in property litigation, complex civil disputes, and criminal defense." },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] tracking-[0.6em] uppercase text-accent font-black mb-6">Profile</p>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-black leading-tight mb-12">
              Legal <br />
              <span className="italic text-accent font-black">Heritage</span>
            </h2>
            <div className="w-32 h-2 bg-accent rounded-full shadow-lg mb-16" />
            
            <div className="space-y-10">
              <p className="font-serif text-2xl md:text-3xl text-black leading-relaxed font-bold">
                Advocate Punyabrata Mukherjee (Mukhopadhyay) provides comprehensive legal solutions grounded in over two decades of professional experience.
              </p>
              <p className="text-xl text-black/70 leading-relaxed font-medium">
                Practicing primarily at the Alipore Judge's Court and the Calcutta High Court, his career is built on a foundation of rigorous strategy, academic excellence, and an unwavering commitment to client success. From complex property documentations to critical criminal representations, his multi-disciplinary approach ensures every case receives the highest level of legal scrutiny.
              </p>
            </div>

            <div className="mt-16 grid gap-6">
              {["Member of Alipore Bar Association", "Senior Legal Consultant", "Specialist in Property Law", "Civil & Criminal Trial Expert"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-black font-black text-[12px] tracking-[0.2em] uppercase">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8f7f4] p-10 border-4 border-black rounded-[3rem] shadow-xl hover:bg-black hover:text-white group transition-all duration-500"
              >
                <div className="text-accent mb-6 transform group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <h3 className="font-serif text-3xl font-black mb-4">{item.label}</h3>
                <p className="text-lg opacity-70 font-bold leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
