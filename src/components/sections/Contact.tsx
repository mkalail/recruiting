import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Get in Touch</h2>
            <p className="text-xl text-black/70">
              Ready to transform your team? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-mint mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black">Email Us</h3>
                  <p className="text-black/70">-------@------.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-mint mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black">Call Us</h3>
                  <p className="text-black/70">+31 ---------</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-mint mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black">Visit Us</h3>
                  <p className="text-black/70">123 Tech Avenue<br />Amsterdam, NL</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-black/20 focus:ring-2 focus:ring-mint focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-mint text-white px-6 py-3 rounded-lg hover:bg-mint-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}