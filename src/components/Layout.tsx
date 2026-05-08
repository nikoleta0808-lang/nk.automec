import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bolt, Phone, Mail, MapPin, Send, MessageSquare, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

const LOGO_URL = "https://lh3.googleusercontent.com/aida/ADBb0ug5s1SQcsplIqQCpsYRgy-TRREUumkM9oSXeBKxiAzGD_482E6JIzTtb5tG0ASpPZUWnEP4ZdSp2QbO5ZGixAF1AeySDzlxkPmRNNxiy9aeXGLw_aJuwkjpH3MJrAjFS5i9tnSo249IF2BrHdUGsevG8n1h_Qr9WqxAzdd5L_U3wgk-R1U-6um2mxiSd_tujZV5NXYRCMhV4KvuSSFRSqqCZokT7qhjMvxcno2xYNxm2saX9H6Oxs3FDkfQ2XAaLlqdlef-OKTD";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'EL SISTEMA', path: '/' },
    { name: 'PROYECTOS', path: '/proyectos' },
    { name: 'FAQ', path: '/faq' },
    { name: 'NOSOTROS', path: '/nosotros' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b-2 border-slate-100 h-24 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex justify-between items-center group">
        <Link to="/" className="flex items-center shrink-0">
          <Logo color="blue" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center bg-white ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all hover:text-construction-orange whitespace-nowrap py-2 ${
                location.pathname === link.path ? 'text-construction-orange border-b-2 border-construction-orange' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="bg-primary text-white px-4 lg:px-6 py-2.5 lg:py-3 font-black uppercase tracking-[0.1em] lg:tracking-[0.2em] hover:bg-construction-orange transition-all text-[9px] lg:text-[10px] ml-2 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Agendar Cita
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2 border-2 border-slate-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-white border-b-2 border-slate-200 p-8 flex flex-col gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-body font-bold text-lg uppercase tracking-tight ${
                  location.pathname === link.path ? 'text-construction-orange' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-6 py-4 text-center font-bold uppercase tracking-widest"
            >
              Agendar Cita
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t-[12px] border-construction-orange relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        <div className="md:col-span-5">
          <div className="mb-8">
            <Logo variant="dark" />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm uppercase font-bold tracking-tight">
            Especialistas en la automatización de procesos para empresas de reforma y construcción en la Región de Murcia. Eficiencia real en cada m².
          </p>
          <div className="flex gap-4">
            {[
              { icon: Phone, href: "tel:623397132" },
              { icon: Mail, href: "mailto:info@nk-auto-mec.com" },
              { icon: MessageSquare, href: "https://wa.me/34623397132" },
              { icon: Instagram, href: "https://www.instagram.com/nk.automec?igsh=MnducDh5ODJwcms3" }
            ].map((social, i) => (
              <a key={i} href={social.href} target={social.href.startsWith('http') ? "_blank" : undefined} rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined} className="w-12 h-12 bg-white/10 border border-white/10 flex items-center justify-center hover:bg-construction-orange transition-all">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h5 className="text-[10px] font-black uppercase mb-8 text-construction-orange tracking-[0.3em]">Navegación</h5>
          <ul className="space-y-4">
            <li><Link to="/servicios" className="text-slate-400 text-xs font-bold uppercase hover:text-white tracking-widest transition-all">Servicios</Link></li>
            <li><Link to="/" className="text-slate-400 text-xs font-bold uppercase hover:text-white tracking-widest transition-all">El Sistema</Link></li>
            <li><Link to="/proyectos" className="text-slate-400 text-xs font-bold uppercase hover:text-white tracking-widest transition-all">Proyectos</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h5 className="text-[10px] font-black uppercase mb-8 text-construction-orange tracking-[0.3em]">Legal</h5>
          <ul className="space-y-4">
            <li><Link to="#" className="text-slate-400 text-xs font-bold uppercase hover:text-white tracking-widest transition-all">Aviso Legal</Link></li>
            <li><Link to="#" className="text-slate-400 text-xs font-bold uppercase hover:text-white tracking-widest transition-all">Privacidad</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h5 className="text-[10px] font-black uppercase mb-8 text-construction-orange tracking-[0.3em]">Newsletter Industrial</h5>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Reciba consejos de optimización y automatización de procesos.</p>
          <div className="flex border-2 border-white/10 focus-within:border-construction-orange transition-all">
            <input 
              type="email" 
              placeholder="Email Corporativo" 
              className="bg-transparent border-none px-4 py-4 text-xs w-full focus:ring-0 outline-none"
            />
            <button className="bg-construction-orange text-white px-6 py-4 flex items-center justify-center hover:bg-opacity-90 transition-all">
              <Send size={20} />
            </button>
          </div>
          <div className="mt-8 flex items-start gap-3 text-slate-400">
            <MapPin size={20} className="shrink-0 text-construction-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest">Cieza, Murcia. España</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-10 border-t border-white/5 text-center text-slate-500 text-[10px] font-black tracking-[0.4em] uppercase">
        © 2024 NK AUTOMEC - Industria de Procesos. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
