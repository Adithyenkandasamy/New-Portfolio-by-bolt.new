import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create DNA strands
    const createDNAStrands = () => {
      for (let i = 0; i < 20; i++) {
        const strand = document.createElement('div');
        strand.className = 'dna-strand';
        strand.style.left = `${Math.random() * 100}%`;
        strand.style.animationDelay = `${Math.random() * 8}s`;
        container.appendChild(strand);
      }
    };

    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'dna-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        container.appendChild(particle);
      }
    };

    createDNAStrands();
    createParticles();

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="dna-bg" />;
};

export default Background;