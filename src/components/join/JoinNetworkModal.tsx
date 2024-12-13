import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SpecialtyStep } from './steps/SpecialtyStep';
import { SkillAssessmentStep } from './steps/SkillAssessmentStep';
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { SuccessStep } from './steps/SuccessStep';

interface JoinNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinNetworkModal({ isOpen, onClose }: JoinNetworkModalProps) {
  // Track current step and form data
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: '', // e.g., 'SAP FI', 'Oracle Cloud'
    yearsOfExperience: '', // e.g., '0-2', '3-5'
    skillLevel: '', // e.g., 'junior', 'senior'
    certifications: [], // Array of certification names
    name: '',
    email: '',
    phone: '',
    linkedin: ''
  });

  // Don't render if modal is closed
  if (!isOpen) return null;

  // Handle form progression
  const handleNext = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  // Handle going back to previous step
  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-black/50 hover:text-black"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map(num => (
                <div
                  key={num}
                  className={`h-2 flex-1 mx-1 rounded ${
                    num <= step ? 'bg-mint' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            {/* Step title */}
            <h2 className="text-2xl font-bold text-black">
              {step === 1 && 'Select Your Specialty'}
              {step === 2 && 'Skill Assessment'}
              {step === 3 && 'Personal Information'}
              {step === 4 && 'Success!'}
            </h2>
          </div>

          {/* Step content */}
          {step === 1 && <SpecialtyStep onNext={handleNext} />}
          {step === 2 && (
            <SkillAssessmentStep
              onNext={handleNext}
              onBack={handleBack}
              specialty={formData.specialty}
            />
          )}
          {step === 3 && (
            <PersonalInfoStep
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 4 && <SuccessStep onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}