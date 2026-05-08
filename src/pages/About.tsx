import React from 'react';
import { motion } from 'motion/react';
import { Wrench, ShieldCheck, Factory, History, MapPin, Mail, ArrowRight, Phone, Instagram } from 'lucide-react';

const HERO_INDUSTRIAL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAQmtxwbEsULGkAF6h25mJlTheFHyj6Ead_IokJyJgkTpUbqjfQYoEjydePXmsn5ys88eNXXO2eOHxzetqhA65yplO9SZq43i4o8j54BsRRYqDPgYg9qKdAailBzDttQJS-IfQ4GgWK9mwSe0N8iKFKSwrsmDzYmMARZwS1QnW2jV_-pzNGzEprtlCBgBpyG22V8vq0tC-4zzhNJYTsAXVnCy-6X8fxhrrbFJKfDstRw443Lff9MGdvWqmooSSkcHilSlyzZGumQQ";
const BLUEPRINTS = "https://lh3.googleusercontent.com/aida-public/AB6AXuBupWqe62abE4NrLt2UfhnPKwIrZckjO9aTxEkDUweee2FNUj4pSD8ZtSbTQVLBcuSxp1cdIOVm8_fpUQI5h5iX6Di_94LpJNYGiyv0jnWvTuU2YzWIJM0hIEJAZdjMO1EPcxRK0LiqrAIQA227DhlwUlCYQ1dIdQIY5A62V4wne_NcGBa5hgwBHIiG-cHHlXD2IAyn1CAipecGSkVUzssYzzL0WAOlgESRRNgBDIznYEkeL1XJxXABS21mGHqy4uhNu7XZIBp5rg";

