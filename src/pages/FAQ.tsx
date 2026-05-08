import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Construction, Headphones, Clock, HelpCircle, ChevronDown, CheckCircle, BarChart3, FileText } from 'lucide-react';

const FAQ_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuA0DYzetsknvDRXQEQceQw759mol1Vb-nXKaaeEKYj4sd83B-zWah9ZTHMSOnKXg3JXIVSjOzzcuGR_r-a4vKLHWo-4FW71zL5D11sN9NnXU52Cye4bQBTmKUHq0K1ueQrGQ48xlLCZMdangDi_ZcEb8ybNKTQKAnovfuZXDHdWmoAl-Pgv9AJMuyOTqV0ixnWELD0utercQag4bJAMipD1_dUtkq2h5rLPuYaaRM4X9dbh7FtGlvzFQ9CWIW5XNIesCLmM9cHUFA";

const FAQItem = ({ question, answer, icon: Icon, fact }: { question: string, answer: string, icon: any, fact?: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white industrial-border overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-8 text-left cursor-pointer hover:bg-concrete-gray transition-colors"
      >
        <div className="flex items-center gap-6">
          <Icon className="text-construction-orange shrink-0" size={28} />
          <h3 className="font-h3 text-xl text-primary font-bold uppercase tracking-tight">{question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed font-body mb-6">{answer}</p>
              {fact && (
                <div className="p-6 bg-concrete-gray border-l-4 border-construction-orange flex gap-4 items-start">
                  <CheckCircle className="text-construction-orange shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-xs font-black uppercase text-primary mb-1">Dato Clave NK:</p>
                    <p className="text-sm text-slate-500 italic">{fact}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen pb-24">
      <section className="max-w-7xl mx-auto px-8 py-24 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <span className="text-construction-orange font-bold text-xs uppercase tracking-widest mb-4 block">Centro de Soporte Técnico</span>
            <h1 className="font-h1 text-5xl md:text-6xl text-primary mb-6 font-black uppercase tracking-tighter">Soluciones claras para su negocio</h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              Resolvemos las dudas más frecuentes sobre la automatización de NK AUTOMEC. Estructura, solvencia y eficiencia para que su obra nunca se detenga.
            </p>
          </div>
          <div className="md:col-span-5 h-[300px] md:h-[400px] relative bg-slate-200 industrial-border overflow-hidden shadow-2xl">
            <img 
              src={FAQ_IMG} 
              alt="Professional support" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <HelpCircle className="text-construction-orange" size={24} />
          <h2 className="font-h2 text-2xl text-primary font-black uppercase tracking-tight">Preguntas Frecuentes</h2>
        </div>
        
        <FAQItem 
          icon={MessageSquare}
          question="¿Pierdes clientes por responder tarde?"
          answer="El sistema de NK AUTOMEC responde por ti en menos de 5 segundos, filtra al cliente y agenda la visita técnica automáticamente en tu Calendly. Tu competencia seguirá escribiendo el 'Hola' mientras tú ya tienes la cita cerrada."
          fact="Responder en menos de 5 minutos aumenta las probabilidades de cierre en un 400%."
        />

        <FAQItem 
          icon={Construction}
          question="¿Cómo funciona la integración con WhatsApp Business?"
          answer="Nuestra plataforma se conecta directamente con la API oficial de WhatsApp Business. Esto permite automatizar el envío de presupuestos, actualizaciones de estado de obra y recordatorios de pago de forma centralizada. Todo queda registrado en su panel de control."
          fact="Reduce en un 70% el tiempo dedicado a responder dudas manuales de clientes."
        />
        
        <FAQItem 
          icon={BarChart3}
          question="¿No sabes de dónde vienen tus clientes reales?"
          answer="Instalamos un Dashboard de ventas donde ves exactamente qué anuncio o página trajo al cliente, cuánto te costó ese lead y qué margen tiene la obra proyectada. Control total, cero adivinanzas."
        />
        
        <FAQItem 
          icon={FileText}
          question="¿Sigues enviando presupuestos por email días después?"
          answer="Nuestra automatización permite generar borradores de presupuestos técnicos en PDF casi al instante tras la visita. El cliente recibe un enlace profesional por WhatsApp mientras el interés aún es máximo."
          fact="Las empresas que entregan presupuesto en <24h cierran el doble de obras."
        />
        
        <FAQItem 
          icon={Clock}
          question="¿Cuánto tiempo tarda la implementación completa?"
          answer="Una implementación estándar toma entre 7 y 14 días. Esto incluye configuración de plantillas, carga de proveedores y formación inicial del equipo."
        />

        <FAQItem 
          icon={Headphones}
          question="¿Qué tipo de soporte técnico ofrecéis?"
          answer="Ofrecemos soporte técnico prioritario vía WhatsApp y tickets. Garantizamos tiempos de respuesta inferiores a 4 horas laborables. Además, asignamos un consultor durante los primeros 30 días."
        />

        <FAQItem 
          icon={Construction}
          question="¿Esto sirve para autónomos o solo grandes empresas?"
          answer="El sistema es escalar. Sirve tanto para un autónomo que quiere dejar de ser esclavo del teléfono como para empresas con 10 cuadrillas que necesitan centralizar la logística y los márgenes."
        />
      </section>

      <section className="max-w-7xl mx-auto px-8 mt-24">
        <div className="bg-primary p-12 industrial-border border-l-8 border-construction-orange flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white">
            <h2 className="font-h2 text-3xl mb-2 font-bold uppercase tracking-tight text-center md:text-left">¿Tiene una duda específica?</h2>
            <p className="opacity-70 text-center md:text-left">Nuestro equipo de ingeniería está listo para analizar su caso particular.</p>
          </div>
          <button 
            onClick={() => window.location.href = 'https://wa.me/34623397132'}
            className="bg-construction-orange text-white px-10 py-5 font-bold uppercase tracking-widest hover:scale-105 transition-all text-sm w-full md:w-auto cursor-pointer"
          >
            Contactar por WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
