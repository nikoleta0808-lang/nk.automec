import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Utility to get AI instance safely
const getAI = () => {
  try {
    // Try process.env (AI Studio / Node) or VITE_ prefix (Standard Vite/Vercel)
    const key = (import.meta.env?.VITE_GEMINI_API_KEY) || (process.env.GEMINI_API_KEY);
    if (!key || key === "undefined") return null;
    return new GoogleGenAI({ apiKey: key });
  } catch (e) {
    return null;
  }
};

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual de NK AUTOMEC, una empresa de automatización para negocios de reformas y construcción. 
Tu objetivo es resolver dudas de dueños de empresas de reformas de forma profesional, directa y experta.

Puntos clave:
1. Qué hacemos: Automatizamos la captación de leads por WhatsApp, ManyChat y Calendly. 
2. Beneficio principal: Evitamos que pierdan dinero por responder tarde. Industrializamos su proceso de venta.
3. Diferenciación: No somos una agencia de marketing tradicional, somos expertos en sistemas para construcción.
4. Call to Action: Si la duda es compleja o quieren ver cómo se aplica a su negocio, pídeles que reserven una "Consultoría Técnica" gratuita en el botón de reserva.

Habla siempre en español de España. Sé conciso. No utilices asteriscos ni ningún tipo de formato Markdown (negritas, cursivas).
`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el asistente de NK AUTOMEC. ¿En qué puedo ayudar a tu empresa de reformas hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = getAI();
      if (!ai) {
        throw new Error("API_KEY_MISSING");
      }

      // Prepare history: Gemini expects history to start with a 'user' message
      // and alternate between 'user' and 'model'.
      // We skip the first assistant message (greeting) to ensure this.
      const chatHistory = messages
        .filter((_, index) => index > 0) // Skip initial greeting
        .map(m => ({
          role: (m.role === 'assistant' ? 'model' : 'user') as "model" | "user",
          parts: [{ text: m.content }]
        }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION
        }
      });

      const assistantContent = (response.text || "Lo siento, tuve un pequeño problema técnico. ¿Podrías repetir tu pregunta?").replace(/\*/g, '');
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      let errorMessage = "Parece que hay un problema de conexión. Por favor, inténtalo de nuevo en un momento.";
      
      if (error.message === "API_KEY_MISSING") {
        errorMessage = "Lo siento, el asistente técnico no está configurado correctamente (falta API Key). Por favor, reserva una consultoría técnica para hablar con un humano.";
      } else if (error.message?.includes("403") || error.message?.includes("PERMISSION_DENIED")) {
        errorMessage = "Lo siento, no tengo permiso para responder en este momento (API Key inválida o sin permisos).";
      } else if (error.message?.includes("429") || error.message?.includes("RESOURCE_EXHAUSTED")) {
        errorMessage = "Estoy recibiendo demasiadas consultas ahora mismo. ¿Podrías esperar un minuto?";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white border-4 border-primary shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-construction-orange flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest">NK Asistente</h4>
                  <p className="text-[10px] text-slate-400">En línea ahora</p>
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
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-concrete-gray"
            >
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 text-sm ${
                    m.role === 'user' 
                      ? 'bg-primary text-white font-bold' 
                      : 'bg-white text-slate-700 border-2 border-slate-200'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-slate-200 p-3 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-construction-orange" />
                    <span className="text-xs font-bold text-slate-400">Pensando...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t-2 border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu duda..."
                  className="flex-1 bg-slate-100 border-2 border-slate-200 px-4 py-2 text-sm focus:outline-none focus:border-construction-orange transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary p-2 text-white hover:bg-construction-orange transition-colors disabled:opacity-50"
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
