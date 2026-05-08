import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ScanFace, DraftingCompass, Rocket, Gauge, CheckCircle, ArrowRight, User, Settings } from 'lucide-react';

const PRECISION_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ooOmuncsw03bm22tLucbzjpaQ8-1YUsRi7XGfUmBuSrUvzmwzQTPfmA_zooqvXBCL02TmEG7JEtXZuhp1_opLPPI5ZCx4eii0ZmA1w2gmcbxX-hG0yPYOs0_pjA0SpTVvx5ucXLSsCMuuWRyEqbsyhEslp3DkDg4TpxhGcCaSvPpcBcpav-lfXuTqptBjp0r1pstu0-qkfBKEbdGbh8Zf5oouoei6oCsRfOE0XSfJ6f-5-RMq-_gmxAIvhmcf1pXsD2l0cGIgw";
const TECH_LEAD_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuA_SAxIZSj9Pvl6SS7BvKg9EAFHCix5z6lPaK2WqoTfnkJG7-ZlItvue1wLxXzEiMbmKd5lGpXvw4OoHyDf8aYk-m91GJD3KmKXTUAPNQZ9WPm2y3BlSD9lu-0WXNRgzkMZJ1TEQ_4UQdJJtI6eof-gXksfOCJu97qoPCiEIxdcC8KNdgo6rUw3uD9T49Q0C6M6QrlDYrl8rD9uwYFTG6LZoVsB187mpDIq195UPpargIaPSPmYACN_SPyVQzeDtKMbHI8KfaPxBg";

const StepCard = ({ step, icon: Icon, title, desc, progress }: { step: string, icon: any, title: string, desc: string, progress: number }) => (
  <div className="group relative">
    <div className="flex flex-col items-center md:items-start">
      <div className="w-24 h-24 bg-white industrial-border flex items-center justify-center mb-8 group-hover:border-construction-orange transition-colors shadow-sm">
        <Icon className="text-slate-400 group-hover:text-construction-orange transition-colors" size={40} />
      </div>
      <div className="w-full h-2 bg-slate-200 mb-8 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full bg-construction-orange"
        />
      </div>
      <span className="text-[10px] font-black text-construction-orange uppercase tracking-[0.3em] mb-2">PASO {step}</span>
      <h3 className="font-h3 text-2xl text-primary mb-4 font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-body">{desc}</p>
    </div>
  </div>
);

