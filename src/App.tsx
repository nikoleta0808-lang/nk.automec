import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ChatBot } from './components/ChatBot';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Booking from './pages/Booking';
import Process from './pages/Process';
import About from './pages/About';
import Results from './pages/Results';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contacto" element={<Booking />} />
          <Route path="/proceso" element={<Process />} />
          <Route path="/servicios" element={<Process />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/proyectos" element={<Results />} />
        </Routes>
        <ChatBot />
      </Layout>
    </Router>
  );
}
