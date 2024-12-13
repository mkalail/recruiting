import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CandidateCard } from './CandidateCard';
import { candidates } from '../../data/candidates';

export function CandidateCarousel() {
  // Track the currently displayed candidate
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % candidates.length);
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Navigation handlers
  const handlePrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? candidates.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % candidates.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-mint/5">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Talent</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Meet some of our exceptional candidates ready to join your team
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            {/* Previous button */}
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-lg border border-black/5 text-black/70 hover:text-mint transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Candidate cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {candidates.map((candidate, index) => {
                // Calculate position relative to active index
                const position = (index - activeIndex + candidates.length) % candidates.length;
                const isActive = position === 0;

                return (
                  <div
                    key={candidate.id}
                    className={`transition-all duration-500 ${
                      position === 0 ? 'md:col-span-1' : 'hidden md:block md:col-span-1'
                    }`}
                  >
                    <CandidateCard candidate={candidate} isActive={isActive} />
                  </div>
                );
              })}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-lg border border-black/5 text-black/70 hover:text-mint transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {candidates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-mint w-6' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}