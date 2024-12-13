import React, { useState } from 'react';
import { specialtyOptions } from '../../../types/specialty';

interface SpecialtyStepProps {
  onNext: (data: { specialty: string }) => void;
}

export function SpecialtyStep({ onNext }: SpecialtyStepProps) {
  const [specialty, setSpecialty] = useState('');

  return (
    <div className="space-y-6">
      <p className="text-black/70">
        Select your primary area of expertise to help us better understand your profile.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {specialtyOptions.map(option => (
          <button
            key={option.value}
            onClick={() => setSpecialty(option.value)}
            className={`p-4 rounded-lg border text-left transition-all ${
              specialty === option.value
                ? 'border-mint bg-mint/5 text-mint'
                : 'border-black/10 hover:border-mint/50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => specialty && onNext({ specialty })}
        disabled={!specialty}
        className="w-full bg-mint text-white py-3 rounded-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}