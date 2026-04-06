import React from 'react';
import { usePageContext } from '../context/PageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { navigateTo } = usePageContext();

  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/logo-light.png"
              alt="Nazzy Stichez"
              className="h-28 md:h-32 w-auto mb-6 hover:opacity-80 transition cursor-pointer"
              onClick={() => navigateTo('home')}
              title="Back to Home"
            />
            <p className="text-cream/70 mb-6 leading-relaxed">
              Bespoke elegance meets African heritage. Precision in every stitch,
              excellence in every creation.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.834 8.207 11.385.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm3.5-9.5c0 1.93-1.57 3.5-3.5 3.5S8.5 13.93 8.5 12 10.07 8.5 12 8.5s3.5 1.57 3.5 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-cream/70 hover:text-gold transition">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('collections')}
                  className="text-cream/70 hover:text-gold transition bg-none border-none p-0 font-montserrat"
                >
                  Collections
                </button>
              </li>
              <li>
                <a href="#services" className="text-cream/70 hover:text-gold transition">
                  Bespoke Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream/70 hover:text-gold transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#booking" className="text-cream/70 hover:text-gold transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-cream/70 hover:text-gold transition">
                  Custom Tailoring
                </a>
              </li>
              <li>
                <a href="#lookbook" className="text-cream/70 hover:text-gold transition">
                  Ready-to-Wear
                </a>
              </li>
              <li>
                <a href="#services" className="text-cream/70 hover:text-gold transition">
                  Bridal Alterations
                </a>
              </li>
              <li>
                <a href="#booking" className="text-cream/70 hover:text-gold transition">
                  Consultations
                </a>
              </li>
              <li>
                <a href="#booking" className="text-cream/70 hover:text-gold transition">
                  Gift Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg text-gold mb-6">Newsletter</h4>
            <p className="text-cream/70 mb-4 text-sm">
              Subscribe for exclusive updates, new collections, and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-dark border border-gold/30 rounded-sm px-4 py-2 text-cream focus:outline-none focus:border-gold transition placeholder-cream/50"
              />
              <button
                type="submit"
                className="button-gold w-full text-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/70 text-sm">
            © {currentYear} Nazzy Stichez. All rights reserved. | Precision in
            Every Stitch.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <button onClick={() => navigateTo('privacy')} className="text-cream/70 hover:text-gold transition">
              Privacy Policy
            </button>
            <button onClick={() => navigateTo('terms')} className="text-cream/70 hover:text-gold transition">
              Terms & Conditions
            </button>
            <button onClick={() => navigateTo('shipping')} className="text-cream/70 hover:text-gold transition">
              Shipping & Returns
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
