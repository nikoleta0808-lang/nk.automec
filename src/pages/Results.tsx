import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, ShieldCheck, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CASE_1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBrb5dpWaZJDoCO57a_n5PfRlAgb-m7zjDI67zahddKv06ODKfurMjQBo5FRQ7DZfTQl0uulIamnepo0TasLgqPUBNlsElgvGVI59vAmm1Bq0vK1VYKCyGmYB7sm8VefStZ6EObs_b8VIT2B1PIvpeopVAnYT4V6GCHYxgncGht0g6ZBo1KhPMITm4Ae-jc3tRTGD5ezdwMr5rD6Ec2XDyc1bJ1NqPOFjFb8VtLUqx3Lr_J1tbollOBEKB71SNCdDUQuim_1MZpYA";
const CASE_2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuACXxJMya9AgEdSX51z4EV34p-TWH3ZPFXiaiFxB7ZC7areP-6rUqMcaZLinqLXMvsdQICtG-FtYpdPu_L0haUB0DjFdEi8NYMZs3FkgCltHdMJgz6Re1WzR8W0sUILMNcIWReXW1KyueHV6M5Avy1wiEj9Vb1pgYTi5CjPqHqCd1X6Ub2tb40O6l5ugifZUuy5zhIKQ-pRly7Q-BdlHdIsVP55JrXZDO90vtJYS0aib4fDc83hHVVdgV7g4XoG4RVYVc6RycBxtw";