const FeatureBlock = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-6 items-start">
    <div className="shrink-0 w-14 h-14 bg-concrete-gray industrial-border flex items-center justify-center">
      <Icon className="text-primary" size={28} />
    </div>
    <div>
      <h3 className="font-h3 text-xl mb-3 text-primary font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-body">{desc}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[600px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img className="w-full h-full object-cover grayscale contrast-125" src={HERO_INDUSTRIAL} alt="Industrial background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-construction-orange font-bold text-xs uppercase tracking-widest mb-4 block">Nacidos en el barro, diseñados en la nube</span>
            <h1 className="font-h1 text-white text-6xl md:text-8xl mb-8 leading-none font-black uppercase tracking-tighter">Hablamos el idioma de la obra.</h1>
            <p className="text-slate-300 text-lg max-w-xl font-body leading-relaxed">
              En NK AUTOMEC no somos consultores de oficina. Venimos del sector reformas, donde las manos se ensucian y los plazos se cumplen por pura tenacidad.
            </p>
          </div>
          <div className="md:mb-0 md:shrink-0">
            <div className="bg-white p-8 border-l-8 border-construction-orange max-w-sm shadow-2xl">
              <p className="text-primary font-black text-xs uppercase mb-2 tracking-widest">Sede Central</p>
              <p className="text-slate-600 font-body text-sm font-medium">Cieza, Murcia. El epicentro de nuestra operativa industrial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-6">
            <h2 className="font-h2 text-primary text-5xl mb-10 font-bold uppercase tracking-tighter">Filosofía 'Cero Humo'</h2>
            <div className="space-y-12">
              <FeatureBlock 
                icon={Factory} 
                title="Soluciones Reales" 
                desc="No vendemos humo digital. Creamos herramientas de automatización que resuelven los problemas reales de gestión en una reforma." 
              />
              <FeatureBlock 
                icon={ShieldCheck} 
                title="Solvencia Técnica" 
                desc="Cada proceso que automatizamos ha sido probado antes en el campo de batalla. Si no ahorra tiempo o dinero, no lo implementamos." 
              />
              <FeatureBlock 
                icon={History} 
                title="Industrialismo Puro" 
                desc="Nuestra estética y ética son industriales. Priorizamos la funcionalidad sobre la decoración innecesaria." 
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative">
              <img className="industrial-border shadow-2xl w-full grayscale contrast-125" src={BLUEPRINTS} alt="Blueprints" />
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-construction-orange rotate-45 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-concrete-gray py-32 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="font-h2 text-primary text-4xl mb-4 font-black uppercase">Nuestra Historia</h2>
            <div className="w-24 h-2 bg-construction-orange"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { year: '01', title: 'El Pie de Obra', desc: 'Todo empezó en Cieza, gestionando cuadrillas y materiales. Vimos que el caos era el estándar y decidimos que la tecnología debía bajar al suelo.' },
              { year: '02', title: 'La Digitalización', desc: 'Dejamos las herramientas físicas por las lógicas. Empezamos a construir puentes entre la gestión de proyectos y la automatización pura.' },
              { year: '03', title: 'NK AUTOMEC Hoy', desc: 'Hoy somos el partner tecnológico de empresas que buscan rentabilidad real. No hacemos marketing, hacemos que las cosas funcionen.' }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="text-8xl font-black text-slate-100 absolute -top-12 -left-4 group-hover:text-construction-orange/10 transition-colors pointer-events-none select-none">{item.year}</span>
                <div className="relative z-10 bg-white p-10 industrial-border shadow-lg">
                  <h4 className="font-h3 text-xl mb-4 text-primary font-bold uppercase">{item.title}</h4>
                  <p className="text-slate-600 font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bento */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-primary p-16 flex flex-col justify-end text-white relative overflow-hidden">
            <h3 className="font-h1 text-4xl mb-6 font-black uppercase tracking-tight">Por qué entendemos tu idioma</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-body">
              Porque antes de programar una línea de código, estuvimos en la furgoneta a las 7 de la mañana. Entendemos el coste de un retraso y el valor de un presupuesto bien cerrado.
            </p>
          </div>
          <div className="bg-white industrial-border p-10 flex flex-col justify-center items-center text-center">
            <span className="text-6xl font-black text-construction-orange mb-2">+150</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proyectos Optimizados</span>
          </div>
          <div className="bg-white industrial-border p-10 flex flex-col justify-center items-center text-center">
            <span className="text-6xl font-black text-primary mb-2">100%</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enfoque Reformas</span>
          </div>
          <div className="md:col-span-2 bg-surface-container p-12 flex items-center justify-between group cursor-pointer">
            <div>
              <h4 className="font-h3 text-primary text-2xl mb-2 font-bold uppercase">¿Hablamos?</h4>
              <p className="text-slate-600">Agenda una sesión de diagnóstico en nuestra sede.</p>
            </div>
            <ArrowRight className="text-primary group-hover:translate-x-4 transition-transform" size={40} />
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-24 px-8 bg-white max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="h-[400px] industrial-border grayscale contrast-150">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOkWyXydY9fcUifKEXAIww9XkhVh7BKcuE3rmf3uJgJ91-YKY6Mnfb5Js2xsHh62FvnASLNLZ-_1zAFLOEUqXw6mpmqWGjDMlhygsWwdmrCzh6mt_tJIKm3cq7kigqpx9casBFbZGB8d6GvzWlyX7nBtCv5HXQiFYHwWOQu9KY6Gy4Xkjeu3r1RwsX5rmHCwhLEAKcudsPghuBgQGChrjY2qOMKKk1--GY9bpmoSTo6yAeJLgqo9Ob_XSzlbZK12Nrk283DBDVhw" alt="Map Cieza" />
          </div>
          <div>
            <h2 className="font-h2 text-primary text-5xl mb-8 font-black uppercase tracking-tighter">Arraigados en Murcia</h2>
            <p className="text-lg text-slate-600 mb-12 font-body leading-relaxed">
              Nuestra sede en Cieza no es solo una oficina, es nuestro centro de operaciones. Desde el corazón de la Región de Murcia, exportamos metodología y tecnología a todo el país.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-construction-orange" size={24} />
                <span className="font-bold text-primary font-body">Cieza, Murcia, España</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-construction-orange" size={24} />
                <span className="font-medium text-slate-600 font-body">623 397 132</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-construction-orange" size={24} />
                <a href="mailto:info@nk-auto-mec.com" className="font-medium text-slate-600 font-body hover:text-construction-orange transition-colors">info@nk-auto-mec.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="text-construction-orange" size={24} />
                <a href="https://www.instagram.com/nk.automec?igsh=MnducDh5ODJwcms3" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-600 font-body hover:text-construction-orange transition-colors">@nk.automec</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
