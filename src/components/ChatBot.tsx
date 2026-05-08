import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el experto técnico de NK AUTOMEC. Ayudamos a empresas de reformas a industrializar sus ventas. ¿Qué te gustaría saber hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_QUESTIONS = [
    "¿Cómo capto más leads?",
    "¿Qué es industrializar ventas?",
    "¿Cuánto tiempo se tarda?",
    "Quiero una consultoría técnica"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const getSimulatedResponse = (input: string): string => {
    const text = input.toLowerCase();
    
    if (text.includes('lead') || text.includes('cliente') || text.includes('vender') || text.includes('captar')) {
      return 'Muchos dueños de reformas pierden dinero porque tardan horas en responder. Nuestro sistema automatiza WhatsApp para que el lead reciba respuesta en menos de 1 minuto y agende una cita solo en tu Calendly. Eso es captación real.';
    }
    
    if (text.includes('industrializar') || text.includes('sistema') || text.includes('metodología')) {
      return 'Industrializar significa que tus ventas no dependen de tu tiempo. Implementamos flujos automáticos en WhatsApp y Calendly que funcionan 24/7. Tú te centras en la obra, el sistema se centra en el cliente.';
    }

    if (text.includes('consultoría') || (text.includes('cita')) || (text.includes('reunión'))) {
      return 'Perfecto. La Consultoría Técnica es gratuita y analizamos tu sistema actual para ver dónde estás perdiendo dinero. Pulsa el botón "RESERVAR CONSULTORÍA" en la web para elegir tu hora.';
    }
    
    if (text.includes('tiempo') || text.includes('tarda') || text.includes('duración')) {
      return 'Nuestros sistemas se configuran en pocos días. No es un proyecto de meses; en una semana puedes tener tu flujo de WhatsApp automatizado captando leads de calidad.';
    }

    if (text.includes('precio') || text.includes('costo') || text.includes('vale')) {
      return 'La inversión varía según el volumen de leads que manejes. Sin embargo, el sistema se paga solo al evitar que pierdas clientes por falta de seguimiento. Hablemos en una consultoría gratuita para darte un presupuesto exacto.';
    }

    if (text.includes('gracias') || text.includes('ok') || text.includes('entendido')) {
      return '¡De nada! Si estás listo para escalar tu empresa de reformas, no dudes en agendar tu consultoría técnica gratuita. ¡Vamos a por ello!';
    }

    return 'Interesante pregunta. Como expertos en automatización para construcción, te diría que lo más importante es sistematizar el contacto inicial. ¿Quieres que te explique cómo lo hacemos con WhatsApp?';
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage = text.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const delay = Math.random() * 500 + 700; // Variable delay for natural feel

    setTimeout(() => {
      const assistantContent = getSimulatedResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
      setIsLoading(false);
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white border-4 border-primary shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-construction-orange flex items-center justify-center border-2 border-white">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest leading-none">NK EXPERT</h4>
                  <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Soporte Técnico Activo
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:text-construction-orange transition-colors"
                id="close-chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
            >
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`p-4 text-sm shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-primary text-white font-bold' 
                      : 'bg-white text-slate-700 border-l-4 border-construction-orange'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-slate-200 p-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.div>
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.div>
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 bg-slate-50 overflow-x-auto flex gap-2 no-scrollbar">
              {!isLoading && SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(q)}
                  className="whitespace-nowrap px-3 py-1.5 bg-white border-2 border-slate-200 text-xs font-bold text-slate-600 hover:border-construction-orange hover:text-construction-orange transition-all uppercase tracking-tighter"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t-2 border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Duda sobre automatización..."
                  className="flex-1 bg-slate-100 border-2 border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-construction-orange transition-colors font-medium"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary px-4 text-white hover:bg-construction-orange transition-colors disabled:opacity-50"
                  id="send-message"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-construction-orange shadow-xl flex items-center justify-center text-white relative group"
        id="toggle-chat"
      >
        <div className="absolute inset-0 border-2 border-white/20 group-hover:scale-110 transition-transform duration-300"></div>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {/* Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
        )}
      </motion.button>
    </div>
  );
};
