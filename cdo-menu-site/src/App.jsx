import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MermaidDiagram from './components/MermaidDiagram';
import SeedIdeas from './components/SeedIdeas';
import ReactMarkdown from 'react-markdown';

function App() {
  const [selectedItem, setSelectedItem] = useState('documentation');
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Load markdown content when component mounts
    fetch('/public/CDO_Club_Website_Analysis_Report.md')
      .then(response => response.text())
      .then(text => setMarkdownContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  const menuItems = [
    { id: 'documentation', label: 'CDO Club Site Documentation' },
    { id: 'structure', label: 'Site Structure' },
    { id: 'seed-ideas', label: 'Seed Ideas 💡' },
    { id: 'overview', label: 'Overview' },
    { id: 'resources', label: 'Resources' },
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
          <div className="page-content markdown-content">
            {markdownContent ? (
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            ) : (
              <p>Loading documentation...</p>
            )}
          </div>
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
      case 'overview':
        return (
          <div className="page-content">
            <h2>Overview</h2>
            <p>Overview content goes here.</p>
          </div>
        );
      case 'resources':
        return (
          <div className="page-content">
            <h2>Resources</h2>
            <p>Resources content goes here.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="page-content">
            <h2>Contact</h2>
            <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p><strong>Tiran Dagan</strong></p>
              <p>Principal Advisor, SignalSphere.net</p>
              <p>Mobile: 908-873-2425</p>
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

