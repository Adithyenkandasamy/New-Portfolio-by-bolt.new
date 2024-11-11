import React, { useState } from 'react';
import { Certificate } from '../types';

interface CertificatesProps {
  certificates: Certificate[];
  playHover: () => void;
  playClick: () => void;
  playImageHover: () => void;
}

const Certificates: React.FC<CertificatesProps> = ({ 
  certificates, 
  playHover, 
  playClick,
  playImageHover 
}) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              setSelectedCert(cert);
              playClick();
            }}
            onMouseEnter={() => {
              playImageHover();
            }}
          >
            <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{cert.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 dark:text-white">{selectedCert.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{selectedCert.issuer}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{selectedCert.date}</p>
            <p className="text-gray-700 dark:text-gray-200">{selectedCert.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;