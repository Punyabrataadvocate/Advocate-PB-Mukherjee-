export default function Footer() {
  const keywords = [
    "Property Lawyer Kolkata", "Advocate Alipore Court", "Deed Drafting Kolkata",
    "Criminal Lawyer Kolkata", "Civil Advocate Kolkata", "Divorce Lawyer Kolkata",
    "Cheque Bounce Lawyer Kolkata", "Bail Lawyer Kolkata", "DRT Advocate Kolkata",
    "SARFAESI Advocate Kolkata", "IBC NCLT Advocate Kolkata", "Accident Claim Lawyer Kolkata",
    "Consumer Case Lawyer Kolkata", "Calcutta High Court Advocate", "Will Drafting Kolkata",
    "Property Registration Kolkata"
  ];

  return (
    <footer className="bg-transparent border-t-4 border-black py-32 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="font-serif text-4xl md:text-5xl text-black font-black mb-8">
          Advocate Punyabrata Mukherjee / Mukhopadhyay
        </div>
        
        <p className="text-xl text-black mb-16 max-w-4xl mx-auto leading-relaxed font-black">
          Tollygunge, Kolkata – 700033 &nbsp;|&nbsp; 
          <a href="tel:+919804102281" aria-label="Call Advocate Punyabrata Mukherjee" className="text-accent hover:text-black transition-colors font-black">+91 98041 02281</a> &nbsp;|&nbsp; 
          <a href="mailto:mukherjipb@gmail.com" aria-label="Email Advocate Punyabrata Mukherjee" className="text-accent hover:text-black transition-colors font-black">mukherjipb@gmail.com</a>
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-20 max-w-6xl mx-auto">
          {keywords.map((word, i) => (
            <a 
              key={i} 
              href="#practice" 
              className="text-[12px] text-black/60 hover:text-accent transition-colors font-black tracking-[0.2em] uppercase"
            >
              {word}
            </a>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-[11px] text-black/50 leading-relaxed italic border-t-2 border-border pt-12 font-bold text-justify">
            Disclaimer: This website is governed by the Bar Council of India Rules. The contents herein do not constitute solicitation, advertisement, or inducement in any form. All information is provided for general informational purposes only and does not constitute legal advice. An advocate-client relationship is not created by visiting this website.
          </p>
        </div>

        <div className="text-[12px] tracking-[0.4em] uppercase text-black font-black bg-white/40 backdrop-blur-sm inline-block px-10 py-4 rounded-full border-2 border-border shadow-lg">
          © {new Date().getFullYear()} Advocate Punyabrata Mukherjee / Mukhopadhyay · Alipore Judge's Court · Other Courts · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
