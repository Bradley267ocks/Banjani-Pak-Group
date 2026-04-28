
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
  { url: PRODUCT_IMAGES[0], title: "Exclusive Designs", desc: "Easter Buster Campaign to Drive Seasonal Sales" },
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
    title: "Easter Buster",
    description: "Delivering world-class designs to enhance your brand image. We create exclusive designs for seasonal promotions."
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
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-brand-primary/10 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 sm:h-12 md:h-16 w-auto bg-white rounded-xl flex items-center justify-center p-1 shadow-inner overflow-hidden border border-brand-primary/5 group-hover:scale-105 transition-transform">
            <img src={LOGO_IMAGE} alt="Banjani Pak Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="hidden sm:block text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark">Banjani Pak</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em]">
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
          <Link to="/contact" className="bg-brand-primary text-white ml-4 px-8 py-3 rounded-xl hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20">
            Inquiry
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
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
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-2 space-y-8">
          <Link to="/" className="flex items-center gap-4 grayscale brightness-200">
            <div className="h-14 w-auto bg-white rounded-xl p-1.5 flex items-center justify-center">
              <img src={LOGO_IMAGE} alt="Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xl font-black uppercase tracking-[0.3em]">Banjani Pak</span>
          </Link>
          <p className="text-brand-gray-med max-w-sm leading-loose font-medium italic">
            Redefining industrial packaging through artistic precision and world-class digital manufacturing excellence.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Navigation</h4>
          <ul className="space-y-4 text-sm font-bold text-brand-gray-med">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Contact</h4>
          <ul className="space-y-4 text-sm font-bold text-brand-gray-med">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-primary" /> 076 891 0189</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-primary" /> roger@banjanipg.co.za</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-primary" /> Springs, Gauteng</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-medium text-brand-gray-med tracking-widest">
          © {new Date().getFullYear()} BANJANI PAK GROUP. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
          Industrial Precision • Digital Artistry
        </p>
      </div>
    </footer>
  );
};

// --- PAGES ---

