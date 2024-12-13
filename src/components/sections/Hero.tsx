import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { JoinNetworkModal } from '../join/JoinNetworkModal';

export function Hero() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-mint-light/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Better Talent, 
            <br></br><span className="text-mint"> Faster  </span>
            
          </h1>
          <p className="text-xl text-black/70 mb-8">
          Accelerate your hiring process. Our AI-Powered matching system enables us to connect you with pre-vetted tech and finance professionals in days, not weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="bg-mint text-white px-8 py-3 rounded-lg hover:bg-mint-dark transition-colors flex items-center justify-center"
            >
              Join Our Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {/* <button className="border border-black/20 text-black px-8 py-3 rounded-lg hover:bg-black/5 transition-colors">
              Browse Candidates
            </button> */}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
  className="absolute top-0 right-0 w-full pointer-events-none"
  style={{
    height: "70vh", // Adjust height to fit within the viewport
    backgroundImage: "url('/images/mintleaves.png')",
    backgroundSize: "contain", // Ensures the whole image is visible
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right", // Align the image to the top center
    opacity: 0.2, // Adjust transparency
  }}
></div>

      <JoinNetworkModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </section>
  );
}