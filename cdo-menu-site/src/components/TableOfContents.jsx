import { useState, useEffect, useRef } from 'react';
import './TableOfContents.css';

function TableOfContents({ markdownContent }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const tocRef = useRef(null);
  const toggleRef = useRef(null);

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

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      const target = event.target;
      if (tocRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="toc-mobile-toggle"
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle table of contents"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>
        </svg>
        <span>Contents</span>
      </button>

      {/* TOC Container */}
      <div ref={tocRef} className={`toc-container ${isOpen ? 'toc-open' : ''}`}>
        <div className="toc-header">
          <span>Contents</span>
          <button 
            className="toc-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close table of contents"
          >
            ×
          </button>
        </div>
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

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="toc-overlay visible"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default TableOfContents;

