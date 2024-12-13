import React from 'react';
import { Users, Target, Briefcase, Award } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Talent Sourcing',
    description: 'Access our extensive network of pre-vetted finance and tech professionals. We specialize in connecting you with top-tier talent ready to make an impact — fast.'
  },
  {
    icon: Target,
    title: 'Precision Matching',
    description: 'Our AI-driven platform matches you to candidates who not only meet your technical requirements but align seamlessly with your company culture.'
  },
  {
    icon: Briefcase,
    title: 'Executive Search',
    description: 'Specialized recruitment for senior technical roles roles in tech and finance.'
  },
  {
    icon: Award,
    title: 'Skill Assessment',
    description: 'Streamlined assessments to confirm technical expertise and ensure every candidate is equipped to excel from day one.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Comprehensive recruiting solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-xl border border-black/10 hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-black/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}