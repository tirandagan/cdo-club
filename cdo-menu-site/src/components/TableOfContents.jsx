import { useState, useEffect } from 'react';
import './TableOfContents.css';

function TableOfContents({ markdownContent }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  // Extract headings from markdown
  useEffect(() => {
    if (!markdownContent) return;

    const lines = markdownContent.split('\n');
    const extractedHeadings = [];

    lines.forEach((line, index) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = `heading-${index}-${text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')}`;

        extractedHeadings.push({
          level,
          text,
          id,
          index,
        });
      }
    });

    setHeadings(extractedHeadings);
  }, [markdownContent]);

  // Track scroll position and update active heading
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => ({
        id: h.id,
        element: document.querySelector(`[id="${h.id}"]`) || 
                 // Fallback: find by text content
                 Array.from(document.querySelectorAll('h1, h2, h3')).find(
                   el => el.textContent.trim() === h.text
                 )
      })).filter(h => h.element);

      // Find the heading that's currently in view
      const scrollPosition = window.scrollY + 100; // Offset for better UX
      
      let currentHeading = '';
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const heading = headingElements[i];
        if (heading.element && heading.element.offsetTop <= scrollPosition) {
          currentHeading = heading.id;
          break;
        }
      }

      setActiveId(currentHeading);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (text) => {
    // Find heading by text content
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));
    const element = headingElements.find(el => el.textContent.trim() === text);
    
    if (element) {
      const yOffset = -80; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="toc-container">
      <div className="toc-header">Contents</div>
      <nav className="toc-nav">
        {headings.map((heading, index) => (
          <button
            key={index}
            className={`toc-link toc-level-${heading.level} ${
              activeId === heading.id ? 'active' : ''
            }`}
            onClick={() => scrollToHeading(heading.text)}
            title={heading.text}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default TableOfContents;

