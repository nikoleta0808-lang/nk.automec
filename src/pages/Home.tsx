import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, FileText, BarChart3, Rocket, CheckCircle2, ChevronRight, Activity, HardHat, ShieldAlert, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB4t-ws1bC-Q2-Qcvc1gjGKamg_HE67ysIlvewtNjYgmU8r_dxNd8YiVYoGWlgfdXhMJZx5-91vKwoDYVB8UZNR6IUmIQIsua7Jo1l1SMec7it2uBRh809o0xEyAAG9nrsfyHB_HXE5TdLpYq7o0B9O3GCNiuzZcuqnCt7Ij9WUrJnSB0336sE7GCjXJM3h1Ftgn2T05C3y4yQy36KWO3epBMvItxFh9ktmRGOpOAuAzsq_pM49IhWE5TI1L-uJGfNMDpKWKbQKpw";
const PROCESS_IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80";
const OFFICE_IMG = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80";
const WHATSAPP_IMG = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80";
const BUDGET_IMG = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80";
const RENTABILITY_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80";
const DATA_TECH_IMG = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80";

const WhatsAppMockup = () => {
  const [messages, setMessages] = React.useState<{ text: string, type: 'bot' | 'user', time: string }[]>([]);
  const conversation = [
    { text: "Hola, me gustaría pedir presupuesto para una reforma integral en mi vivienda de Murcia.", type: 'user', time: '10:00' },
    { text: "¡Hola! Soy el asistente inteligente de NK AUTOMEC. Estaré encantado de ayudarte en 30 segundos.", type: 'bot', time: '10:00' },
    { text: "¿Aproximadamente cuántos m2 tiene la estancia a reformar?", type: 'bot', time: '10:00' },
    { text: "Son unos 120m2 con cocina americana.", type: 'user', time: '10:01' },
    { text: "Perfecto. ¿Qué presupuesto aproximado tiene pensado invertir?", type: 'bot', time: '10:01' },
    { text: "Alrededor de 65.000€.", type: 'user', time: '10:01' },
    { text: "Cualificación positiva: Perfil industrial verificado.", type: 'bot', time: '10:02' },
    { text: "Un técnico especializado le llamará hoy a las 16:30. ¿Confirmamos?", type: 'bot', time: '10:02' },
    { text: "Confirmado. Muchas gracias.", type: 'user', time: '10:02' },
  ];

  React.useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    
    const runConversation = () => {
      setMessages([]);
      conversation.forEach((msg, i) => {
        const timeoutId = setTimeout(() => {
          setMessages(prev => [...prev, msg].slice(-4));
        }, i * 2200);
        timeoutIds.push(timeoutId);
      });
    };

    runConversation();
    const intervalId = setInterval(runConversation, (conversation.length * 2200) + 4000);

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-[300px] h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl relative border-4 border-slate-800 ring-8 ring-slate-900/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
      <div className="w-full h-full bg-[#f0f2f5] rounded-[2.5rem] overflow-hidden flex flex-col relative border border-white/5">
        <div className="bg-[#075e54] p-4 pt-10 text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold border border-white/10 italic">NK</div>
          <div>
            <p className="text-sm font-black leading-none uppercase tracking-tighter">NK_INDUSTRIAL_BOT</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <p className="text-[10px] opacity-70 uppercase font-black">Online_Active</p>
            </div>
          </div>
        </div>
        <div className="flex-1 p-3 space-y-4 overflow-y-auto industrial-grid bg-white/50">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ x: msg.type === 'user' ? 20 : -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`max-w-[85%] p-3 rounded-xl text-[11px] shadow-sm relative font-medium leading-tight ${
                msg.type === 'user' ? 'bg-primary text-white self-end ml-auto' : 'bg-white text-primary border border-slate-100 self-start'
              }`}
            >
              <p className="mb-1">{msg.text}</p>
              <span className={`text-[8px] absolute bottom-1 right-2 ${msg.type === 'user' ? 'text-white/50' : 'text-slate-400'}`}>{msg.time}</span>
            </motion.div>
          ))}
        </div>
        <div className="bg-white p-4 border-t border-slate-100 flex gap-2 items-center">
          <div className="flex-1 h-10 bg-slate-100 rounded-full border border-slate-200"></div>
          <div className="w-10 h-10 bg-[#075e54] rounded-full flex items-center justify-center text-white shadow-lg">
            <MessageSquare size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [leads, setLeads] = React.useState(10);
  const [ticket, setTicket] = React.useState(15000);

  const estimatedLoss = leads * ticket * 0.15 * 4; // Monthly estimation (4 weeks)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleDownloadDossier = (e: React.MouseEvent) => {
    e.preventDefault();
    const dossierContent = `
DOSSIER CORPORATIVO NK AUTOMEC 2024
----------------------------------
Nuestra Misión: Industrializar el sector de las reformas.
Sede: Cieza, Murcia.

COMPONENTES DEL SISTEMA:
1. WhatsApp Automatizado: Captación inteligente.
2. Agenda Multiagente: Logística centralizada.
3. PDF Express: Presupuestos y contratos en 48h.
4. Dashboard Real-Time: Control de márgenes y desviaciones.

Impacto Real:
+45% Eficiencia Operativa
+15% Margen por Obra
-70% Tiempo administrativo

Contacto: 623 397 132 | info@nk-auto-mec.com
Horario: Lun - Sáb | Hasta 21:00
Sede: Cieza, Murcia.
    `;
    const blob = new Blob([dossierContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dossier_NK_AUTOMEC_2024.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-32 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-construction-orange/5 translate-x-20"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="z-10"
          >
            <span className="text-construction-orange font-bold text-xs uppercase tracking-widest mb-4 block">INGENIERÍA DE PROCESOS</span>
            <h1 className="font-h1 text-white text-5xl md:text-7xl mb-6 leading-tight font-black uppercase tracking-tighter">
              MENOS LÍOS EN LA OBRA, <br /> <span className="text-construction-orange">MÁS DINERO EN CAJA</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl font-body leading-relaxed">
              Ayudamos a empresas de reformas a dejar de perder dinero por descontrol. Automatiza tus presupuestos, organiza a tus operarios y controla cada céntimo de tus obras sin estar presente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/booking" 
                className="bg-construction-orange text-white px-8 py-4 font-bold uppercase text-sm border-b-4 border-[#632800] active:border-b-0 active:translate-y-1 transition-all inline-block shadow-lg"
              >
                DETENER LA FUGA AHORA
              </Link>
              <Link to="/proceso" className="border-2 border-white/20 text-white px-8 py-4 font-bold uppercase text-sm hover:bg-white/5 transition-all">
                Ver El Sistema
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative h-[400px] lg:h-[600px] w-full"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl border-2 border-slate-200 shadow-sm grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
              src={HERO_IMG} 
              alt="Industrial Dashboard" 
            />
            <div className="absolute -bottom-6 -left-6 bg-construction-orange text-white p-6 shadow-xl hidden lg:block">
              <span className="block text-4xl font-black leading-none mb-1">+45%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Eficiencia Operativa</span>
            </div>
            <div className="absolute -top-10 -right-10 bg-white p-5 shadow-2xl hidden lg:block border-l-4 border-construction-orange max-w-[200px]">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 size={18} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Márgenes de Obra</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[9px] font-bold uppercase mb-1">
                    <span className="text-slate-400">Proyectado</span>
                    <span className="text-primary">22%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[22%] bg-slate-300"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] font-bold uppercase mb-1">
                    <span className="text-slate-400">Real (Live)</span>
                    <span className="text-construction-orange">34%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[34%] bg-construction-orange"></div>
                  </div>
                </div>
                <p className="text-[8px] text-slate-500 italic mt-2">+€4,200 ahorro materiales</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New WhatsApp Mockup Section */}
      <section className="py-24 bg-[#F3F4F6] border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <WhatsAppMockup />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl border-l-4 border-construction-orange">
                <p className="text-[10px] font-black uppercase text-primary mb-1">Respuesta AI</p>
                <p className="text-lg font-black text-construction-orange">EN {"<"} 30 SEG</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-construction-orange font-bold text-xs uppercase tracking-widest mb-4 block">ATENCIÓN INMEDIATA</span>
            <h2 className="industrial-header text-4xl md:text-5xl mb-8">
              NUNCA MÁS PIERDA UN <br />
              LEAD POR <span className="text-construction-orange italic">TARDAR.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-widest">Cualificación Semántica</h4>
                  <p className="text-slate-500 text-sm">Nuestro sistema entiende si el cliente quiere una reforma seria o si solo está comparando precios.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-widest">Agendado Directo</h4>
                  <p className="text-slate-500 text-sm">Si el lead es cualificado, el bot le ofrece sus huecos libres en tiempo real.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="bg-concrete-gray py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Respuesta", val: "<30 SEG", desc: "Velocidad Industrial" },
              { label: "Eficiencia", val: "+45%", desc: "Optimización Procesos" },
              { label: "Disponibilidad", val: "24/7", desc: "Fábrica de Leads" },
              { label: "Cierre", val: "X4", desc: "Más Probabilidades" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l-2 border-construction-orange/30 pl-4">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="block text-2xl font-black text-primary leading-none mb-1">{stat.val}</span>
                <span className="block text-[9px] font-bold text-construction-orange uppercase tracking-tighter">{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 px-8 bg-concrete-gray border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-10 border-t-8 border-construction-orange shadow-xl flex flex-col items-center h-full transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Para Quién</span>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-6 leading-tight">Empresas de reformas con flujo de leads</h3>
              <p className="text-[11px] text-slate-500 uppercase font-black leading-relaxed tracking-wider max-w-[280px]">Para el dueño que ya invierte en marketing pero siente que su equipo (o él mismo) no da abasto para responder a tiempo.</p>
            </div>
            
            <div className="bg-white p-10 border-t-8 border-construction-orange shadow-xl flex flex-col items-center h-full transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Qué Hacemos</span>
              <h3 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tighter mb-6 leading-tight">Industrializamos la respuesta y el filtrado</h3>
              <p className="text-[11px] text-slate-500 uppercase font-black leading-relaxed tracking-wider max-w-[280px]">Integramos un motor de inteligencia artificial en su WhatsApp actual que atiende en 30 segundos, cualifica cada lead y agenda visitas reales automáticamente.</p>
            </div>

            <div className="bg-white p-10 border-t-8 border-construction-orange shadow-xl flex flex-col items-center h-full transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Por qué nosotros</span>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-6 leading-tight">No somos otra agencia de marketing</h3>
              <p className="text-[11px] text-slate-500 uppercase font-black leading-relaxed tracking-wider max-w-[280px]">Venimos del sector. Hablamos el lenguaje de la obra. No le vendemos "humo", le vendemos una operativa que funciona.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple/Fast Process Section */}
      <section className="py-24 px-8 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-h2 text-primary text-4xl mb-6 font-black uppercase tracking-tighter">
                SENCILLO. RÁPIDO. <br />
                <span className="text-construction-orange">SIN QUE TENGAS QUE APRENDER</span> NADA NUEVO.
              </h2>
              <div className="space-y-6 mt-10">
                {[
                  { title: "Diagnóstico Inicial", desc: "Detectamos las fugas de dinero en tu proceso actual." },
                  { title: "Configuración Técnica", desc: "Montamos toda la infraestructura por ti." },
                  { title: "Puesta en Marcha", desc: "Activamos el sistema y formamos a tu equipo." },
                  { title: "Seguimiento Continuo", desc: "Aseguramos que el sistema escale con tu negocio." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-concrete-gray flex items-center justify-center shrink-0 text-xs font-black text-primary">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm tracking-widest mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-primary p-12 text-white border-b-8 border-construction-orange shadow-2xl">
                 <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter italic">EL MOTOR DE LA OPERATIVA</h3>
                 <div className="space-y-4">
                   {[
                     "WhatsApp Business API",
                     "ManyChat Pro",
                     "Calendly Multiagente",
                     "Presupuestos PDF Industriales",
                     "Dashboard de Ventas Real-Time",
                     "Recordatorios y Seguimiento",
                     "Soporte Técnico Especializado"
                   ].map((tool, i) => (
                     <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-0">
                       <CheckCircle2 size={16} className="text-construction-orange" />
                       <span className="text-xs font-bold uppercase tracking-[0.2em]">{tool}</span>
                     </div>
                   ))}
                 </div>
               </div>
               <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-concrete-gray border-2 border-slate-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Leakage Calculator */}
      <section className="py-24 px-8 bg-concrete-gray border-y border-slate-200" id="calculadora">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 border-2 border-primary shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-construction-orange text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest">
              Herramienta de Diagnóstico
            </div>
            
            <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-8 leading-none">
              CALCULE SU <span className="text-construction-orange">FUGA DE DINERO</span> MENSUAL
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Leads Mensuales no respondidos al momento</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={leads} 
                      onChange={(e) => setLeads(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-construction-orange" 
                    />
                    <span className="text-primary font-black text-xl w-12 text-right">{leads}</span>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase">
                    <span>1 Lead</span>
                    <span>100 Leads</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Valor medio de su obra (€)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
                    <input 
                      type="number" 
                      value={ticket} 
                      onChange={(e) => setTicket(parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-10 font-black text-primary focus:border-construction-orange outline-none transition-colors" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-primary p-12 text-white flex flex-col justify-center border-l-8 border-construction-orange">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Pérdida estimada mensual</span>
                <div className="text-5xl font-black text-construction-orange mb-4 leading-none tracking-tighter">
                  €{estimatedLoss.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400 uppercase leading-relaxed font-black tracking-wider">
                  Representa el volumen de negocio que su competencia está captando simplemente por ser más rápida que su equipo actual.
                </p>
                <Link to="/booking" className="mt-8 bg-white text-primary text-center py-4 text-xs font-black uppercase tracking-widest hover:bg-construction-orange hover:text-white transition-all">
                  Detener la fuga ahora
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Estimación conservadora basada en una tasa de pérdida del 15% por falta de respuesta inmediata</p>
        </div>
      </section>

      {/* Why We Are Better Section removed */}

      {/* Guaranteed Results Section */}
      <section className="py-24 bg-concrete-gray border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <span className="text-construction-orange font-black text-xs block mb-4 uppercase tracking-[0.3em]">MÉTRICAS DE ÉXITO</span>
              <h2 className="industrial-header text-4xl text-primary mb-6">LO QUE <span className="text-construction-orange">LOGRAMOS</span> CON NUESTROS PARTNERS</h2>
              <p className="text-slate-500 uppercase text-xs font-black tracking-widest leading-loose">
                No lanzamos una moneda al aire. Implementamos protocolos que han funcionado en más de 12 empresas de reformas en la Región de Murcia con resultados predecibles.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-300 border-2 border-slate-200 shadow-xl w-full md:w-auto">
              {[
                { label: "CUALIFICACIÓN", val: "85%", desc: "Leads Filtrados" },
                { label: "RESPUESTA", val: "30s", desc: "Tiempo Medio" },
                { label: "AHORRO TIEMPO", val: "15h", desc: "Semanales/Dueño" },
                { label: "RETORNO", val: "X4", desc: "Tasa de Cierre" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 text-center min-w-[200px]">
                  <span className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">{stat.label}</span>
                  <span className="block text-4xl font-black text-primary mb-2 italic leading-none">{stat.val}</span>
                  <span className="block text-[10px] font-bold text-construction-orange uppercase tracking-tighter">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-24 px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-4 italic">LA DIFERENCIA ES LA VELOCIDAD</h2>
            <p className="text-construction-orange uppercase text-xs font-bold tracking-widest">¿Cómo cambia su negocio con el sistema?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-2 border-white/10 shadow-2xl">
            {/* Situación Actual */}
            <div className="bg-primary p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500/10 text-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-red-500/20">SITUACIÓN ACTUAL</div>
              <h3 className="text-white font-black text-2xl mb-8 uppercase tracking-tighter">EL CAOS MANUAL</h3>
              <div className="space-y-6">
                {[
                  { label: "Respuesta Inicial", val: "2 - 12 Horas", sub: "Pierde el 70% de intención de compra" },
                  { label: "Cualificación", val: "Manual / Teléfono", sub: "El dueño pierde 3h al día filtrando curiosos" },
                  { label: "Seguimiento", val: "Inexistente / Post-it", sub: "Los presupuestos se olvidan en el cajón" },
                  { label: "Logística", val: "WhatsApp común", sub: "Errores de cita y solapamientos" }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 last:border-0 opacity-60">
                    <span className="block text-[10px] text-slate-400 uppercase font-black mb-1">{item.label}</span>
                    <span className="block text-xl font-bold text-white mb-1">{item.val}</span>
                    <span className="block text-[10px] text-red-400 italic">× {item.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Con NK AUTOMEC */}
            <div className="bg-primary/50 backdrop-blur-xl p-12 relative overflow-hidden border-l border-white/10">
               <div className="absolute inset-0 bg-construction-orange opacity-[0.03]"></div>
               <div className="absolute top-4 right-4 bg-construction-orange text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">CON NK AUTOMEC</div>
               <h3 className="text-white font-black text-2xl mb-8 uppercase tracking-tighter italic">LA FÁBRICA DE VENTAS</h3>
               <div className="space-y-6">
                 {[
                   { label: "Respuesta Inicial", val: "< 30 Segundos", sub: "Captación inmediata en el pico de interés" },
                   { label: "Cualificación", val: "Bot Automático", sub: "Reciba solo leads con presupuesto y fecha" },
                   { label: "Seguimiento", val: "CRM Industrial", sub: "Recordatorios cada 48h hasta el cierre" },
                   { label: "Logística", val: "Agenda Centralizada", sub: "Control total de visitas y obras" }
                 ].map((item, i) => (
                   <div key={i} className="border-b border-white/10 pb-4 last:border-0 relative">
                     <span className="block text-[10px] text-construction-orange uppercase font-black mb-1">{item.label}</span>
                     <span className="block text-xl font-bold text-white mb-1">{item.val}</span>
                     <div className="flex items-center gap-2">
                       <CheckCircle2 size={12} className="text-construction-orange" />
                       <span className="block text-[10px] text-slate-300 font-bold uppercase tracking-widest">{item.sub}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restored Impact Image Section */}
      <section className="h-[50vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="Skyscraper Industrial" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-8">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">ESTRUCTURAS RESISTENTES</h2>
          <p className="text-construction-orange text-xs font-black tracking-[0.4em] uppercase">SISTEMAS QUE AGUANTAN LA PRESIÓN DEL CRECIMIENTO</p>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-20 bg-primary text-white border-y-8 border-construction-orange overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                NO VENDEMOS <span className="text-construction-orange italic">HUMO</span>. <br />
                VENDEMOS <span className="text-white underline decoration-construction-orange decoration-4">SISTEMAS</span>.
              </h2>
              <p className="text-slate-400 text-lg font-bold uppercase tracking-widest leading-relaxed max-w-2xl">
                Arreglamos una fuga de dinero que ya existe en su negocio. No estamos aquí para hacerle una "web bonita", estamos aquí para industrializar su operativa.
              </p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm shadow-2xl">
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-construction-orange"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Lenguaje de Obra</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-construction-orange"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Negocio Real</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-construction-orange"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Cero Teoría</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restored Gallery Section */}
      <section className="py-24 px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/proceso" className="group overflow-hidden relative aspect-video bg-primary block">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 shadow-inner" alt="Planificación" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-black text-xs uppercase tracking-widest">Planificación Industrial</p>
              </div>
            </Link>
            <Link to="/proceso" className="group overflow-hidden relative aspect-video bg-primary block">
              <img src={DATA_TECH_IMG} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Tecnología" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-black text-xs uppercase tracking-widest">Tecnología de Datos</p>
              </div>
            </Link>
            <Link to="/booking" className="group overflow-hidden relative aspect-video bg-primary block">
              <img src={OFFICE_IMG} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Consultoría" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-black text-xs uppercase tracking-widest">Consultoría Elite</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios de Ingeniería Section */}
      <section className="py-24 px-8 bg-white" id="sistema">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-h2 text-primary text-4xl md:text-6xl mb-4 font-black uppercase tracking-tighter italic leading-none">TU EMPRESA DE <span className="text-construction-orange">REFORMAS,</span> <br /> FUNCIONANDO SIN TI.</h2>
            <p className="text-slate-500 uppercase text-xs font-black tracking-[0.2em] mb-4 max-w-2xl mx-auto">OLVÍDATE DE ESTAR PENDIENTE DEL TELÉFONO: TU SISTEMA ATIENDE, CUALIFICA Y AGENDA TUS OBRAS DE FORMA AUTOMÁTICA.</p>
            <div className="w-24 h-2 bg-construction-orange mx-auto"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {/* Phase 1: Captación */}
            <motion.div variants={itemVariants} className="bg-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <MessageSquare className="text-primary w-8 h-8" />
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">FASE 1: CAPTACIÓN</span>
                  </div>
                  <h3 className="font-h3 text-primary text-2xl md:text-5xl mb-6 font-bold uppercase tracking-tight italic">WhatsApp Automatizado</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/booking" className="bg-construction-orange text-white px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary transition-all">
                      Detener Fuga
                    </Link>
                    <Link to="/proceso" className="border-2 border-primary text-primary px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary hover:text-white transition-all">
                      Ver Flujo
                    </Link>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
                    No cambiamos su número. Integramos nuestra IA para que responda dudas técnicas, solicite fotos de la estancia y filtre a los curiosos antes de que usted pierda un segundo al teléfono.
                  </p>
                  
                  <div className="bg-white p-6 border-l-4 border-l-construction-orange font-mono text-xs shadow-sm max-w-md">
                    <span className="text-construction-orange font-bold uppercase block mb-1">MÉTRICA DE ÉXITO:</span> 
                    Respuesta en menos de 30 segundos al 100% de los leads entrantes.
                  </div>
                </div>
                <Link to="/proceso" className="relative h-[450px] overflow-hidden rounded shadow-2xl block">
                  <img src={WHATSAPP_IMG} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="WA Automation" />
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-8 text-center min-w-[200px] shadow-2xl">
                    <div className="text-5xl font-black leading-none mb-1">100%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">de ejecución</div>
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Phase 2: Logística */}
            <motion.div variants={itemVariants} className="bg-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <Link to="/proceso" className="order-2 md:order-1 relative h-[450px] overflow-hidden rounded shadow-2xl block">
                  <div className="relative h-full w-full">
                    <img src={OFFICE_IMG} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Agenda" />
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-8 text-center min-w-[200px] shadow-2xl">
                      <div className="text-5xl font-black leading-none mb-1">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest">de ejecución</div>
                    </div>
                  </div>
                </Link>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="text-primary w-8 h-8" />
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">FASE 2: LOGÍSTICA</span>
                  </div>
                  <h3 className="font-h3 text-primary text-2xl md:text-5xl mb-6 font-bold uppercase tracking-tight italic">Agenda Técnica</h3>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/booking" className="bg-construction-orange text-white px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary transition-all">
                      Agendar Demo
                    </Link>
                    <Link to="/proceso" className="border-2 border-primary text-primary px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary hover:text-white transition-all">
                      Detalles
                    </Link>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
                    Sincronización total con Google Calendar. El bot ofrece huecos libres y confirma citas automáticamente, enviando la ubicación GPS al cliente 1 hora antes de la visita.
                  </p>
                  
                  <div className="bg-white p-6 border-l-4 border-l-construction-orange font-mono text-xs shadow-sm max-w-md">
                    <span className="text-construction-orange font-bold uppercase block mb-1">MÉTRICA DE ÉXITO:</span> 
                    Reducción del 95% en los errores de agendado y absentismo de clientes.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phase 3: Cierre */}
            <motion.div variants={itemVariants} className="bg-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="text-primary w-8 h-8" />
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">FASE 3: CIERRE</span>
                  </div>
                  <h3 className="font-h3 text-primary text-2xl md:text-5xl mb-6 font-bold uppercase tracking-tight italic">Presupuesto Express</h3>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/booking" className="bg-construction-orange text-white px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary transition-all">
                      Probar Motor
                    </Link>
                    <Link to="/proceso" className="border-2 border-primary text-primary px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary hover:text-white transition-all">
                      PDF Ejemplo
                    </Link>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
                    Convertimos la visita técnica en un PDF profesional en minutos. Los datos recogidos por el bot se cruzan para generar el presupuesto sin errores de cálculo humanos.
                  </p>
                  
                  <div className="bg-white p-6 border-l-4 border-l-construction-orange font-mono text-xs shadow-sm max-w-md">
                    <span className="text-construction-orange font-bold uppercase block mb-1">MÉTRICA DE ÉXITO:</span> 
                    Presupuesto entregado al 100% de los clientes en menos de 24 horas.
                  </div>
                </div>
                <Link to="/proceso" className="relative h-[450px] overflow-hidden rounded shadow-2xl block">
                  <img src={BUDGET_IMG} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Budgeting" />
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-8 text-center min-w-[200px] shadow-2xl">
                    <div className="text-5xl font-black leading-none mb-1">100%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">de ejecución</div>
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Phase 4: Control */}
            <motion.div variants={itemVariants} className="bg-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <Link to="/proceso" className="order-2 md:order-1 relative h-[450px] overflow-hidden rounded shadow-2xl block">
                  <div className="relative h-full w-full">
                    <img src={RENTABILITY_IMG} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Control" />
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-8 text-center min-w-[200px] shadow-2xl">
                      <div className="text-5xl font-black leading-none mb-1">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest">de ejecución</div>
                    </div>
                  </div>
                </Link>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-4">
                    <BarChart3 className="text-primary w-8 h-8" />
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">FASE 4: CONTROL</span>
                  </div>
                  <h3 className="font-h3 text-primary text-2xl md:text-5xl mb-6 font-bold uppercase tracking-tight italic">Motor de Rentabilidad</h3>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/booking" className="bg-construction-orange text-white px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary transition-all">
                      Blindar Margen
                    </Link>
                    <Link to="/proceso" className="border-2 border-primary text-primary px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary hover:text-white transition-all">
                      Dashboard
                    </Link>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
                    Panel de control en tiempo real para monitorizar la salud financiera de sus obras. El sistema integra costes de material y horas hombre para blindar su margen neto.
                  </p>
                  
                  <div className="bg-white p-6 border-l-4 border-l-construction-orange font-mono text-xs shadow-sm max-w-md">
                    <span className="text-construction-orange font-bold uppercase block mb-1">MÉTRICA DE ÉXITO:</span> 
                    Control total sobre el 100% del flujo de caja y costes directos por obra.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phase 5: Escalado */}
            <motion.div variants={itemVariants} className="bg-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Rocket className="text-primary w-8 h-8" />
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">FASE 5: ESCALADO</span>
                  </div>
                  <h3 className="font-h3 text-primary text-2xl md:text-5xl mb-6 font-bold uppercase tracking-tight italic">Estructura de Crecimiento</h3>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/booking" className="bg-construction-orange text-white px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary transition-all">
                      Plan de Escala
                    </Link>
                    <Link to="/proceso" className="border-2 border-primary text-primary px-8 py-4 font-bold uppercase text-[12px] hover:bg-primary hover:text-white transition-all">
                      Estructura
                    </Link>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
                    Convertimos su empresa en una máquina predecible. Creamos protocolos de formación para que su equipo crezca sin que la calidad ni el margen se vean afectados.
                  </p>
                  
                  <div className="bg-white p-6 border-l-4 border-l-construction-orange font-mono text-xs shadow-sm max-w-md">
                    <span className="text-construction-orange font-bold uppercase block mb-1">MÉTRICA DE ÉXITO:</span> 
                    Capacidad de duplicar el volumen de obras sin aumentar sus horas de gestión personal.
                  </div>
                </div>
                <Link to="/proceso" className="relative h-[450px] overflow-hidden rounded shadow-2xl block">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Scaling" />
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-8 text-center min-w-[200px] shadow-2xl">
                    <div className="text-5xl font-black leading-none mb-1">X2</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">Capacidad instalada</div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialized sections removed */}

      {/* FAQ Quick Section */}
      <section className="py-24 px-8 bg-concrete-gray border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-primary text-4xl mb-4 font-black uppercase tracking-tighter">RESOLVEMOS TUS DUDAS</h2>
            <p className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.2em]">Respondemos aquí las inquietudes más habituales</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "¿Esto es marketing?", a: "No. El marketing atrae leads. Nosotros arreglamos lo que sucede DESPUÉS de que el lead llega: la respuesta, el filtrado y la cita. Arreglamos una fuga de dinero que ya tiene." },
              { q: "¿Tengo que cambiar mi número de WhatsApp?", a: "No. Integramos nuestra tecnología en su flujo actual para que no pierda su número ni sus contactos, simplemente lo convertimos en una herramienta de cierre neumático." },
              { q: "¿Cuánto tiempo tarda?", a: "En 7-10 días su sistema de automatización e integración puede estar operativo y filtrando clientes 24/7." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border-2 border-slate-200 hover:border-construction-orange transition-all">
                <h4 className="font-bold text-primary text-sm uppercase mb-3 flex items-center gap-2">
                  <span className="text-construction-orange">?</span> {item.q}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wide font-medium">{item.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/faq" className="text-construction-orange font-black text-xs uppercase tracking-widest border-b-2 border-construction-orange pb-1 hover:text-primary hover:border-primary transition-all">
              Ver todas las preguntas frecuentes
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 px-8 bg-white industrial-grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="industrial-header text-primary text-4xl mb-4">ESPECIALIZACIÓN SECTORIAL</h2>
            <p className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.2em]">Sistemas probados en situaciones reales</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Reformas Integrales", icon: "RI" },
              { name: "Sistemas de Climatización", icon: "SC" },
              { name: "Carpintería Industrial", icon: "CI" },
              { name: "Instalaciones Eléctricas", icon: "IE" }
            ].map((sector, i) => (
              <div key={i} className="bg-white p-8 border-2 border-slate-100 flex flex-col items-center text-center hover:border-construction-orange transition-all">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-black mb-4 text-xs">
                  {sector.icon}
                </div>
                <span className="text-xs font-black uppercase text-primary tracking-widest">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary py-16 px-12 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-construction-orange opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <h2 className="font-h2 text-white text-3xl md:text-5xl mb-6 font-black uppercase tracking-tighter">¿Listo para industrializar su negocio?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-body">
            Agende una consultoría de 15 minutos para ver cómo 'El Sistema' puede integrarse en su estructura actual y empezar a generar beneficios inmediatos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/booking" className="bg-construction-orange text-white px-10 py-5 font-bold uppercase text-sm border-b-4 border-[#632800] hover:translate-y-px transition-all inline-block">
              Reservar Cita Directa
            </Link>
            <button 
              onClick={handleDownloadDossier}
              className="bg-transparent text-white border-2 border-white/30 px-10 py-5 font-bold uppercase text-sm hover:bg-white hover:text-primary transition-all cursor-pointer"
            >
              Descargar Dossier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
