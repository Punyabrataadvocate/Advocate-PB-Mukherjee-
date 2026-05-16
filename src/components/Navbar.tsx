import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Practice', href: '#practice' },
    { name: 'Location', href: '#map' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-8",
          isScrolled 
            ? "bg-black/90 backdrop-blur-md py-4 shadow-2xl" 
            : "bg-transparent py-0"
        )}
      >
        <a href="#" className="flex items-center gap-3 group">
          <div className={cn(
            "p-3 rounded-xl transition-all duration-500",
            isScrolled ? "bg-accent text-white" : "bg-black text-white"
          )}>
            <Scale className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif text-2xl font-black tracking-tight transition-colors duration-500",
              isScrolled ? "text-white" : "text-black"
            )}>
              MUKHERJEE
            </span>
            <span className={cn(
              "text-[9px] tracking-[0.4em] uppercase transition-colors duration-500 font-black",
              isScrolled ? "text-white/60" : "text-accent"
            )}>
              Legal Counsel
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-[12px] tracking-[0.3em] uppercase font-black hover:text-accent transition-colors",
                isScrolled ? "text-white/80" : "text-black"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919804102281"
            className={cn(
              "flex items-center gap-3 px-10 py-5 rounded-full font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-500 shadow-xl",
              isScrolled 
                ? "bg-accent text-white hover:bg-white hover:text-black" 
                : "bg-black text-white hover:bg-accent"
            )}
          >
            <Phone className="w-4 h-4" />
            +91 9804102281
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"
          )}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 bg-black text-white p-10 rounded-[2rem] shadow-2xl border border-white/10 z-40"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-[0.3em] uppercase font-black hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+919804102281"
                className="bg-accent text-white py-5 rounded-2xl font-black text-sm tracking-[0.3em] uppercase"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
