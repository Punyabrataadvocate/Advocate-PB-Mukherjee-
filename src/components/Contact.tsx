import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, title: 'Chamber Address', content: 'Tollygunge, Kolkata – 700033' },
    { icon: <Phone className="w-5 h-5" />, title: 'Phone', content: '+91 9804 102281', href: 'tel:+919804102281' },
    { icon: <Mail className="w-5 h-5" />, title: 'Email', content: 'mukherjipb@gmail.com', href: 'mailto:mukherjipb@gmail.com' },
    { icon: <Clock className="w-5 h-5" />, title: 'Office Hours', content: 'Daily — 9:00 AM to 9:00 PM' },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[12px] tracking-[0.6em] uppercase text-accent font-black mb-6">Get In Touch</p>
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-black leading-tight mb-12">
            Contact & <span className="italic text-accent font-black">Consultation</span>
          </h2>
          <div className="w-32 h-2 bg-accent rounded-full shadow-lg" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            {contactInfo.map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 15 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start group"
              >
                <div className="w-16 h-16 bg-white/60 backdrop-blur-sm border-2 border-border flex items-center justify-center text-accent shrink-0 rounded-2xl shadow-xl group-hover:bg-black group-hover:text-white transition-all duration-500">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-[12px] tracking-[0.4em] uppercase text-accent mb-3 font-black">{info.title}</h4>
                  {info.href ? (
                    <a href={info.href} className="font-serif text-2xl md:text-3xl text-black hover:text-accent transition-colors font-black">
                      {info.content}
                    </a>
                  ) : (
                    <p className="font-serif text-2xl md:text-3xl text-black leading-relaxed font-black">
                      {info.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md border-4 border-black p-10 md:p-16 relative rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
          >
            <h3 className="font-serif text-4xl md:text-5xl font-black text-black mb-6">Free Case Evaluation</h3>
            <p className="font-serif text-xl text-black font-bold mb-12 leading-relaxed">
              Fill in your details and Advocate Punyabrata Mukherjee will get back to you shortly for a professional consultation.
            </p>

            {status === 'success' ? (
              <div 
                role="status"
                aria-live="polite"
                className="bg-accent/10 border-4 border-accent p-10 rounded-3xl text-black text-center font-serif text-2xl mb-10 shadow-inner font-black"
              >
                ✅ Thank you! Your inquiry has been received. We will contact you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="sr-only">Your Full Name</label>
                  <input 
                    id="full-name"
                    type="text" 
                    placeholder="Your Full Name *" 
                    required 
                    aria-required="true"
                    className="w-full p-6 bg-white border-2 border-border text-black font-serif text-xl focus:border-accent outline-none transition-all rounded-2xl shadow-inner font-bold"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder="Phone Number *" 
                      required 
                      aria-required="true"
                      className="w-full p-6 bg-white border-2 border-border text-black font-serif text-xl focus:border-accent outline-none transition-all rounded-2xl shadow-inner font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-6 bg-white border-2 border-border text-black font-serif text-xl focus:border-accent outline-none transition-all rounded-2xl shadow-inner font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="practice-area" className="sr-only">Select Practice Area</label>
                  <select 
                    id="practice-area"
                    defaultValue="" 
                    className="w-full p-6 bg-white border-2 border-border text-black font-serif text-xl focus:border-accent outline-none transition-all rounded-2xl shadow-inner font-bold"
                  >
                    <option value="" disabled>Select Practice Area</option>
                    <option>Deeds & Documentation</option>
                    <option>Civil Litigation</option>
                    <option>Family Law</option>
                    <option>Criminal Cases</option>
                    <option>Bail Application</option>
                    <option>Consumer Cases</option>
                    <option>Real Estate / Registration</option>
                    <option>Arbitration</option>
                    <option>Accident Claims (MACT)</option>
                    <option>Employee Compensation</option>
                    <option>Banking / DRT / SARFAESI / IBC</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="sr-only">Briefly describe your legal matter</label>
                  <textarea 
                    id="message"
                    placeholder="Briefly describe your legal matter *" 
                    rows={4} 
                    required 
                    aria-required="true"
                    className="w-full p-6 bg-white border-2 border-border text-black font-serif text-xl focus:border-accent outline-none transition-all rounded-2xl shadow-inner font-bold resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-8 bg-black text-white font-black text-sm tracking-[0.4em] uppercase hover:bg-accent transition-all duration-500 flex items-center justify-center gap-4 rounded-2xl shadow-2xl transform hover:-translate-y-2"
                >
                  <Send className="w-6 h-6" aria-hidden="true" />
                  Submit Inquiry
                </button>
              </form>
            )}

            <div className="mt-16 flex flex-wrap gap-6">
              <a href="tel:+919804102281" className="flex-1 py-5 bg-black text-white text-center text-[12px] tracking-[0.3em] uppercase font-black hover:bg-accent transition-all duration-500 rounded-2xl shadow-xl">
                📞 Call Now
              </a>
              <a href="https://wa.me/919804102281" target="_blank" rel="noopener noreferrer" className="flex-1 py-5 bg-white border-4 border-black text-black text-center text-[12px] tracking-[0.3em] uppercase font-black hover:bg-black hover:text-white transition-all duration-500 rounded-2xl shadow-xl">
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
