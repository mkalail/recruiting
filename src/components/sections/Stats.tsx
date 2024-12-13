import React from 'react';

const stats = [
  { number: '500+', label: 'Companies' },
  { number: '10,000+', label: 'Placements' },
  { number: '98%', label: 'Success Rate' },
  { number: '24h', label: 'Average Response' }
];

export function Stats() {
  return (
    <section className="py-20 bg-mint">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}