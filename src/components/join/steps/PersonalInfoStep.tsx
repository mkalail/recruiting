import React, { useState } from 'react';

interface PersonalInfoStepProps {
  onNext: (data: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
  }) => void;
  onBack: () => void;
}

export function PersonalInfoStep({ onNext, onBack }: PersonalInfoStepProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: ''
  });

  const isValid = formData.name && formData.email;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, name: e.target.value }))
          }
          className="w-full p-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, email: e.target.value }))
          }
          className="w-full p-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, phone: e.target.value }))
          }
          className="w-full p-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">
          LinkedIn Profile
        </label>
        <input
          type="url"
          value={formData.linkedin}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, linkedin: e.target.value }))
          }
          className="w-full p-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
          placeholder="Enter your LinkedIn URL"
        />
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
          Submit
        </button>
      </div>
    </div>
  );
}