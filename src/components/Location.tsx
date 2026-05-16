import { motion } from 'motion/react';
import { MapPin, Car, Train, Landmark, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function Location() {
  const mapsUrl = "https://maps.app.goo.gl/2h5GfiXHc5SXkFdK8";

  return (
    <section id="map" className="py-32 px-6 bg-transparent border-t-4 border-black" aria-label="Our Location">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[12px] tracking-[0.6em] uppercase text-accent font-black mb-6">Find Us</p>
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-black leading-tight mb-12">
            Our <span className="italic text-accent font-black">Location</span>
          </h2>
          <div className="w-32 h-2 bg-accent rounded-full shadow-lg" aria-hidden="true" />
          <p className="font-serif text-2xl md:text-3xl text-black mt-12 font-black leading-relaxed">
            Tollygunge, Kolkata – 700033 · Near Alipore Judge's Court
          </p>
        </motion.div>

        <div className="border-4 border-black overflow-hidden bg-white/80 backdrop-blur-md rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
          <div className="grid lg:grid-cols-3">
            {/* Left Info */}
            <div className="lg:col-span-2 p-10 md:p-16 border-b lg:border-b-0 lg:border-r-4 border-black">
              <div className="text-center lg:text-left mb-16">
                <MapPin className="w-20 h-20 text-accent mx-auto lg:mx-0 mb-8" aria-hidden="true" />
                <h3 className="font-serif text-4xl md:text-5xl font-black text-black mb-6">Mukherjee Legal Counsel</h3>
                <p className="font-serif text-2xl md:text-3xl text-black font-bold leading-relaxed">
                  Tollygunge<br />
                  Kolkata – 700033, West Bengal<br />
                  <span className="text-lg italic text-accent font-black block mt-4">Near Alipore Judge's Court</span>
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: <Car className="w-8 h-8" aria-hidden="true" />, title: 'By Car / Auto', desc: 'Via Diamond Harbour Road toward Alipore Court' },
                  { icon: <Train className="w-8 h-8" aria-hidden="true" />, title: 'Nearest Metro', desc: 'Tollygunge / Mahanayak Uttam Kumar Station' },
                  { icon: <Landmark className="w-8 h-8" aria-hidden="true" />, title: 'Landmark', desc: "Alipore Judge's Court Bar Library No. 11" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/60 border-2 border-border p-8 text-center rounded-2xl shadow-lg hover:border-accent transition-colors duration-300">
                    <div className="text-accent flex justify-center mb-6">{item.icon}</div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-black mb-3 font-black">{item.title}</p>
                    <p className="font-serif text-base text-black leading-tight font-bold">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="flex items-center gap-4 px-10 py-5 bg-black text-white text-xs tracking-[0.3em] uppercase font-black hover:bg-accent transition-all duration-500 rounded-full shadow-2xl transform hover:-translate-y-2"
                >
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  Open in Google Maps
                </a>
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to our location"
                  className="flex items-center gap-4 px-10 py-5 border-4 border-black text-black text-xs tracking-[0.3em] uppercase font-black hover:bg-black hover:text-white transition-all duration-500 rounded-full shadow-xl transform hover:-translate-y-2"
                >
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right QR Code */}
            <div className="p-10 md:p-16 flex flex-col items-center justify-center bg-accent/5 relative overflow-hidden">
              <motion.div 
                whileHover={{ rotateY: 20, rotateX: -20, scale: 1.15 }}
                className="bg-black p-8 mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] rounded-[2.5rem] perspective-2000"
              >
                <div className="bg-white p-6 rounded-2xl">
                  <QRCodeSVG 
                    value={mapsUrl} 
                    size={200}
                    level="H"
                    includeMargin={true}
                    aria-label="QR code for Google Maps location"
                  />
                </div>
              </motion.div>
              <p className="text-[12px] tracking-[0.4em] uppercase text-black font-black text-center mb-4">
                Scan for Directions
              </p>
              <p className="font-serif text-lg text-black text-center italic font-bold max-w-[240px] leading-relaxed">
                Scan this QR code to open the location instantly on your mobile device.
              </p>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="bg-black border-t-4 border-accent px-10 py-8 flex flex-wrap justify-center gap-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-white border-r-2 border-accent/30 pr-12 last:border-0 font-black">
              📞 +91 9804 102281
            </div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-white border-r-2 border-accent/30 pr-12 last:border-0 font-black">
              ⏰ Daily 9 AM – 9 PM
            </div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-accent font-black">
              punyabratamukherjiadvocate.unaux.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