const Process = () => {
  const handleDownloadDossier = (e: React.MouseEvent) => {
    e.preventDefault();
    const dossierContent = `
DOSSIER TÉCNICO NK AUTOMEC 2024
----------------------------------
METODOLOGÍA DE ALTO RENDIMIENTO

1. DIAGNÓSTICO: Análisis exhaustivo y escaneo 3D.
2. CONFIGURACIÓN: Modelado técnico y presupuestos cerrados.
3. LANZAMIENTO: Ejecución coordinada sin desviaciones.
4. OPTIMIZACIÓN: Control de calidad e indicadores clave.

Tiempos promedio:
- Diagnóstico a ejecución: 7 días.
- Desviación media: <2%
- Incremento eficiencia: +45%

Sede Central: Cieza, Murcia.
Contacto: 623 397 132 | info@nk-auto-mec.com
Horario de Atención: Lunes a Sábado hasta las 21:00
    `;
    const blob = new Blob([dossierContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dossier_Tecnico_NK_AUTOMEC.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center industrial-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-construction-orange font-bold text-xs uppercase tracking-widest mb-4 block">Metodología de Alto Rendimiento</span>
          <h1 className="font-h1 text-5xl md:text-7xl text-primary mb-8 font-black uppercase tracking-tighter leading-none">Ingeniería en cada paso.</h1>
          <p className="text-lg text-slate-600 mb-12 max-w-xl font-body leading-relaxed">
            En NK AUTOMEC, transformamos la gestión de reformas en una línea de montaje industrial: precisa, transparente y orientada a resultados tangibles.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/booking" 
              className="bg-construction-orange text-white px-10 py-5 font-black uppercase tracking-widest shadow-xl hover:brightness-110 transition-all text-xs inline-block"
            >
              Empezar Proyecto
            </Link>
            <button 
              onClick={handleDownloadDossier}
              className="border-2 border-slate-300 text-primary px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all text-xs cursor-pointer"
            >
              Dossier Técnico
            </button>
          </div>
        </motion.div>
        <div className="relative">
          <div className="aspect-video bg-white industrial-border p-2 shadow-2xl">
            <img 
              src={PRECISION_IMG} 
              className="w-full h-full object-cover grayscale contrast-125" 
              alt="Precision" 
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-primary text-white p-10 shadow-2xl hidden lg:block border-b-8 border-construction-orange">
            <span className="block text-5xl font-black leading-none mb-2 tracking-tighter underline decoration-construction-orange decoration-4">100%</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Control de Ejecución</span>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="hidden md:block absolute w-full h-[2px] bg-slate-200 mt-12 -z-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <StepCard 
            step="01" 
            icon={ScanFace} 
            title="Diagnóstico" 
            desc="Análisis exhaustivo del estado actual y detección de puntos críticos de intervención." 
            progress={25}
          />
          <StepCard 
            step="02" 
            icon={DraftingCompass} 
            title="Configuración" 
            desc="Modelado técnico y planificación de presupuestos cerrados sin desviaciones." 
            progress={50}
          />
          <StepCard 
            step="03" 
            icon={Rocket} 
            title="Lanzamiento" 
            desc="Ejecución coordinada con nuestros equipos propios. Rapidez sin compromisos." 
            progress={75}
          />
          <StepCard 
            step="04" 
            icon={Gauge} 
            title="Optimización" 
            desc="Control de calidad final y entrega de garantías mecánicas y estéticas." 
            progress={100}
          />
        </div>
      </section>

      {/* Deep Detail Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 bg-white industrial-border p-12 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-start mb-12">
              <h2 className="font-h2 text-4xl text-primary font-black uppercase tracking-tighter">Diagnóstico Digital</h2>
              <span className="bg-concrete-gray px-4 py-2 font-black text-[10px] text-primary uppercase tracking-widest border border-slate-200">Alta Densidad de Datos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ul className="space-y-6">
                {[
                  "Escaneo 3D de estructuras",
                  "Auditoría de suministros",
                  "Estudio de mermas técnicas"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center font-body text-slate-600">
                    <CheckCircle className="text-construction-orange shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-6">
                {[
                  "Informe de viabilidad técnica",
                  "Cálculo de huella logística",
                  "Presupuesto paramétrico"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center font-body text-slate-600">
                    <CheckCircle className="text-construction-orange shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            <div className="flex items-center justify-between mt-20 pt-10 border-t border-slate-100">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl grayscale">
                  <img src={TECH_LEAD_IMG} alt="Engineer" />
                </div>
              <div>
                <p className="font-bold text-lg text-primary uppercase leading-tight">Ing. Marcos García</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Jefe de Diagnóstico Técnico</p>
              </div>
            </div>
            <ArrowRight className="text-slate-200 hidden md:block" size={48} />
          </div>
        </div>

        <div className="md:col-span-4 bg-primary text-white p-12 flex flex-col justify-center text-center industrial-border border-l-8 border-construction-orange">
        <div className="w-24 h-24 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-8 border border-white/10">
          <Rocket className="text-construction-orange" size={40} />
        </div>
        <p className="font-h1 text-7xl mb-4 font-black tracking-tighter">07 Días</p>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-construction-orange mb-8">Tiempo Promedio</p>
        <p className="text-slate-400 font-body text-sm leading-relaxed max-w-[200px] mx-auto">De diagnóstico inicial a ejecución de obra.</p>
      </div>
  </section>

    {/* CTA Banner */}
    <section className="max-w-7xl mx-auto px-8 mt-12">
      <div className="bg-construction-orange p-16 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl">
        <div className="text-center md:text-left text-white">
          <h2 className="font-h2 text-4xl mb-4 font-black uppercase tracking-tighter">¿Listo para la transformación?</h2>
          <p className="text-sm opacity-80 max-w-md font-body leading-relaxed">Solicite su diagnóstico hoy mismo y tome el control absoluto de su inversión industrial.</p>
        </div>
        <Link 
          to="/booking" 
          className="bg-white text-construction-orange px-12 py-6 font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all text-xs border-b-4 border-slate-200 inline-block"
        >
          Agendar Consultoría
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Process;
