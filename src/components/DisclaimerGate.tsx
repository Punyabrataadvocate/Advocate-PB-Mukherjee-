import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

interface DisclaimerGateProps {
  onAccept: () => void;
}

export default function DisclaimerGate({ onAccept }: DisclaimerGateProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-6 overflow-y-auto">
      <div className="absolute inset-0 bg-watermark pointer-events-none opacity-[0.03]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full bg-white border-2 border-black p-8 md:p-16 rounded-[3rem] shadow-2xl relative z-10"
      >
        <div className="flex justify-center mb-10">
          <div className="p-4 bg-black text-white rounded-2xl">
            <Scale className="w-12 h-12" />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-black text-black text-center mb-10 tracking-tight">
          LEGAL <span className="italic text-accent">DISCLAIMER</span>
        </h2>

        <div className="space-y-6 font-serif text-lg md:text-xl text-black/80 text-justify mb-12 leading-relaxed h-[300px] overflow-y-auto pr-4 custom-scrollbar">
          <p>
            As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. 
            By clicking on the "I AGREE" button below, the user acknowledges the following:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</li>
            <li>The user wishes to gain more information about us for his/her own information and use.</li>
            <li>The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site would not create any lawyer-client relationship.</li>
            <li>The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advisement.</li>
          </ul>
          <p>
            We are not liable for any consequence of any action taken by the user relying on material/information provided under this website. 
            In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={onAccept}
            className="w-full py-8 bg-black text-white text-xs tracking-[0.4em] uppercase font-black hover:bg-accent transition-all duration-500 rounded-full shadow-2xl"
          >
            I Agree & Enter Website
          </button>
          <a 
            href="https://www.google.com" 
            className="text-center text-[10px] tracking-[0.2em] uppercase text-black/40 font-black hover:text-black transition-colors"
          >
            I Disagree / Exit
          </a>
        </div>
      </motion.div>
    </div>
  );
}
