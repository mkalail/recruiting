import React from 'react';
import { MapPin, Star } from 'lucide-react';
import type { Candidate } from '../../types/candidate';

interface CandidateCardProps {
  candidate: Candidate;
  isActive: boolean;
}

export function CandidateCard({ candidate, isActive }: CandidateCardProps) {
  return (
    <div
      className={`transform transition-all duration-500 ${
        isActive
          ? 'scale-100 opacity-100'
          : 'scale-95 opacity-40'
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-black/5">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={candidate.imageUrl}
            alt={candidate.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-black mb-1">{candidate.name}</h3>
          <p className="text-mint font-medium mb-2">{candidate.role}</p>
          <div className="flex items-center text-black/60 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{candidate.location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-mint/10 text-mint rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60 text-sm">{candidate.experience}</span>
            <div className="flex items-center text-mint">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}