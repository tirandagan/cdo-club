import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import panzoom from 'panzoom';
import './MermaidDiagram.css';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
    curve: 'basis',
  },
});

function MermaidDiagram({ chart }) {
  const containerRef = useRef(null);
  const panzoomRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(5.0);

  useEffect(() => {
    if (containerRef.current && chart) {
      const renderDiagram = async () => {
        try {
          containerRef.current.innerHTML = '';
          const id = `mermaid-${Date.now()}`;
          const { svg } = await mermaid.render(id, chart);
          containerRef.current.innerHTML = svg;

          const svgElement = containerRef.current.querySelector('svg');
          if (svgElement) {
            svgElement.style.width = '100%';
            svgElement.style.height = 'auto';
            
            if (panzoomRef.current) {
              panzoomRef.current.dispose();
            }
            
            panzoomRef.current = panzoom(svgElement, {
              maxZoom: 10,
              minZoom: 0.2,
              initialZoom: 5.0,
              bounds: true,
              boundsPadding: 0.1,
              zoomDoubleClickSpeed: 1,
              smoothScroll: false,
              autocenter: true,
            });

            panzoomRef.current.on('zoom', (e) => {
              setZoomLevel(e.getTransform().scale);
            });

            panzoomRef.current.zoomAbs(0, 0, 5.0);
            panzoomRef.current.moveTo(0, 0);
          }
        } catch (error) {
          console.error('Error rendering mermaid diagram:', error);
          containerRef.current.innerHTML = `<pre style="color: red;">Error rendering diagram: ${error.message}</pre>`;
        }
      };
      renderDiagram();
    }

    return () => {
      if (panzoomRef.current) {
        panzoomRef.current.dispose();
      }
    };
  }, [chart]);

  const handleZoomIn = () => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(0, 0, 1.2);
    }
  };

  const handleZoomOut = () => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(0, 0, 0.8);
    }
  };

  const handleReset = () => {
    if (panzoomRef.current) {
      panzoomRef.current.moveTo(0, 0);
      panzoomRef.current.zoomAbs(0, 0, 5.0);
    }
  };

  return (
    <div className="mermaid-wrapper">
      <div className="mermaid-controls">
        <button onClick={handleZoomIn} className="control-btn" title="Zoom In">
          <span>+</span>
        </button>
        <button onClick={handleZoomOut} className="control-btn" title="Zoom Out">
          <span>−</span>
        </button>
        <button onClick={handleReset} className="control-btn" title="Reset View">
          <span>⟲</span>
        </button>
        <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
      </div>
      <div ref={containerRef} className="mermaid-container"></div>
      <div className="mermaid-hint">
        💡 Use mouse wheel to zoom, click and drag to pan
      </div>
    </div>
  );
}

export default MermaidDiagram;

