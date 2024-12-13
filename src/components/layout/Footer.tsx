import React from 'react';
import { Briefcase, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-mint" />
              <span className="text-xl font-bold text-white">Recruiting Recruitment</span>
            </div>
            <p className="text-white/70">
              Connecting innovative companies with exceptional tech talent.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Talent Sourcing</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Executive Search</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Skill Assessment</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Contract Staffing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-mint transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-mint transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-mint transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} RR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}