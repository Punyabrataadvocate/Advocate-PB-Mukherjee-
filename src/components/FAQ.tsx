import { motion } from 'motion/react';

export default function FAQ() {
  const faqs = [
    { q: "Where does Advocate Punyabrata Mukherjee practice?", a: "Advocate Punyabrata Mukherjee Mukhopadhyay practices at the Alipore Judge's Court (Bar Library No. 11) and the Calcutta High Court in Kolkata, West Bengal." },
    { q: "What are the office hours?", a: "The chamber is available Daily from 9:00 AM to 9:00 PM including weekends. Contact: +91 9804 102281." },
    { q: "What legal services are provided?", a: "Property deed drafting, civil litigation, criminal cases, family law, divorce, cheque bounce cases, bail applications, accident claims (MACT), DRT, SARFAESI, IBC/NCLT, consumer cases, arbitration, and property registration." },
    { q: "Where is the chamber located?", a: "Tollygunge, Kolkata – 700033, West Bengal, India. Near Alipore Judge's Court." },
    { q: "Since when has Advocate Punyabrata Mukherjee been practicing?", a: "Advocate Punyabrata Mukherjee Mukhopadhyay has been providing legal services since 2003, enrolled under the Bar Council of West Bengal." },
    { q: "Is a free case evaluation available?", a: "Yes. Call +91 9804 102281 or fill the contact form on this website for a free initial case evaluation. Available Daily 9 AM to 9 PM." }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-transparent" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[12px] tracking-[0.6em] uppercase text-accent font-black mb-6">Common Questions</p>
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-black leading-tight mb-12">
            Legal <br />
            <span className="italic text-accent font-black">Clarifications</span>
          </h2>
          <div className="w-32 h-2 bg-accent rounded-full shadow-lg" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, rotateX: 5, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-2 border-border p-10 rounded-[2.5rem] hover:border-accent transition-all duration-500 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-[0_30px_80px_rgba(133,100,4,0.15)] perspective-2000"
            >
              <h3 className="font-serif text-2xl font-black text-accent mb-6 leading-tight">{faq.q}</h3>
              <p className="text-lg text-black font-bold leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
