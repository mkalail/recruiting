import React from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-mint" />
            <span className="text-xl font-bold text-white">Recruiting Recruitment</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-mint transition-colors">Services</a>
            <a href="#jobs" className="text-white hover:text-mint transition-colors">Jobs</a>
            <a href="/blog" className="text-white hover:text-mint transition-colors">Blog</a>
            <a href="#about" className="text-white hover:text-mint transition-colors">About</a>
            <a href="#contact" className="bg-mint text-black px-4 py-2 rounded-lg hover:bg-mint-dark transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a href="#services" className="text-white hover:text-mint transition-colors">Services</a>
              <a href="#jobs" className="text-white hover:text-mint transition-colors">Jobs</a>
              <a href="/blog" className="text-white hover:text-mint transition-colors">Blog</a>
              <a href="#about" className="text-white hover:text-mint transition-colors">About</a>
              <a href="#contact" className="bg-mint text-black px-4 py-2 rounded-lg hover:bg-mint-dark transition-colors text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}