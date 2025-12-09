import { useState, useEffect, useRef } from 'react';
import './SeedIdeas.css';

const SeedIdeas = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [hoveredIdea, setHoveredIdea] = useState(null);
  const [chartView, setChartView] = useState('radar');
  const canvasRef = useRef(null);

  const ideas = [
    {
      id: 1,
      title: "AI/Data Transformation Benchmarking Intelligence Platform",
      icon: "💎",
      tagline: "SaaS Platform for Competitive Intelligence",
      revenue: "$10K-$50K/year per enterprise",
      description: "Proprietary benchmarking platform leveraging 14 years of CDO Club data to provide real-time intelligence on AI/data maturity, compensation trends, and organizational structures.",
      features: [
        "Real-time AI/data maturity benchmarking vs. industry peers",
        "Live compensation data by sector/geography/seniority",
        "Organizational structure insights (reporting lines, team sizes)",
        "Predictive analytics on emerging role requirements",
        "Budget allocation trends across industries"
      ],
      metrics: {
        revenueScore: 9,
        scalability: 10,
        timeToMarket: 6,
        moatStrength: 10,
        marketSize: 9
      },
      color: "#4F46E5",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Executive Peer Advisory Boards",
      icon: "🤝",
      tagline: "Curated Cohort-Based Leadership Circles",
      revenue: "$15K-$25K per executive/year",
      description: "Exclusive 8-12 person peer advisory groups meeting monthly, facilitated by senior CDOs. NDA-protected safe space for vulnerable C-suite conversations.",
      features: [
        "Curated cohorts by industry, stage, or challenge area",
        "Monthly virtual sessions + 2 annual in-person retreats",
        "Facilitated problem-solving and vendor evaluations",
        "Crisis support and strategic guidance",
        "Direct access to David Mathison and CDO mentors"
      ],
      metrics: {
        revenueScore: 8,
        scalability: 6,
        timeToMarket: 9,
        moatStrength: 8,
        marketSize: 7
      },
      color: "#10B981",
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
      id: 3,
      title: "Corporate Intelligence Command Center",
      icon: "📊",
      tagline: "Real-Time Competitive Intelligence Dashboard",
      revenue: "$50K-$150K/year per enterprise",
      description: "Real-time competitive intelligence tracking talent movements, org structures, tech stacks, and strategic initiatives at competitor companies.",
      features: [
        "Talent movement alerts (CAIO/CDAO hires/departures)",
        "Organization chart intelligence at competitors",
        "Technology stack insights from top performers",
        "Strategic initiative tracking from summit conversations",
        "M&A and partnership signals from leadership changes"
      ],
      metrics: {
        revenueScore: 10,
        scalability: 9,
        timeToMarket: 7,
        moatStrength: 9,
        marketSize: 8
      },
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      title: "Vendor Validation & Matchmaking Platform",
      icon: "🔗",
      tagline: "Two-Sided Marketplace for Enterprise Solutions",
      revenue: "3-5% of deal value + $25K-$100K vendor listings",
      description: "Verified marketplace connecting technology vendors with 100K decision-makers. 'CDO Club Validated' badge drives trust and qualified leads.",
      features: [
        "'CDO Club Validated' certification for vendors",
        "AI-powered vendor recommendations based on needs",
        "Success fees on closed deals (3-5%)",
        "Member implementation reviews and ratings",
        "Quarterly pitch days with vetted vendors"
      ],
      metrics: {
        revenueScore: 10,
        scalability: 10,
        timeToMarket: 8,
        moatStrength: 7,
        marketSize: 10
      },
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 5,
      title: "CAIO/CDAO Accelerator Program",
      icon: "🚀",
      tagline: "6-Month Intensive AI/Data Function Launch Program",
      revenue: "$50K-$100K per company",
      description: "Structured 6-month program helping companies launch or scale their AI/Data function with assessment, strategy, implementation, and team building support.",
      features: [
        "Months 1-2: Assessment & strategy with expert advisors",
        "Months 3-4: Implementation support + fractional CAIO",
        "Months 5-6: Team building + vendor selection + governance",
        "Access to playbooks, templates, expert office hours",
        "Graduation showcase at Summit with case study"
      ],
      metrics: {
        revenueScore: 9,
        scalability: 5,
        timeToMarket: 8,
        moatStrength: 8,
        marketSize: 9
      },
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 6,
      title: "CAIO/CDAO Readiness Certification",
      icon: "🎓",
      tagline: "Industry-Recognized Professional Certification",
      revenue: "$2K-$5K per person ($20M-$50M at scale)",
      description: "Online certification program for aspiring CAIOs/CDAOs with coursework, capstone projects, and review by practicing executives from the community.",
      features: [
        "Comprehensive online coursework + capstone project",
        "Reviewed by practicing CAIOs from CDO Club community",
        "'CDO Club Certified' badge with industry recognition",
        "Corporate packages for L&D programs",
        "Potential 10,000+ certifications annually"
      ],
      metrics: {
        revenueScore: 10,
        scalability: 10,
        timeToMarket: 7,
        moatStrength: 9,
        marketSize: 10
      },
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  // Draw radar chart
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 60;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const metrics = ['Revenue Score', 'Scalability', 'Time to Market', 'Moat Strength', 'Market Size'];
    const angleStep = (Math.PI * 2) / metrics.length;

    // Draw grid and labels
    ctx.strokeStyle = '#e5e7eb';
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px sans-serif';

    for (let level = 1; level <= 5; level++) {
      ctx.beginPath();
      const r = (radius / 5) * level;
      
      for (let i = 0; i <= metrics.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw scale numbers
      if (level === 5) {
        const x = centerX + (r + 20) * Math.cos(-Math.PI / 2);
        const y = centerY + (r + 20) * Math.sin(-Math.PI / 2);
        ctx.fillStyle = '#9ca3af';
        ctx.textAlign = 'center';
        ctx.fillText('10', x, y);
      }
    }

    // Draw axes
    ctx.strokeStyle = '#d1d5db';
    metrics.forEach((metric, i) => {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle)
      );
      ctx.stroke();

      // Draw labels
      const labelX = centerX + (radius + 40) * Math.cos(angle);
      const labelY = centerY + (radius + 40) * Math.sin(angle);
      ctx.fillStyle = '#374151';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const words = metric.split(' ');
      words.forEach((word, idx) => {
        ctx.fillText(word, labelX, labelY + (idx - words.length / 2 + 0.5) * 14);
      });
    });

    // Draw data for selected or all ideas
    const ideasToDraw = selectedIdea ? [ideas.find(i => i.id === selectedIdea)] : ideas;
    
    ideasToDraw.forEach((idea, idx) => {
      const opacity = selectedIdea ? 1 : 0.3;
      ctx.strokeStyle = idea.color + Math.round(opacity * 255).toString(16).padStart(2, '0');
      ctx.fillStyle = idea.color + Math.round(opacity * 0.2 * 255).toString(16).padStart(2, '0');
      ctx.lineWidth = selectedIdea ? 3 : 2;

      ctx.beginPath();
      const metricValues = [
        idea.metrics.revenueScore,
        idea.metrics.scalability,
        idea.metrics.timeToMarket,
        idea.metrics.moatStrength,
        idea.metrics.marketSize
      ];

      metricValues.forEach((value, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const r = (radius / 10) * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw dots at data points
      metricValues.forEach((value, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const r = (radius / 10) * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, selectedIdea ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = idea.color;
        ctx.fill();
      });
    });

  }, [selectedIdea, ideas]);

  const calculateTotalScore = (metrics) => {
    return Object.values(metrics).reduce((a, b) => a + b, 0);
  };

  const sortedIdeas = [...ideas].sort((a, b) => 
    calculateTotalScore(b.metrics) - calculateTotalScore(a.metrics)
  );

  return (
    <div className="seed-ideas">
      <div className="seed-intro">
        <h1 className="seed-title">
          <span className="icon-burst">💡</span>
          Innovation Seed Ideas
        </h1>
        <p className="seed-subtitle">
          Six transformative monetization strategies leveraging CDO Club's unique assets
        </p>
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-value">100,000+</span>
            <span className="stat-label">C-Suite Members</span>
          </div>
          <div className="stat">
            <span className="stat-value">$1B+</span>
            <span className="stat-label">Influence Engine</span>
          </div>
          <div className="stat">
            <span className="stat-value">14 Years</span>
            <span className="stat-label">Proprietary Data</span>
          </div>
          <div className="stat">
            <span className="stat-value">$180M+</span>
            <span className="stat-label">Combined Revenue Potential</span>
          </div>
        </div>
      </div>

      <div className="ideas-grid">
        {ideas.map((idea, index) => (
          <div
            key={idea.id}
            className={`idea-card ${selectedIdea === idea.id ? 'selected' : ''} ${hoveredIdea === idea.id ? 'hovered' : ''}`}
            style={{
              '--card-color': idea.color,
              '--card-gradient': idea.gradient,
              animationDelay: `${index * 0.1}s`
            }}
            onMouseEnter={() => setHoveredIdea(idea.id)}
            onMouseLeave={() => setHoveredIdea(null)}
            onClick={() => setSelectedIdea(selectedIdea === idea.id ? null : idea.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="card-header">
                  <span className="card-icon">{idea.icon}</span>
                  <div className="card-number">#{idea.id}</div>
                </div>
                <h3 className="card-title">{idea.title}</h3>
                <p className="card-tagline">{idea.tagline}</p>
                <div className="card-revenue">{idea.revenue}</div>
                
                <div className="mini-metrics">
                  {Object.entries(idea.metrics).map(([key, value]) => (
                    <div key={key} className="mini-metric">
                      <div className="mini-metric-bar" style={{ width: `${value * 10}%` }}></div>
                    </div>
                  ))}
                </div>

                <div className="card-score">
                  <div className="score-circle">
                    <svg viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={idea.color}
                        strokeWidth="8"
                        strokeDasharray={`${calculateTotalScore(idea.metrics) * 2.827} 282.7`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="score-text">{calculateTotalScore(idea.metrics)}/50</div>
                  </div>
                </div>

                <button className="expand-btn">
                  View Details →
                </button>
              </div>

              {selectedIdea === idea.id && (
                <div className="card-expanded">
                  <p className="expanded-description">{idea.description}</p>
                  
                  <div className="features-list">
                    <h4>Key Features</h4>
                    <ul>
                      {idea.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="metrics-detail">
                    <h4>Detailed Metrics</h4>
                    <div className="metrics-bars">
                      {Object.entries(idea.metrics).map(([key, value]) => (
                        <div key={key} className="metric-bar-container">
                          <div className="metric-label">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="metric-bar-outer">
                            <div 
                              className="metric-bar-inner" 
                              style={{ 
                                width: `${value * 10}%`,
                                background: idea.gradient
                              }}
                            >
                              <span className="metric-value">{value}/10</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="data-visualization">
        <div className="viz-header">
          <h2>Comparative Analysis</h2>
          <div className="viz-controls">
            <button 
              className={chartView === 'radar' ? 'active' : ''}
              onClick={() => setChartView('radar')}
            >
              Radar Chart
            </button>
            <button 
              className={chartView === 'ranking' ? 'active' : ''}
              onClick={() => setChartView('ranking')}
            >
              Rankings
            </button>
          </div>
        </div>

        {chartView === 'radar' ? (
          <div className="radar-container">
            <canvas ref={canvasRef} width="700" height="700"></canvas>
            <div className="legend">
              {ideas.map(idea => (
                <div 
                  key={idea.id}
                  className={`legend-item ${selectedIdea === idea.id ? 'active' : ''}`}
                  onClick={() => setSelectedIdea(selectedIdea === idea.id ? null : idea.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="legend-color" style={{ background: idea.color }}></span>
                  <span className="legend-icon">{idea.icon}</span>
                  <span className="legend-text">{idea.title}</span>
                  <span className="legend-score">{calculateTotalScore(idea.metrics)}/50</span>
                </div>
              ))}
            </div>
            <p className="chart-instruction">
              {selectedIdea ? 'Click the legend again to view all ideas' : 'Click any legend item to isolate that idea'}
            </p>
          </div>
        ) : (
          <div className="ranking-container">
            <div className="ranking-table">
              <div className="ranking-header">
                <div className="rank-col">Rank</div>
                <div className="idea-col">Idea</div>
                <div className="metric-col">Revenue</div>
                <div className="metric-col">Scalability</div>
                <div className="metric-col">Speed</div>
                <div className="metric-col">Moat</div>
                <div className="metric-col">Market</div>
                <div className="total-col">Total</div>
              </div>
              {sortedIdeas.map((idea, index) => (
                <div 
                  key={idea.id}
                  className="ranking-row"
                  style={{ '--row-color': idea.color }}
                >
                  <div className="rank-col">
                    <div className="rank-badge" style={{ background: idea.color }}>
                      #{index + 1}
                    </div>
                  </div>
                  <div className="idea-col">
                    <span className="row-icon">{idea.icon}</span>
                    <span className="row-title">{idea.title}</span>
                  </div>
                  <div className="metric-col">
                    <div className="metric-badge">{idea.metrics.revenueScore}</div>
                  </div>
                  <div className="metric-col">
                    <div className="metric-badge">{idea.metrics.scalability}</div>
                  </div>
                  <div className="metric-col">
                    <div className="metric-badge">{idea.metrics.timeToMarket}</div>
                  </div>
                  <div className="metric-col">
                    <div className="metric-badge">{idea.metrics.moatStrength}</div>
                  </div>
                  <div className="metric-col">
                    <div className="metric-badge">{idea.metrics.marketSize}</div>
                  </div>
                  <div className="total-col">
                    <div className="total-score" style={{ background: idea.gradient }}>
                      {calculateTotalScore(idea.metrics)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="insights">
        <h2>Strategic Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon">🎯</div>
            <h3>Quick Wins</h3>
            <p>
              <strong>Executive Peer Advisory Boards</strong> and <strong>Accelerator Program</strong> 
              have the fastest time-to-market (9/10 and 8/10) and can be launched within 60-90 days.
            </p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">🏰</div>
            <h3>Strongest Moats</h3>
            <p>
              <strong>Benchmarking Intelligence Platform</strong> leverages 14 years of proprietary 
              data that competitors cannot replicate, scoring 10/10 on defensibility.
            </p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">📈</div>
            <h3>Maximum Scale</h3>
            <p>
              <strong>Certification Program</strong> and <strong>Vendor Matchmaking</strong> both 
              score 10/10 on scalability with potential to reach $50M+ ARR.
            </p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">💰</div>
            <h3>Premium Pricing</h3>
            <p>
              <strong>Corporate Intelligence Command Center</strong> commands $50K-$150K/year 
              per enterprise, targeting Fortune 500 competitive intelligence budgets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeedIdeas;