const Results = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-24 px-8 industrial-grid relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Reporte de Eficiencia 2024</span>
            <h1 className="font-h1 text-5xl md:text-7xl text-primary mt-4 font-black uppercase tracking-tighter leading-none max-w-4xl">
              DEJA DE <span className="text-construction-orange italic">PERDER OBRAS</span> <br /> 
              POR NO ESTAR AL <span className="text-construction-orange underline decoration-8">TELÉFONO.</span>
            </h1>
            <p className="text-slate-500 mt-6 text-lg font-bold uppercase tracking-widest max-w-2xl">Tus citas se agendan solas, tu rentabilidad despega en piloto automático.</p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, label: 'Incremento Facturación', value: '+45%', trend: 'Media anual', color: 'text-construction-orange', bg: 'bg-concrete-gray' },
              { icon: Clock, label: 'Tiempo Recuperado', value: '-15h', trend: '/semana de gestión', color: 'text-white', bg: 'bg-primary' },
              { icon: ShieldCheck, label: 'Reducción de Errores', value: '82%', trend: 'En presupuestos', color: 'text-primary', bg: 'bg-white' }
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 industrial-border flex flex-col justify-between min-h-[250px] ${metric.bg}`}
              >
                <div>
                  <metric.icon className={`mb-6 ${metric.color === 'text-white' ? 'text-white/50' : metric.color}`} size={32} />
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${metric.color === 'text-white' ? 'text-white/50' : 'text-slate-400'}`}>{metric.label}</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className={`text-6xl font-black tracking-tighter ${metric.color}`}>{metric.value}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wide ${metric.color === 'text-white' ? 'text-white/50' : 'text-slate-400'}`}>{metric.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Key Metric Headline */}
          <div className="mb-24 text-center">
            <h2 className="font-h2 text-4xl text-primary font-black uppercase tracking-tighter mb-4">Todo lo necesario para industrializar su negocio</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Nuestro sistema no es un parche, es una infraestructura completa diseñada para que su empresa de reformas no pierda ni un solo cliente más.</p>
          </div>

          {/* Feature list from reference */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
            {[
              "WhatsApp Business API", "ManyChat Pro", "Calendly Multiagente", "Presupuestos PDF 2.0",
              "Dashboard de Ventas", "Recordatorios SMS/WA", "Seguimiento Automático", "Soporte Técnico 24/7"
            ].map((item, i) => (
              <div key={i} className="bg-white industrial-border p-6 flex flex-col justify-center items-center text-center group hover:border-construction-orange transition-all duration-300">
                <CheckCircle2 size={24} className="text-construction-orange mb-3 opacity-20 group-hover:opacity-100" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-h2 text-4xl text-primary font-black uppercase tracking-tighter">RESULTADOS REALES: <br /><span className="text-construction-orange italic">EMPRESAS QUE YA NO PIERDEN CLIENTES</span></h2>
              <p className="text-slate-600 mt-4 leading-relaxed font-body font-medium uppercase text-xs tracking-widest leading-loose">No son promesas, son datos. Así es como el sistema NK profesionaliza tu empresa y blinda tus márgenes.</p>
            </div>
            <div className="flex gap-2 h-10 w-16">
              <div className="flex-1 bg-construction-orange"></div>
              <div className="flex-1 bg-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                img: CASE_1, 
                tag: 'REFORMA INTEGRAL MADRID', 
                title: 'Residencial Serrano 40', 
                margin: '+€12k margen', 
                desc: 'Optimización del flujo de materiales y control de desviaciones en tiempo real mediante el dashboard de NK AUTOMEC.',
                progress: 95,
                specs: ['WhatsApp Bot', 'Presupuesto PDF 2.0', 'Multiagente']
              },
              { 
                img: CASE_2, 
                tag: 'NAVE INDUSTRIAL MURCIA', 
                title: 'Logística Pol. Oeste', 
                margin: '-22 días ejecución', 
                desc: 'Automatización de subcontratas y firmas digitales de partes de trabajo, eliminando 4 horas diarias de burocracia.',
                progress: 70,
                specs: ['Firma Digital', 'Control de Costes', 'Agenda Técnica']
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white industrial-border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={project.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    alt={project.title} 
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest self-start">{project.tag}</span>
                    <span className="bg-construction-orange text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest self-start shadow-lg">IMPLEMENTADO</span>
                  </div>

                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white p-4 industrial-border shadow-xl">
                      <BarChart3 className="text-construction-orange" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-h3 text-2xl text-primary font-black uppercase tracking-tight">{project.title}</h3>
                      <div className="flex gap-2 mt-2">
                        {project.specs.map(spec => (
                          <span key={spec} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-200 pr-2 last:border-0">{spec}</span>
                        ))}
                      </div>
                    </div>
                    <span className="bg-concrete-gray px-4 py-2 text-primary font-black text-sm uppercase tracking-tighter border border-slate-200 shadow-sm">{project.margin}</span>
                  </div>
                  
                  <p className="text-slate-500 mb-8 leading-relaxed font-body text-sm border-l-2 border-slate-100 pl-4">{project.desc}</p>
                  
                  <div className="space-y-4 bg-concrete-gray p-6 rounded">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-primary">
                      <span className="flex items-center gap-2"><Clock size={12} className="text-construction-orange" /> Cumplimiento de Fase</span>
                      <span className="text-construction-orange">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-construction-orange shadow-[0_0_10px_rgba(255,128,49,0.5)]"
                      ></motion.div>
                    </div>
                  </div>

                  <Link to="/booking" className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center group/btn cursor-pointer">
                    <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 group-hover/btn:text-primary transition-colors">Ver Detalles Técnicos</span>
                    <ChevronRight className="text-slate-300 group-hover/btn:text-construction-orange transform group-hover/btn:translate-x-2 transition-all" size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-32 px-8 bg-construction-orange text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <BarChart3 className="absolute -top-20 -right-20 w-96 h-96 rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-h2 text-4xl md:text-5xl mb-8 font-black uppercase tracking-tight">¿Su negocio está preparado para escalar?</h2>
          <p className="text-lg mb-12 opacity-90 font-body leading-relaxed max-w-2xl mx-auto">
            Realizamos una auditoría técnica de sus procesos actuales para detectar fugas de dinero y tiempo. Solo para empresas que buscan rentabilidad real.
          </p>
          <Link 
            to="/booking" 
            className="bg-primary text-white font-black text-sm px-12 py-6 hover:bg-slate-900 transition-all uppercase tracking-widest inline-block shadow-2xl"
          >
            Agendar Auditoría de Procesos
          </Link>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest opacity-60 italic">Recomendado para empresas con más de 3 obras simultáneas</p>
        </div>
      </section>
    </div>
  );
};

export default Results;
