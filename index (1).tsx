
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SideDrawer from './components/SideDrawer';

const SECTOR_DETAILS = {
  construction: {
    title: "CONSTRUÇÃO CIVIL & INDÚSTRIA",
    description: "Transformamos o marketing de incorporadoras e indústrias de base com foco em performance e escala. Nossa abordagem une inteligência de dados com criatividade de alto nível para garantir resultados mensuráveis no VGV.",
    stats: [
      { label: "VGV Digital Gerido", value: "+R$ 500M" },
      { label: "Crescimento em ROAS", value: "150%" },
      { label: "Qualificação de Leads", value: "85%" }
    ],
    caseStudy: "Redução de 40% no CPL para uma das maiores incorporadoras do Sul do país através de segmentação preditiva via CRM."
  },
  maritime: {
    title: "DIVISÃO NÁUTICA DE ALTA PERFORMANCE",
    description: "Atendimento exclusivo para estaleiros e brokers de embarcações de alto padrão. Entendemos a jornada complexa do comprador de altíssimo poder aquisitivo e criamos experiências de marca que transcendem o digital.",
    stats: [
      { label: "Alcance Global", value: "Premium Audience" },
      { label: "Tempo de Jornada", value: "Lead-to-Sale optimized" },
      { label: "Posicionamento", value: "High-End" }
    ],
    caseStudy: "Campanha global de lançamento para Yacht de 80 pés resultando em 12 negociações qualificadas em menos de 45 dias."
  }
};

const TenessiLandingPage = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', cargo: '', empresa: '', segmento: '' });
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [selectedSector, setSelectedSector] = useState<null | keyof typeof SECTOR_DETAILS>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const validateField = (name: string, value: string) => {
    if (!value || value.trim() === '') return 'Obrigatório';
    if (name === 'email' && !value.includes('@')) return 'E-mail inválido';
    return '';
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Diagnóstico solicitado com sucesso!');
  };

  return (
    <div className="tenessi-page">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-main">TENESSI</span>
            <span className="logo-sub">CONSULTORIA ESTRATÉGICA</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#setores">Setores</a>
            <a href="#diagnostic">Contato</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text-box">
            <span className="hero-tag">ESTRATÉGIA & PERFORMANCE</span>
            <h1>ESTRATÉGIA DIGITAL PARA LIDERANÇA DE MERCADO.</h1>
            <p className="hero-subtitle">Transformamos dados em resultados previsíveis para empresas de alto padrão.</p>
            <button className="gold-button" onClick={() => document.getElementById('diagnostic')?.scrollIntoView({behavior: 'smooth'})}>SOLICITAR DIAGNÓSTICO</button>
          </div>
        </div>
      </section>

      <section id="setores" className="sectors">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">QUEM ATENDEMOS</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-card construction" onClick={() => { setSelectedSector('construction'); setIsDrawerOpen(true); }}>
              <div className="sector-overlay"></div>
              <div className="sector-info"><h3>CONSTRUÇÃO & INDÚSTRIA</h3></div>
            </div>
            <div className="sector-card maritime" onClick={() => { setSelectedSector('maritime'); setIsDrawerOpen(true); }}>
              <div className="sector-overlay"></div>
              <div className="sector-info"><h3>DIVISÃO NÁUTICA</h3></div>
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostic" className="diagnostic">
        <div className="container">
          <form className="diagnostic-form" onSubmit={handleSubmit}>
            <h2 className="diagnostic-title">AGENDE SEU DIAGNÓSTICO</h2>
            <div className="form-grid">
              <input name="nome" placeholder="NOME" onChange={handleInputChange} required />
              <input name="email" placeholder="E-MAIL" onChange={handleInputChange} required />
              <input name="empresa" placeholder="EMPRESA" onChange={handleInputChange} required />
              <select name="segmento" onChange={handleInputChange} required>
                <option value="">SELECIONE O SETOR</option>
                <option value="construcao">Construção Civil</option>
                <option value="nautica">Náutica</option>
              </select>
            </div>
            <button type="submit" className="gold-submit">ENVIAR AGORA</button>
          </form>
        </div>
      </section>

      {selectedSector && (
        <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title={SECTOR_DETAILS[selectedSector].title}>
          <div className="drawer-inner-content">
            <p>{SECTOR_DETAILS[selectedSector].description}</p>
            <div className="drawer-stats">
              {SECTOR_DETAILS[selectedSector].stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </SideDrawer>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<TenessiLandingPage />);
}
