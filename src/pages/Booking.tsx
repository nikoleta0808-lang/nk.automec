import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Calendar as CalendarIcon, Phone, MessageSquare, MapPin, Instagram } from 'lucide-react';

const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDlOd9WBScSBgzz-T45S1g6qgcIxnEWEB24y3BU-1utekdRQnFJU4BoKkvPXLBE8-nouxzF9YtR98PHgnNu8PERDyuF9GNpJMUX_4UzIPr9QXtHDQtKsZ9RMGM0h5HxQeJnMr457duXjHCgK3DwM4r1wWEHRok_iBOtEyTwdDYYd2ZBg26BvYjd4qnArbdy19Xq196eUN_v8Rg3JEaZ5InKzC73t_alJ2aOE7PXS4v0LYS_r0cydUd0dKUe_p897hNMiniN9UAbiQ";

// 1. VE A TU CUENTA DE CALENDLY (https://calendly.com)
// 2. CREA O EDITA UN EVENTO:
//    - EN LA CONFIGURACIÓN DEL EVENTO -> "Idioma": Cámbialo a ESPAÑOL.
//    - Duración: 30 minutos.
//    - Incrementos de disponibilidad (Scheduling Settings): 60 minutos.
// 3. COPIA EL ENLACE Y PÉGALO AQUÍ ABAJO:
const CALENDLY_URL = "https://calendly.com/nikoletaatanasova405/30min?locale=es&language=es"; 

const Booking = () => {
  return (
    <div className="bg-[#F9F9FF] min-h-screen pb-24">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-8 py-16 text-center lg:text-left">
        <h1 className="font-h1 text-4xl md:text-5xl text-primary font-black uppercase mb-4 tracking-tighter">Reserva tu Cita de Consultoría</h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed font-body mx-auto lg:mx-0">
          Citas de 30 minutos programadas cada hora para garantizar una atención personalizada sin esperas. 
          <br />
          <span className="font-bold text-primary block mt-2 underline decoration-construction-orange decoration-4 underline-offset-4">Horario: Lunes a Sábado (09:00 - 21:00).</span>
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content (Calendar) */}
          <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="bg-white border-4 border-slate-200 shadow-2xl relative min-h-[750px]">
                <div className="absolute -top-4 -right-4 bg-construction-orange text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
                  Calendario en vivo (Español)
                </div>
                
                {/* Skeleton Loader / Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 -z-10">
                  <div className="w-12 h-12 border-4 border-construction-orange border-t-transparent animate-spin mb-4"></div>
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Cargando Agenda Digital...</span>
                </div>
                
                <InlineWidget 
                  url={CALENDLY_URL} 
                  styles={{ height: '750px', position: 'relative', zIndex: 1 }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'ff5e00',
                    textColor: '0f172a'
                  }}
                />
              </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-slate-200 p-8 shadow-sm">
                <h3 className="font-h3 text-xl text-primary mb-3 font-black uppercase tracking-tight flex items-center gap-2">
                  <div className="w-2 h-2 bg-construction-orange rounded-full"></div>
                  Confirmación por Email
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-body">
                  Introduce tu correo para recibir los detalles técnicos y el recordatorio de tu cita de 30 minutos.
                </p>
              </div>
              
              <div className="bg-white border-2 border-slate-200 p-8 shadow-sm">
                <h3 className="font-h3 text-xl text-primary mb-3 font-black uppercase tracking-tight flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Citas Cada Hora
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-body">
                  Hemos organizado la agenda para que cada cliente tenga su hora asignada sin solapamientos.
                </p>
              </div>
            </div>

            {/* "What happens next" section */}
            <div className="mt-12 bg-primary p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-construction-orange/10 rotate-45 translate-x-16 -translate-y-16"></div>
              <h3 className="font-h3 text-2xl mb-8 font-black uppercase tracking-tighter">¿Qué pasará después de reservar?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Cuestionario", desc: "Recibirá un breve formulario por WhatsApp para entender su volumen de obra." },
                  { step: "02", title: "Consultoría", desc: "Tendremos la reunión técnica para diagnosticar sus fugas de dinero." },
                  { step: "03", title: "Plan de Acción", desc: "Le entregaremos una hoja de ruta con el sistema de automatización propuesto." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <span className="text-construction-orange font-black text-xl italic">{item.step}</span>
                    <h4 className="font-bold uppercase text-sm tracking-widest">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <a href="tel:623397132" className="flex items-center justify-center gap-4 bg-primary text-white py-6 font-black uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all shadow-lg">
                <Phone size={18} /> 623 397 132
              </a>
              <a href="mailto:info@nk-auto-mec.com" className="flex items-center justify-center gap-4 bg-white border-2 border-primary text-primary py-6 font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-lg">
                <CalendarIcon size={18} /> info@nk-auto-mec.com
              </a>
              <a href="https://wa.me/34623397132" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-[#25D366] text-white py-6 font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-lg">
                <MessageSquare size={18} /> WhatsApp Directo
              </a>
              <a href="https://www.instagram.com/nkautomec?igsh=MXc4bDVhOXEzbzYxYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white py-6 font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-lg">
                <Instagram size={18} /> Instagram
              </a>
            </div>

            <div className="bg-white border-2 border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 bg-concrete-gray border-b-2 border-slate-200 flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span className="text-[10px] font-black uppercase text-primary tracking-widest">Cieza, Murcia</span>
              </div>
              <div className="aspect-video relative group">
                <img 
                  src={MAP_IMG} 
                  className="w-full h-full object-cover grayscale contrast-125" 
                  alt="Location map" 
                />
              </div>
            </div>

            <div className="bg-primary p-10 text-white space-y-6 shadow-2xl skew-x-1 lg:skew-x-0">
              <h4 className="font-h3 text-2xl font-bold uppercase leading-tight">Garantía de Tiempo</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-body italic">"Respetamos su tiempo como respetamos su maquinaria. Citas garantizadas en el horario pactado."</p>
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center text-[10px] font-black">NK</div>
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">+500 Negocios Optimizados</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;
