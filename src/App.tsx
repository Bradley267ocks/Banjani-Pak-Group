
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  X,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  CheckCircle2
} from "lucide-react";

// --- CONSTANTS ---
export const LOGO_IMAGE = "https://i.ibb.co/gLTnrBBQ/IMG-20260421-WA0010.jpg";

export const PRODUCT_IMAGES = [
  "https://i.ibb.co/wZj4rwpK/IMG-20260421-WA0010.jpg",
  "https://i.ibb.co/pBPpg23F/IMG-20260421-WA0007.jpg",
  "https://i.ibb.co/V08qTzdH/IMG-20260421-WA0008.jpg",
  "https://i.ibb.co/20VxFFCM/IMG-20260421-WA0006.jpg",
  "https://i.ibb.co/d0cr4W7V/IMG-20260421-WA0002.jpg",
  "https://i.ibb.co/vCpVGTH5/IMG-20260421-WA0005.jpg",
  "https://i.ibb.co/ksP4ywpy/IMG-20260421-WA0000.jpg"
];

// FILTERED IMAGES (Removing Series 4 based on index 3 usually, but let's be safe and map them)
export const GALLERY_IMAGES = [
  { url: PRODUCT_IMAGES[0], title: "Exclusive Designs", desc: "Delivering world-class designs on Black Friday, Christmas Hamper and Easter Buster campaigns to drive seasonal sales." },
  { url: PRODUCT_IMAGES[2], title: "Industrial Grade", desc: "Durable and aesthetic 20L plastic buckets." },
  // Series 4 removed: { url: PRODUCT_IMAGES[3], ...}
  { url: PRODUCT_IMAGES[4], title: "Custom Precision", desc: "High-definition print for clear branding." },
  { url: PRODUCT_IMAGES[5], title: "Bespoke Solutions", desc: "Tailored to your promotional needs." },
  { url: PRODUCT_IMAGES[6], title: "Global Standard", desc: "World-class digital manufacturing excellence." },
];

export const SERVICES = [
  {
    icon: Printer,
    title: "Digital Definition",
    description: "We offer a high digital definition print of your logo and brand colours for maximum impact."
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "We create branded designs to establish a strong visual identity for your business in the market."
  },
  {
    icon: ShieldCheck,
    title: "Exclusive Designs",
    description: "Delivering world-class designs on 'Black Friday... Christmas Hamper and Easter Buster' campaigns to drive seasonal sales."
  },
  {
    icon: Calendar,
    title: "Exclusive Promotions",
    description: "We do exclusive and customised designs for Christmas Hampers, Black Friday, and Easter Buster promotions."
  }
];

