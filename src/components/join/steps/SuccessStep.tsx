import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessStepProps {
  onClose: () => void;
}

export function SuccessStep({ onClose }: SuccessStepProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-mint" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
        <p className="text-black/70">
          Thank you for joining our network. Our team will review your profile and get back to you shortly.
        </p>
      </div>
      <button
        onClick={onClose}
        className="w-full bg-mint text-white py-3 rounded-lg"
      >
        Close
      </button>
    </div>
  );
}