const HomePage = () => (
  <main className="pt-24 min-h-screen">
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-brand-primary/5 skew-x-12 transform origin-top-right border-l border-brand-secondary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-5 gap-12 items-center relative z-10 w-full mb-20 lg:mb-0">
        <motion.div className="lg:col-span-3 space-y-10" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-brand-primary" />
            <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]">Banjani Pak Group</span>
          </div>
          <h1 className="text-5xl md:text-[6.5rem] font-black leading-tight italic text-brand-dark tracking-tight">
            Agents of <br/>
            <span className="text-brand-primary font-serif not-italic">Change</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 font-medium max-w-lg leading-relaxed">
            Revolutionizing 20L rigid plastic packaging with bespoke high-definition digital branding that drives sales and strengthens visual identity.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/gallery" className="px-10 py-5 bg-brand-primary text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-brand-secondary transition-all hover:-translate-y-1">
              View Collection
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-brand-primary text-brand-primary rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all">
              Start Project
            </Link>
          </div>
        </motion.div>
        
        <motion.div className="lg:col-span-2 relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="bg-white p-4 sm:p-8 rounded-[3rem] shadow-2xl border border-brand-primary/10 hover:scale-105 transition-transform duration-700">
             <img src="https://i.ibb.co/20VxFFCM/IMG-20260421-WA0006.jpg" alt="Feature Product" className="w-full h-auto rounded-[2rem] object-contain shadow-lg" referrerPolicy="no-referrer" />
             <div className="absolute -bottom-8 -right-4 bg-brand-primary p-6 rounded-[2rem] text-white shadow-2xl">
               <span className="text-3xl font-black italic">20L</span>
               <p className="text-[10px] uppercase font-black tracking-widest mt-1 opacity-80">Capacity</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Quick Service Recap */}
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-12 sm:grid-cols-3">
        {SERVICES.slice(0, 3).map((s, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-brand-primary/5 shadow-sm hover:shadow-xl transition-all group">
            <s.icon className="w-12 h-12 text-brand-primary mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black italic mb-4 text-brand-dark">{s.title}</h3>
            <p className="text-sm font-medium text-brand-text/60 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
      {/* Introduction */}
      <section className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full">
            <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic leading-tight text-brand-dark">
            Why Choose Us?
          </h2>
          <p className="text-xl text-brand-text/70 leading-loose font-medium">
            We specialize in <span className="text-brand-primary">20lt Custom-Branded Rigid Printed Plastic Buckets</span> designed to help businesses promote, advertise, and strengthen their brand image. 
          </p>
          <p className="text-lg text-brand-text/60 leading-loose italic font-medium">
            We have crafted unique print designs with strong promotional, selling, and advertising value propositions.
          </p>
          <div className="flex items-center gap-6 text-brand-primary">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-black uppercase text-xs tracking-widest">Guaranteed Quality Standards</span>
          </div>
        </div>
        <div className="bg-brand-light p-8 rounded-[3rem] border border-brand-primary/5">
          <img src={PRODUCT_IMAGES[4]} alt="Manufacturing" className="w-full h-auto rounded-[2rem] shadow-2xl" referrerPolicy="no-referrer" />
          <p className="mt-6 text-center text-[10px] font-black uppercase tracking-widest text-brand-gray-med italic">Digital Manufacturing Detail</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-white">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-black italic mb-4">Why Choose Us</h3>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            "High digital-definition printing of your logo and brand colours.",
            "Branded designs to establish a strong visual identity for your business.",
            "Bespoke world-class printed designs to enhance image and appearance.",
            "Exclusive designs for Christmas, Black Friday, and Easter Buster promotions."
          ].map((text, i) => (
            <div key={i} className="flex gap-6 items-start p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-primary transition-all group">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white shrink-0 font-black">
                {i + 1}
              </div>
              <p className="text-lg font-bold text-brand-gray-med leading-relaxed group-hover:text-white transition-colors">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

const ProductsPage = () => (
  <main className="pt-32 pb-24 bg-brand-light min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 px-4">
      <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline decoration-brand-primary/20 underline-offset-8">Our Inventory</span>
      <h2 className="text-4xl md:text-7xl font-black italic text-brand-dark leading-tight">Packaging Solutions.</h2>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
      {GALLERY_IMAGES.map((item, i) => (
        <motion.section 
          key={i} 
          className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center bg-white p-8 md:p-16 rounded-[4rem] shadow-xl border border-brand-primary/5`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] bg-brand-light rounded-[3rem] overflow-hidden group">
              <img src={item.url} alt={item.title} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-10 left-10 bg-brand-dark text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
              Series {i + 1}
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-5xl font-black italic text-brand-dark leading-tight">{item.title}</h3>
            <p className="text-lg text-brand-text/60 leading-loose italic font-medium">{item.desc}</p>
            <div className="space-y-4 pt-6 border-t border-brand-primary/10">
              <div className="flex items-center gap-4 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> HD Digital Print
              </div>
              <div className="flex items-center gap-4 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Bespoke Visuals
              </div>
            </div>
            <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-brand-dark hover:text-brand-primary group transition-colors pt-4">
              Explore Specification <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.section>
      ))}
    </div>
  </main>
);

const ServicesPage = () => (
  <main className="pt-32 pb-24 bg-brand-dark text-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
      <h2 className="text-4xl md:text-7xl font-black italic mb-8">Professional <br/> Services.</h2>
      <div className="w-24 h-1 bg-brand-primary mx-auto" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
      {SERVICES.map((s, i) => (
        <div key={i} className="p-12 md:p-16 rounded-[4rem] border border-white/10 bg-white/5 hover:bg-brand-primary transition-all group relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:bg-brand-light/20 transition-all scale-0 group-hover:scale-100" />
          <s.icon className="w-16 h-16 text-brand-primary mb-10 group-hover:text-white transition-colors" />
          <h3 className="text-3xl font-black italic mb-6">{s.title}</h3>
          <p className="text-lg text-brand-gray-med group-hover:text-white/90 leading-loose font-medium transition-colors">
            {s.description}
          </p>
        </div>
      ))}
    </div>
  </main>
);

const GalleryPage = () => (
  <main className="pt-32 pb-24 bg-brand-light min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
      <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline decoration-brand-primary/20 underline-offset-8">Production Excellence</span>
      <h2 className="text-4xl md:text-7xl font-black italic text-brand-dark mb-4">Exclusive Designs.</h2>
      <p className="text-brand-text/60 italic font-medium max-w-lg mx-auto">Easter Buster Campaign to Drive Seasonal Sales</p>
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
  <main className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
      <div className="space-y-16">
        <div className="space-y-6">
          <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] block underline decoration-brand-primary/20 underline-offset-8">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-black italic leading-tight text-brand-dark">Elevate your packaging.</h2>
        </div>
        
        <div className="space-y-10">
          {[
            { icon: Phone, label: "Direct Line", val: "076 891 0189", link: "tel:0768910189" },
            { icon: Mail, label: "Digital Mail", val: "roger@banjanipg.co.za", link: "mailto:roger@banjanipg.co.za" },
            { icon: MapPin, label: "Strategic Hub", val: "Springs, Gauteng", link: "#" },
            { icon: Clock, label: "Service Hours", val: "Mon - Fri: 08:00 - 17:00", link: "#" }
          ].map((item, i) => (
            <a key={i} href={item.link} className="flex items-center gap-8 group">
              <div className="w-16 h-16 bg-brand-light rounded-[1.5rem] flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                <item.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-brand-gray-med mb-1">{item.label}</p>
                <p className="text-xl font-black text-brand-dark hover:text-brand-primary transition-colors tracking-tight">{item.val}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="bg-brand-light/30 rounded-[4rem] p-10 md:p-16 border border-brand-primary/5 shadow-inner">
        <h3 className="text-3xl font-black italic text-brand-dark mb-10">Request a Bespoke Proposal.</h3>
        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully. Roger will be in touch shortly."); }}>
          <div className="grid md:grid-cols-2 gap-8 text-brand-text">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest pl-2">Full Name</label>
              <input required type="text" className="w-full bg-white border-0 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-primary shadow-sm" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest pl-2">Contact Number</label>
              <input required type="tel" className="w-full bg-white border-0 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-primary shadow-sm" placeholder="+27 ..." />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest pl-2">Industry / Business Type</label>
            <input required type="text" className="w-full bg-white border-0 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-primary shadow-sm" placeholder="e.g. Retail, Chemicals, Food" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest pl-2">Message Detail</label>
            <textarea rows={4} className="w-full bg-white border-0 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-primary shadow-sm" placeholder="Describe your branding needs..."></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-brand-primary/30 hover:bg-brand-secondary hover:scale-[1.02] active:scale-95 transition-all">
            Submit Order Inquiry
          </button>
        </form>
      </div>
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
