import './IntakeQuestions.css';

function IntakeQuestions() {
  const questions = [
    {
      number: 1,
      title: 'Target User & Market',
      question:
        'Who specifically will be using this application? Can you describe them in detail (role, industry, company size, experience level)?',
    },
    {
      number: 2,
      title: 'Core Problem & Pain Point',
      question:
        "What specific problem are they struggling with right now? How is this problem costing them (time, money, opportunities)? Why hasn't this been solved yet?",
    },
    {
      number: 3,
      title: 'Desired Outcome & Success Metrics',
      question:
        'What does success look like for these users? What specific, measurable outcome do they want to achieve? How will we know the app is working?',
    },
    {
      number: 4,
      title: 'AI Capability & Technical Vision',
      question:
        'What AI capability do you envision powering this solution? (e.g., natural language chat, content generation, image analysis, predictive analytics, recommendations)',
    },
    {
      number: 5,
      title: 'User Roles & System Actors',
      question:
        'Beyond the primary end users, who else will interact with this system? Will there be administrators, managers, billing contacts, or other roles with different needs?',
    },
    {
      number: 6,
      title: 'Revenue Model & Business Viability',
      question:
        "How do you plan to monetize this? Are users willing to pay subscription fees, per-use charges, or is this enterprise/B2B? What's a reasonable price point given the value delivered?",
    },
    {
      number: 7,
      title: 'MVP Scope & Timeline',
      question:
        "What are the absolute must-have features for launch versus nice-to-haves for later? What's your target launch timeline and any critical deadlines?",
    },
    {
      number: 8,
      title: 'Competitive Context & Differentiation',
      question:
        'What alternatives exist today (competitors, workarounds, manual processes)? What would make users choose this solution over those alternatives? What unique advantage can we create?',
    },
  ];

  const handleSendEmail = () => {
    const subject = 'CDO Club intake';
    const body = questions
      .map(
        (q) =>
          `${q.number}. ${q.title}\n${q.question}\n\nYour Answer:\n\n\n\n`
      )
      .join('---\n\n');

    const mailtoLink = `mailto:tiran@tirandagan.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="page-content intake-questions-page">
      <div className="intake-container">
        <div className="intake-header">
          <h1>Client Discovery Questions</h1>
          <p className="intake-subtitle">
            Help us understand your vision by answering these essential
            questions
          </p>
        </div>

        <div className="questions-list">
          {questions.map((q) => (
            <div key={q.number} className="question-card">
              <div className="question-number">{q.number}</div>
              <div className="question-content">
                <h3 className="question-title">{q.title}</h3>
                <p className="question-text">{q.question}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="intake-footer">
          <div className="pro-tip">
            <strong>Pro Tip:</strong> Take your time with these questions. The
            more detail you provide, the better we can understand your vision
            and create a solution that truly meets your needs.
          </div>
          <button onClick={handleSendEmail} className="send-email-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="button-icon"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Send Questions to Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntakeQuestions;

