import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, Gavel } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Lady Justice Watermark Background */}
      <div className="absolute inset-0 bg-watermark pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-[12px] tracking-[0.5em] md:tracking-[1em] uppercase text-black font-black mb-12 flex items-center gap-4 flex-wrap justify-center">
            <span>Established 2003</span>
            <span className="w-2 h-2 bg-accent rounded-full hidden md:inline-block" />
            <span>Alipore Judge's Court & Other Courts</span>
          </p>
          
          <h1 className="font-serif text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] font-black text-black mb-12 tracking-tight">
            Advocate <br />
            <span className="text-accent italic">Punyabrata</span> <br />
            Mukherjee
            <span className="block text-black mt-4">Mukhopadhyay</span>
          </h1>

          <div className="w-48 h-3 bg-accent/80 rounded-full mb-16 shadow-lg" />

          <p className="font-serif text-2xl md:text-3xl text-black/90 max-w-4xl mx-auto mb-20 leading-relaxed font-bold">
            Legal counsel since 2003. Specializing in Civil, Criminal, and Property Law with a focus on meticulous documentation and strategic litigation.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-2xl mx-auto font-sans">
            <a 
              href="#practice" 
              className="w-full md:w-auto px-16 py-10 bg-black text-white text-[11px] tracking-[0.4em] uppercase font-black hover:bg-accent transition-all duration-500 rounded-full shadow-2xl flex items-center justify-center gap-4 group"
            >
              View Practice Areas
            </a>
            <a 
              href="#contact" 
              className="w-full md:w-auto px-16 py-10 bg-white border-4 border-black text-black text-[11px] tracking-[0.4em] uppercase font-black hover:bg-black hover:text-white transition-all duration-500 rounded-full shadow-xl flex items-center justify-center gap-4"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mx-auto">
            <div className="bg-white border-2 border-border p-12 rounded-[3.5rem] shadow-xl transform hover:-translate-y-2 transition-all duration-500">
               <h3 className="font-serif text-7xl font-black text-black mb-4 tracking-tighter">20+</h3>
               <p className="text-[12px] tracking-[0.4em] uppercase text-accent font-black">Years of Practice</p>
            </div>
            <div className="bg-white border-2 border-border p-12 rounded-[3.5rem] shadow-xl transform hover:-translate-y-2 transition-all duration-500">
               <h3 className="font-serif text-7xl font-black text-black mb-4 tracking-tighter">10k+</h3>
               <p className="text-[12px] tracking-[0.4em] uppercase text-accent font-black">Clients Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
