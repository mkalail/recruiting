import React, { useState } from 'react';

interface SkillAssessmentStepProps {
  onNext: (data: {
    yearsOfExperience: string;
    certifications: string[];
  }) => void;
  onBack: () => void;
  specialty: string;
}

export function SkillAssessmentStep({
  onNext,
  onBack,
  specialty
}: SkillAssessmentStepProps) {
  const [formData, setFormData] = useState({
    yearsOfExperience: '',
    certifications: [] as string[]
  });

  // Update isValid logic
  const isValid = formData.yearsOfExperience;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Years of Experience in {specialty}
        </label>
        <select
          value={formData.yearsOfExperience}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, yearsOfExperience: e.target.value }))
          }
          className="w-full p-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
        >
          <option value="">Select experience</option>
          <option value="0-2">0-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 py-3 rounded-lg border border-black/20 hover:bg-black/5"
        >
          Back
        </button>
        <button
          onClick={() => isValid && onNext(formData)}
          disabled={!isValid}
          className="flex-1 bg-mint text-white py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}