// --- COMPONENTS ---

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-brand-primary/5 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 md:h-28 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="h-14 sm:h-18 md:h-20 w-auto bg-white rounded-xl flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-500">
            <img src={LOGO_IMAGE} alt="Banjani Pak Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-[11px] font-black uppercase tracking-[0.15em]">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-brand-primary transition-colors relative py-2 ${pathname === link.path ? 'text-brand-primary' : 'text-brand-text'}`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary" />
              )}
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-6 pl-6 border-l border-brand-primary/10">
            <a href="tel:0768910189" className="text-brand-dark hover:text-brand-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">076 891 0189</span>
            </a>
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-3.5 rounded-xl hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5">
              Inquiry
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href="tel:0768910189" className="p-2 text-brand-primary bg-brand-primary/5 rounded-full">
            <Phone className="w-5 h-5" />
          </a>
          <button className="p-2 text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-brand-primary/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6 text-[12px] font-black uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`hover:text-brand-primary transition-colors ${pathname === link.path ? 'text-brand-primary' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 text-white border-t border-brand-primary/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary/20 via-brand-primary to-brand-primary/20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 relative z-10">
        <div className="space-y-8 col-span-full lg:col-span-1">
          <div className="h-16 w-auto bg-white rounded-xl flex items-center justify-center p-1 self-start inline-block shadow-xl shadow-brand-primary/10 transition-transform hover:scale-105 duration-500">
            <img src={LOGO_IMAGE} alt="Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <p className="text-brand-gray-med font-medium leading-relaxed max-w-sm italic">
            Redefining industrial packaging through artistic precision and world-class digital manufacturing excellence for over a decade.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all border border-white/5">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Navigation</h4>
          <ul className="space-y-4 text-brand-gray-med text-xs font-black uppercase tracking-widest">
            {["Home", "About Us", "Products", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Capabilities</h4>
          <ul className="space-y-4 text-brand-gray-med text-xs font-black tracking-widest uppercase">
            <li>HD Digital Branding</li>
            <li>Bespoke Print Design</li>
            <li>Industrial Solutions</li>
            <li>Campaign Analysis</li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Direct Access</h4>
          <ul className="space-y-6 text-brand-gray-med text-sm font-bold tracking-widest">
            <li>
              <a href="tel:0768910189" className="flex items-center gap-4 hover:text-brand-primary transition-colors text-xl md:text-2xl font-black italic text-white group truncate">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                076 891 0189
              </a>
            </li>
            <li className="flex items-center gap-4 text-xs font-bold">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-brand-primary" />
              </div>
              rogerm@banjanipg.co.za
            </li>
            <li className="flex items-center gap-4 text-xs font-bold">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-brand-primary" />
              </div>
              Springs, Gauteng
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[9px] font-medium text-brand-gray-med tracking-[0.3em] uppercase text-center">
          © {new Date().getFullYear()} BANJANI PAK GROUP. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-8">
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-primary">Industrial Precision</span>
           <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-primary">Digital Artistry</span>
        </div>
      </div>
    </footer>
  );
};

// --- PAGES ---

const HomePage = () => (
  <main className="pt-20 md:pt-28 min-h-screen">
    {/* Hero Section */}
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-brand-primary/5 skew-x-0 md:skew-x-12 transform origin-top-right border-l border-brand-secondary/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-5 gap-12 lg:gap-20 items-center relative z-10 w-full py-12 md:py-20 lg:py-0">
        <motion.div 
          className="lg:col-span-3 space-y-8 md:space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <motion.div initial={{ width: 0 }} animate={{ width: 48 }} className="h-px bg-brand-primary" />
            <span className="text-brand-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Banjani Pak Group</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.1] italic text-brand-dark tracking-tight break-words">
            Agents of <br/>
            <span className="text-brand-primary font-serif not-italic">Change</span>
          </h1>

          <div className="space-y-6">
             <h2 className="text-lg md:text-2xl font-black uppercase tracking-[0.2em] text-brand-dark/80 max-w-2xl leading-snug">20L Custom-Branded Printed Buckets</h2>
             <p className="text-base md:text-xl text-brand-text/70 font-medium max-w-xl leading-relaxed">
               Premium rigid plastic bucket branding solutions that help your business stand out, sell more, and build stronger brand recognition.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="px-10 py-5 bg-brand-primary text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-brand-secondary transition-all hover:-translate-y-1 text-center">
              Get a Quote Today
            </Link>
            <Link to="/gallery" className="px-10 py-5 border-2 border-brand-primary text-brand-primary rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all text-center">
              View Our Designs
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2 relative mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="bg-white p-4 sm:p-10 rounded-[3rem] shadow-2xl border border-brand-primary/5 hover:scale-[1.02] transition-transform duration-700 relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <img 
               src="https://i.ibb.co/20VxFFCM/IMG-20260421-WA0006.jpg" 
               alt="Feature Product" 
               className="w-full h-auto rounded-[2rem] object-contain shadow-lg relative z-10" 
               referrerPolicy="no-referrer" 
             />
             <motion.div 
               className="absolute -bottom-4 -right-4 bg-brand-primary p-6 md:p-10 rounded-[2rem] text-white shadow-2xl z-20"
               whileHover={{ scale: 1.1, rotate: 5 }}
             >
               <span className="text-3xl md:text-5xl font-black italic">20L</span>
               <p className="text-[10px] uppercase font-black tracking-widest mt-1 opacity-80">Capacity</p>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Introduction Section */}
    <section className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-brand-dark leading-snug">
             We create high-quality custom printed 20L buckets designed to promote your brand with style and impact.
           </h3>
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 96 }}
             className="h-1.5 bg-brand-primary mx-auto rounded-full" 
           />
        </motion.div>
      </div>
    </section>

    {/* Why Businesses Choose Us */}
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {[
            { label: "Premium Print Quality", icon: Printer },
            { label: "Strong Brand Visibility", icon: Palette },
            { label: "Durable Materials", icon: ShieldCheck },
            { label: "Creative Designs", icon: Package },
            { label: "Reliable Service", icon: CheckCircle2 }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 md:p-10 bg-brand-light rounded-[2.5rem] border border-brand-primary/5 hover:border-brand-primary hover:shadow-xl transition-all group"
            >
               <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
               <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight text-brand-dark">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Service Recap */}
    <section className="py-20 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-8 md:grid-cols-3">
        {SERVICES.slice(0, 3).map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] border border-brand-primary/5 shadow-sm hover:shadow-2xl transition-all group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
              <s.icon className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-black italic mb-6 text-brand-dark tracking-tight">{s.title}</h3>
            <p className="text-sm md:text-base font-medium text-brand-text/60 leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="pt-28 sm:pt-36 pb-20 md:pb-32 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 md:space-y-40">
      {/* Introduction */}
      <section className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div 
          className="space-y-8 md:space-y-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full">
            <span className="text-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic leading-tight text-brand-dark">
            Agents of <br className="hidden md:block"/> Change.
          </h2>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed font-medium">
              We specialize in <span className="text-brand-primary">20L custom-branded rigid printed buckets</span> created to give businesses a powerful promotional and advertising advantage.
            </p>
            <p className="text-lg md:text-xl text-brand-text/60 leading-relaxed italic font-medium border-l-4 border-brand-primary/20 pl-6">
              Our buckets are more than packaging—they are branding tools designed to attract attention and grow visibility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-brand-primary">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-black uppercase text-[10px] tracking-widest">Premium Quality</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-black uppercase text-[10px] tracking-widest">Global Standards</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative bg-brand-light p-6 md:p-12 rounded-[3rem] md:rounded-[5rem] border border-brand-primary/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-brand-primary/5 blur-3xl rounded-full" />
          <img src={PRODUCT_IMAGES[4]} alt="Manufacturing" className="relative z-10 w-full h-auto rounded-[2rem] md:rounded-[4rem] shadow-2xl transition-transform hover:scale-105 duration-700" referrerPolicy="no-referrer" />
          <div className="mt-8 text-center px-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gray-med italic">Industrial Digital Manufacturing Excellence</p>
          </div>
        </motion.div>
      </section>

      {/* What We Offer / Why Choose Us */}
      <section className="bg-brand-dark rounded-[3rem] md:rounded-[5rem] p-8 sm:p-12 md:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 relative z-10">
          <div className="space-y-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic leading-tight">What We Offer</h3>
            <div className="grid gap-4 sm:gap-8">
              {[
                "High-definition printing of your logo and brand colours",
                "Unique custom designs that strengthen your business identity",
                "Bespoke world-class bucket branding solutions",
                "Seasonal campaign designs for promotions and special offers"
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start p-6 sm:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 hover:border-brand-primary hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shrink-0">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-brand-gray-med leading-relaxed group-hover:text-white transition-colors">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.div 
              className="p-10 sm:p-16 bg-brand-primary rounded-[3rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/10"
              whileHover={{ y: -10 }}
            >
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-3xl sm:text-4xl font-black italic mb-8 relative z-10">Why Businesses Choose Us?</h3>
               <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed relative z-10 italic text-white/90">
                 "We combine creativity, quality materials, and professional printing to deliver durable branded buckets that make a lasting impression on your customers."
               </p>
               <div className="mt-12 flex items-center gap-4 relative z-10">
                 <div className="w-12 h-1 bg-white/30 rounded-full" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Banjani Pak Group</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  </main>
);

const ProductsPage = () => (
  <main className="pt-28 sm:pt-36 pb-24 bg-brand-light min-h-screen">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16 md:mb-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-brand-primary text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4 block underline decoration-brand-primary/20 underline-offset-8"
      >
        Our Inventory
      </motion.span>
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic text-brand-dark leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        20L Custom-Branded Buckets.
      </motion.h2>
      <p className="mt-8 text-brand-text/60 font-bold uppercase text-[10px] sm:text-xs tracking-[0.3em] max-w-2xl mx-auto border-t border-brand-primary/5 pt-8">
        Durable, practical, and professionally printed buckets ideal for:
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-10">
        {["Retail packaging", "Promotional campaigns", "Hamper Solutions", "Brand awareness", "Product launches"].map((cat, i) => (
          <motion.span 
            key={i} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="px-6 py-2.5 sm:px-10 sm:py-4 bg-white border border-brand-primary/10 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-brand-dark shadow-sm hover:shadow-xl hover:border-brand-primary transition-all cursor-default"
          >
            {cat}
          </motion.span>
        ))}
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 md:space-y-32">
      {GALLERY_IMAGES.map((item, i) => (
        <motion.section 
          key={i} 
          className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-24 items-center bg-white p-6 sm:p-12 md:p-20 rounded-[3rem] md:rounded-[5rem] shadow-xl border border-brand-primary/5`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] bg-brand-light rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group flex items-center justify-center p-8">
              <img src={item.url} alt={item.title} className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ${i === 3 ? 'rounded-[150px]' : ''}`} referrerPolicy="no-referrer" />
            </div>
            <motion.div 
              className="absolute top-6 left-6 md:top-10 md:left-10 bg-brand-dark text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl"
              whileHover={{ scale: 1.1 }}
            >
              Series {i + 1}
            </motion.div>
          </div>
          <div className="flex-1 space-y-8 md:space-y-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-brand-dark leading-tight tracking-tight">{item.title}</h3>
            <p className="text-lg md:text-xl text-brand-text/60 leading-relaxed font-medium italic">{item.desc}</p>
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-primary/10">
              <div className="flex items-center gap-4 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> HD Digital Print
              </div>
              <div className="flex items-center gap-4 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                <ShieldCheck className="w-5 h-5 shrink-0" /> UV Protected
              </div>
              <div className="flex items-center gap-4 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                <Palette className="w-5 h-5 shrink-0" /> Bespoke Visuals
              </div>
              <div className="flex items-center gap-4 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                <Package className="w-5 h-5 shrink-0" /> 20L Capacity
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-white bg-brand-dark px-10 py-5 rounded-2xl md:rounded-3xl hover:bg-brand-primary group transition-all transform hover:-translate-y-1">
              Order Specification <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.section>
      ))}
    </div>
  </main>
);

const ServicesPage = () => (
  <main className="pt-32 pb-24 bg-brand-dark text-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 md:mb-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-brand-primary text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-6 block underline decoration-brand-primary/20 underline-offset-8"
      >
        Specialized Solutions
      </motion.span>
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic mb-8 leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Agents of <br className="hidden sm:block"/> Change Services.
      </motion.h2>
      <p className="text-white/60 font-medium italic max-w-2xl mx-auto mb-12 text-lg sm:text-xl leading-relaxed">
        We create high-quality custom printed 20L buckets designed to promote your brand with style and impact.
      </p>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        className="h-1.5 bg-brand-primary mx-auto rounded-full" 
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 gap-8 md:gap-12">
      {SERVICES.map((s, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 bg-white/5 hover:bg-brand-primary transition-all group relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:bg-brand-light/20 transition-all scale-0 group-hover:scale-100" />
          <s.icon className="w-12 h-12 md:w-16 md:h-16 text-brand-primary mb-10 group-hover:text-white transition-colors" />
          <h3 className="text-2xl md:text-3xl font-black italic mb-6 tracking-tight">{s.title}</h3>
          <p className="text-base md:text-lg text-brand-gray-med group-hover:text-white/90 leading-relaxed font-medium transition-colors">
            {s.description}
          </p>
        </motion.div>
      ))}
    </div>
  </main>
);

const GalleryPage = () => (
  <main className="pt-32 pb-24 bg-brand-light min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
      <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline decoration-brand-primary/20 underline-offset-8">Production Excellence</span>
      <h2 className="text-4xl md:text-7xl font-black italic text-brand-dark mb-4">Exclusive Designs.</h2>
      <p className="text-brand-text/60 italic font-medium max-w-lg mx-auto">A curated selection of our bespoke rigid printed bucket solutions.</p>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {GALLERY_IMAGES.map((img, i) => (
        <motion.div 
          key={i} 
          className="group"
          whileHover={{ y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square bg-white rounded-[3rem] p-8 shadow-xl border border-brand-primary/5 flex items-center justify-center overflow-hidden mb-8">
            <img src={img.url} alt={img.title} className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-brand-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 p-8 text-center text-white">
              <Package className="w-10 h-10 mb-4" />
              <p className="text-sm font-black uppercase tracking-widest mb-2">Detailed View</p>
              <button className="px-6 py-2 border border-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-brand-primary transition-all">Expand Item</button>
            </div>
          </div>
          <div className="text-center px-4">
            <h4 className="font-black text-xl italic text-brand-dark mb-2 tracking-tight">{img.title}</h4>
            <p className="text-[10px] text-brand-text/50 font-black uppercase tracking-[0.2em]">{img.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </main>
);

const ContactPage = () => (
  <main className="pt-28 sm:pt-36 pb-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 sm:gap-20">
      <div className="space-y-12 sm:space-y-20">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-brand-primary text-[10px] md:text-sm font-black uppercase tracking-[0.4em] block underline decoration-brand-primary/20 underline-offset-8">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic leading-[1.1] text-brand-dark">Ready to grow your brand?</h2>
          <p className="text-lg sm:text-xl text-brand-text/60 font-medium max-w-lg">Let's craft the perfect custom printed buckets for your business needs.</p>
        </motion.div>
        
        <div className="space-y-8 sm:space-y-12">
          {[
            { icon: Phone, label: "Direct Line", val: "076 891 0189", link: "tel:0768910189", highlight: true },
            { icon: Mail, label: "Digital Mail", val: "rogerm@banjanipg.co.za", link: "mailto:rogerm@banjanipg.co.za" },
            { icon: MapPin, label: "Strategic Hub", val: "Springs, Gauteng", link: "#" },
            { icon: Clock, label: "Service Hours", val: "Mon - Fri: 08:00 - 17:00", link: "#" }
          ].map((item, i) => (
            <motion.a 
              key={i} 
              href={item.link} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-6 sm:gap-10 group p-4 sm:p-6 rounded-3xl transition-all ${item.highlight ? 'bg-brand-primary/5 hover:bg-brand-primary/10 ring-1 ring-brand-primary/20' : 'hover:bg-brand-light'}`}
            >
              <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center transition-all shadow-md shrink-0 ${item.highlight ? 'bg-brand-primary text-white scale-110 shadow-brand-primary/20' : 'bg-white text-brand-primary group-hover:bg-brand-primary group-hover:text-white'}`}>
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-gray-med mb-1">{item.label}</p>
                <p className={`text-xl sm:text-2xl md:text-3xl font-black truncate tracking-tight transition-colors ${item.highlight ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'}`}>{item.val}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="bg-brand-light/40 rounded-[3rem] sm:rounded-[5rem] p-8 sm:p-16 border border-brand-primary/5 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-brand-dark mb-10 leading-tight">Get in touch today for a custom quote.</h3>
          <form className="space-y-6 sm:space-y-10" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully. Roger will be in touch shortly."); }}>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 text-brand-text">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest pl-4">Full Name</label>
                <input required type="text" className="w-full bg-white border-0 rounded-2xl md:rounded-3xl px-8 py-5 md:py-7 focus:ring-4 focus:ring-brand-primary/10 shadow-xl placeholder:text-brand-gray-med/50 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest pl-4">Contact Number</label>
                <input required type="tel" className="w-full bg-white border-0 rounded-2xl md:rounded-3xl px-8 py-5 md:py-7 focus:ring-4 focus:ring-brand-primary/10 shadow-xl placeholder:text-brand-gray-med/50 transition-all" placeholder="+27 ..." />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest pl-4">Business Industry</label>
              <input required type="text" className="w-full bg-white border-0 rounded-2xl md:rounded-3xl px-8 py-5 md:py-7 focus:ring-4 focus:ring-brand-primary/10 shadow-xl placeholder:text-brand-gray-med/50 transition-all" placeholder="e.g. Retail, Chemicals, Food" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest pl-4">Message Detail</label>
              <textarea rows={4} className="w-full bg-white border-0 rounded-2xl md:rounded-3xl px-8 py-5 md:py-7 focus:ring-4 focus:ring-brand-primary/10 shadow-xl placeholder:text-brand-gray-med/50 transition-all resize-none" placeholder="Describe your branding needs..."></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-primary text-white py-6 md:py-8 rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.2em] text-[11px] sm:text-[13px] shadow-2xl shadow-brand-primary/30 hover:bg-brand-secondary hover:scale-[1.02] active:scale-95 transition-all">
              Submit Order Inquiry
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-[9px] font-black uppercase tracking-widest text-brand-gray-med">Managed by</p>
            <h4 className="text-xl font-black italic text-brand-dark mt-2">Roger Mnguni</h4>
            <span className="text-[10px] text-brand-primary font-black uppercase tracking-[0.3em]">Agents of Change</span>
          </div>
        </div>
      </motion.div>
    </div>
  </main>
);

// --- MAIN APP ---

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/": "Home | Banjani Pak Group",
      "/about": "About Us | Banjani Pak Group",
      "/products": "Products | Banjani Pak Group",
      "/services": "Services | Banjani Pak Group",
      "/gallery": "Gallery | Banjani Pak Group",
      "/contact": "Contact Us | Banjani Pak Group",
    };
    document.title = pageTitles[pathname] || "Banjani Pak Group";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-light text-brand-text selection:bg-brand-primary selection:text-white font-sans overflow-x-hidden">
      <Navigation />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
