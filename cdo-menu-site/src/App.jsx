import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MermaidDiagram from './components/MermaidDiagram';
import SeedIdeas from './components/SeedIdeas';
import IntakeQuestions from './components/IntakeQuestions';
import TableOfContents from './components/TableOfContents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function App() {
  const [selectedItem, setSelectedItem] = useState('documentation');
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Load markdown content when component mounts
    fetch('/CDO_Club_Website_Analysis_Report.md')
      .then(response => response.text())
      .then(text => setMarkdownContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  const menuItems = [
    { id: 'documentation', label: 'CDO Club Site Documentation' },
    { id: 'structure', label: 'Site Structure' },
    { id: 'seed-ideas', label: 'Seed Ideas 💡' },
    { id: 'intake-questions', label: 'Intake Questions 📋' },
    { id: 'contact', label: 'Contact' },
  ];

  const mermaidChart = `graph TD
    A[CDO Club Home<br/>cdoclub.com] --> B[CDO Summits<br/>cdosummit.com]
    A --> C[Careers /<br/>Executive Search]
    A --> D[Membership]
    A --> E[Publications]
    A --> F[Endorsements]
    A --> G[CDO of the Year]
    A --> H[Media Room]
    A --> I[Hall of Fame]
    A --> J[Member Login]
    
    B --> B1[CDAO Summits]
    B --> B2[CAIO Summits]
    B --> B3[Past Events]
    B --> B4[Register]
    
    C --> C1[Job Postings<br/>GOLD+ Members]
    C --> C2[Job Updates<br/>SILVER+ Members]
    C --> C3[Career Portal]
    
    D --> D1[Basic - FREE]
    D --> D2[Silver - $495/yr]
    D --> D3[Gold - $995/yr]
    D --> D4[Platinum - $1,495/yr]
    D --> D5[Corporate - $4,995/yr]
    
    E --> E1[CAIO Talent Map<br/>Coming Soon]
    E --> E2[CDO Talent Map 2013]
    E --> E3[101 CDOs to CEO<br/>Bain Capital Report]
    E --> E4[Monthly Jobs Updates<br/>2014-2024]
    
    F --> F1[CAIO/CDAO Summits<br/>23 endorsements]
    F --> F2[IBM Summits<br/>59 endorsements]
    F --> F3[Historical Events<br/>205 endorsements]
    
    G --> G1[CDAO of the Year]
    G --> G2[CDO of the Year]
    G --> G3[Past Winners<br/>2013-2022]
    
    H --> H1[Media Coverage<br/>28 pages]
    H --> H2[Press Releases<br/>10 pages]
    H --> H3[Photo Gallery]
    H --> H4[Video Gallery]
    H --> H5[Logos & Assets]
    H --> H6[Contact Info]
    
    I --> I1[CDOs → CEO<br/>101+ tracked]
    I --> I2[CDOs → Board<br/>100+ tracked]
    I --> I3[CDAOs → CEO]
    I --> I4[CDAOs → Board]
    
    style A fill:#e1f5ff
    style B fill:#ffe1e1
    style D fill:#e1ffe1
    style E fill:#fff3e1`;

  const renderContent = () => {
    switch (selectedItem) {
      case 'documentation':
        return (
          <>
            <TableOfContents markdownContent={markdownContent} />
            <div className="page-content markdown-content">
              {markdownContent ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
              ) : (
                <p>Loading documentation...</p>
              )}
            </div>
          </>
        );
      case 'structure':
        return (
          <div className="page-content">
            <h2>Site Structure</h2>
            <p>Interactive diagram showing the complete CDO Club website structure and navigation hierarchy.</p>
            <MermaidDiagram chart={mermaidChart} />
          </div>
        );
      case 'seed-ideas':
        return <SeedIdeas />;
      case 'intake-questions':
        return <IntakeQuestions />;
      case 'contact':
        return (
          <div className="page-content contact-page">
            <div className="contact-container">
              <div className="contact-header">
                <div className="avatar-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="avatar-icon">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h1 className="contact-name">Tiran Dagan</h1>
                <p className="contact-title">Principal Advisor</p>
              </div>

              <div className="contact-cards">
                <a href="https://signalsphere.net" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <div className="card-label">Website</div>
                    <div className="card-value">SignalSphere.net</div>
                  </div>
                  <div className="card-arrow">→</div>
                </a>

                <a href="tel:+19088732425" className="contact-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <div className="card-label">Mobile</div>
                    <div className="card-value">+1 (908) 873-2425</div>
                  </div>
                  <div className="card-arrow">→</div>
                </a>

                <a href="mailto:tiran@signalsphere.net" className="contact-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <div className="card-label">Email</div>
                    <div className="card-value">tiran@signalsphere.net</div>
                  </div>
                  <div className="card-arrow">→</div>
                </a>
              </div>

              <div className="contact-footer">
                <p>Available for consulting and advisory services</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar 
        selectedItem={selectedItem}
        onItemSelect={setSelectedItem}
        menuItems={menuItems}
      />
      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default App;

