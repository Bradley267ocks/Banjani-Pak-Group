/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Package, 
  Printer, 
  Palette, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Layers,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const LOGO_IMAGE = "https://i.ibb.co/gLTnrBBQ/IMG-20260421-WA0010.jpg";

const PRODUCT_IMAGES = [
  "https://i.ibb.co/wZj4rwpK/IMG-20260421-WA0010.jpg",
  "https://i.ibb.co/pBPpg23F/IMG-20260421-WA0007.jpg",
  "https://i.ibb.co/V08qTzdH/IMG-20260421-WA0008.jpg",
  "https://i.ibb.co/20VxFFCM/IMG-20260421-WA0006.jpg",
  "https://i.ibb.co/d0cr4W7V/IMG-20260421-WA0002.jpg",
  "https://i.ibb.co/vCpVGTH5/IMG-20260421-WA0005.jpg",
  "https://i.ibb.co/ksP4ywpy/IMG-20260421-WA0000.jpg"
];

const USPs = [
  {
    icon: Printer,
    title: "Digital Definition",
    description: "High definition digital printing of your logo and unique brand colors with superior clarity."
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Establish a strong visual presence with our bespoke branded bucket designs."
  },
  {
    icon: ShieldCheck,
    title: "Easter Buster",
    description: "Delivering world-class designs to enhance your market appearance and brand image."
  },
  {
    icon: Calendar,
    title: "Special Editions",
    description: "Exclusive prints for Black Friday and Christmas Hamper campaigns to drive seasonal sales."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-light text-brand-text selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-light/95 backdrop-blur-md border-b border-brand-primary/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-20 md:h-28 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 sm:h-14 md:h-24 w-auto bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-1.5 shadow-sm overflow-hidden border border-brand-primary/10">
              <img 
                src={LOGO_IMAGE} 
                alt="Banjani Pak Logo" 
                className="h-full w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
            <a href="#showcase" className="hover:text-brand-primary transition-colors">Showcase</a>
            <a href="#services" className="hover:text-brand-primary transition-colors">Services</a>
            <a href="#contact" className="bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-brand-secondary transition-all duration-300">Inquiry</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-brand-primary/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">About</a>
                <a href="#showcase" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Showcase</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Services</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-primary text-white px-8 py-4 rounded-xl text-center">Inquiry</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-white">
        {/* Artistic Background Shape */}
        <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-brand-primary/5 skew-x-12 transform origin-top-right border-l border-brand-secondary/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-24 items-center relative z-10 w-full">
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-10 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: 48 }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="h-px bg-brand-primary flex-shrink-0" 
               />
               <span className="text-brand-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.6em] whitespace-normal sm:whitespace-nowrap">
                 Banjani Pak Group Excellence
               </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-black leading-[1.1] sm:leading-[0.9] mb-8 sm:mb-10 tracking-tight italic text-brand-dark">
              Agents of <br className="hidden sm:block"/>
              <span className="text-brand-primary font-serif not-italic">Change</span>
            </h1>

            <p className="text-lg sm:text-xl text-brand-text/80 font-medium max-w-lg mb-10 sm:mb-14 leading-relaxed tracking-tight">
              We translate world-class visual identities onto 20L rigid plastic packaging. Redefining industrial print with bespoke digital precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="#showcase" className="px-8 sm:px-14 py-4 sm:py-6 bg-brand-primary text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-secondary transition-all duration-500 shadow-2xl shadow-brand-primary/20 hover:-translate-y-1 text-center">
                View Collection
              </a>
              <a href="#contact" className="px-8 sm:px-14 py-4 sm:py-6 border border-brand-primary text-brand-primary rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-primary hover:text-white transition-all duration-500 text-center">
                Start Project
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 relative order-1 lg:order-2 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Image Frame - Aspect Ratio Adaptable */}
              <div className="relative bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-4 sm:p-6 shadow-2xl shadow-brand-dark/10 border border-brand-primary/10 transform-gpu transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://i.ibb.co/ksP4ywpy/IMG-20260421-WA0000.jpg" 
                  alt="Industrial Perfection" 
                  className="w-full h-auto rounded-[1.5rem] sm:rounded-[2rem] object-contain block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Data Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-right-8 bg-brand-primary p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border border-brand-secondary/20 z-20 text-white"
              >
                 <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-brand-light/80 mb-2">Unit Capacity</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black tracking-tighter">20L</span>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
           <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
           <ChevronDown className="w-4 h-4 animate-bounce text-brand-brown" />
        </div>
      </section>

      {/* Feature Split Section - Image refined below hero */}
      <section id="about" className="py-20 sm:py-32 border-y border-brand-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-brand-light p-4 sm:p-8 flex items-center justify-center border border-brand-primary/5">
             <img 
               src={PRODUCT_IMAGES[4]} 
               alt="Digital Precision Detail" 
               className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-lg" 
               referrerPolicy="no-referrer" 
             />
          </div>
          <div className="px-2 sm:px-0">
            <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary mb-6 sm:mb-8" />
            <span className="text-brand-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Manufacturing Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 italic text-brand-dark">World-Class Digital Definition.</h2>
            <p className="text-brand-text/70 leading-loose mb-8 sm:mb-10 text-base sm:text-lg font-medium">
              Our advanced printing facilities in Springs allow us to render complex brand identities with absolute clarity. We don't just print; we craft visual identities on industrial canvases that command attention.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 border-t border-brand-primary/10 pt-8 sm:pt-10">
               <div>
                  <p className="text-2xl sm:text-3xl font-black text-brand-primary leading-none mb-2">20L</p>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-gray-med">Capacity Standard</p>
               </div>
               <div>
                  <p className="text-2xl sm:text-3xl font-black text-brand-primary leading-none mb-2">HD</p>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-gray-med">Print Quality</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section id="showcase" className="py-20 sm:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
             <div className="max-w-xl">
               <span className="text-brand-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Product Exhibition</span>
               <h2 className="text-4xl sm:text-5xl md:text-7xl font-black italic underline decoration-brand-secondary/30 underline-offset-8 text-brand-dark">Exclusive and <br className="hidden sm:block"/> Bespoke designs.</h2>
             </div>
             <p className="text-brand-text/60 text-sm max-w-xs leading-relaxed italic font-medium">A curated selection of our bespoke rigid printed plastic solutions.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {PRODUCT_IMAGES.slice(1, 6).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col gap-4 sm:gap-6"
              >
                <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white p-4 sm:p-6 shadow-xl border border-brand-primary/5 flex items-center justify-center group overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Showcase ${i}`} 
                    className="w-full h-auto object-contain transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="px-4 sm:px-6">
                   <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-2">Series {i + 1}</p>
                   <p className="font-bold text-brand-text uppercase tracking-tighter text-sm sm:text-base">Bespoke Print {i + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 sm:py-32 bg-brand-dark text-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
           <div className="text-center mb-16 sm:mb-24">
              <h2 className="text-4xl sm:text-5xl font-black italic mb-6">Industrial Propositions.</h2>
              <div className="w-20 h-1 bg-brand-primary mx-auto" />
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
             {USPs.map((usp, i) => (
               <div key={i} className="group p-8 sm:p-10 border border-white/10 rounded-[2rem] hover:bg-brand-primary hover:border-brand-primary transition-all duration-500">
                  <usp.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary group-hover:text-white mb-6 sm:mb-8 transition-colors" />
                  <h3 className="font-black text-lg sm:text-xl mb-4 italic text-white">{usp.title}</h3>
                  <p className="text-xs text-brand-gray-med group-hover:text-white/80 leading-relaxed font-medium transition-colors">
                    {usp.description}
                  </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Global Contact */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(56,104,144,0.15)] overflow-hidden border border-brand-primary/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10 md:p-16 border-b md:border-b-0 md:border-r border-brand-primary/10">
              <span className="text-brand-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Direct Communication</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-12 italic leading-tight text-brand-dark">Elevate your <br/> packaging today.</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-full flex-shrink-0 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-gray-med">Call Now</p>
                    <a href="tel:0768910189" className="text-base sm:text-lg font-black underline decoration-brand-primary hover:text-brand-primary transition-colors text-brand-text truncate block">076 891 0189</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-full flex-shrink-0 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-gray-med">Electronic Mail</p>
                    <a href="mailto:roger@banjanipg.co.za" className="text-base sm:text-lg font-black hover:text-brand-primary transition-colors italic text-brand-text truncate block">roger@banjanipg.co.za</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-full flex-shrink-0 flex items-center justify-center text-brand-primary">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-gray-med">Headquarters</p>
                    <p className="text-base sm:text-lg font-black text-brand-text">Springs, Gauteng</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 md:p-16 bg-brand-light/20 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black italic mb-6 sm:mb-8 text-brand-dark">Roger Mnguni</h3>
                <p className="text-sm text-brand-text/60 mb-8 sm:mb-10 leading-loose italic font-medium">
                  "Our goal is to redefine industrial packaging through artistic precision and world-class digital manufacturing."
                </p>
                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-primary/10 shadow-sm">
                   <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-brand-primary">Request Callback</p>
                   <input type="tel" placeholder="Your contact number" className="w-full bg-brand-light border-0 rounded-xl px-4 py-3 sm:py-4 text-sm focus:ring-2 focus:ring-brand-primary transition-all mb-4 text-brand-text" />
                   <button className="w-full bg-brand-primary text-white py-3 sm:py-4 rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20">
                     Submit Inquiry
                   </button>
                </div>
              </div>
              <p className="text-[9px] uppercase tracking-widest font-black text-brand-gray-med mt-10 md:mt-12">Banjani Pak Group (PTY) LTD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-primary/10 flex flex-col items-center gap-8 bg-brand-dark overflow-hidden">
        <div className="flex items-center gap-4 grayscale opacity-50 px-4">
          <div className="h-10 w-auto bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-1 border border-brand-primary/20 overflow-hidden">
            <img src={LOGO_IMAGE} alt="Banjani Pak Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white">Banjani Pak Group</span>
        </div>
        <p className="text-[9px] sm:text-[10px] font-medium text-brand-gray-med uppercase tracking-widest text-center px-4">
          © {new Date().getFullYear()} Banjani Pak Group. Gauteng Industrial Excellence.
        </p>
      </footer>
    </div>
  );
}


