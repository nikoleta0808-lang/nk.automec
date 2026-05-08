import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      const key = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || process.env.VITE_NK_API_KEY;

      if (!key || key === 'undefined' || key === 'MY_GEMINI_API_KEY') {
        return res.status(500).json({ error: 'API_KEY_MISSING' });
      }

      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `
          Eres el asistente virtual de NK AUTOMEC, una empresa de automatización para negocios de reformas y construcción. 
          Tu objetivo es resolver dudas de dueños de empresas de reformas de forma profesional, directa y experta.
          
          Puntos clave:
          1. Qué hacemos: Automatizamos la captación de leads por WhatsApp, ManyChat y Calendly. 
          2. Beneficio principal: Evitamos que pierdan dinero por responder tarde. Industrializamos su proceso de venta.
          3. Diferenciación: No somos una agencia de marketing tradicional, somos expertos en sistemas para construcción.
          4. Call to Action: Si la duda es compleja o quieren ver cómo se aplica a su negocio, pídeles que reserven una "Consultoría Técnica" gratuita en el botón de reserva.
          
          Habla siempre en español de España. Sé conciso. No utilices asteriscos ni ningún tipo de formato Markdown (negritas, cursivas).
        `
      });

      const chatHistory = messages
        .filter((_: any, index: number) => index > 0)
        .map((m: any) => ({
          role: (m.role === 'assistant' ? 'model' : 'user') as "model" | "user",
          parts: [{ text: m.content }]
        }));

      const result = await model.generateContent({
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ]
      });

      const response = await result.response;
      const text = response.text();
      
      res.json({ text });
    } catch (error: any) {
      console.error("Server API Error:", error);
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
