import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-700 opacity-5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo */}
        <img
          src="/logo-light.png"
          alt="Nazzy Stichez"
          className="h-40 md:h-56 w-auto mx-auto mb-12 animate-fade-in drop-shadow-lg"
        />

        <h2 className="font-playfair text-5xl md:text-7xl text-gold mb-4 tracking-wide">
          Precision in Every Stitch
        </h2>

        <div className="flex justify-center mb-8">
          <div className="accent-line"></div>
        </div>

        <p className="font-playfair text-xl md:text-2xl text-cream mb-6">
          Bespoke Elegance. African Heritage.
        </p>

        <p className="text-cream text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafted Masterpieces. Redefining Luxury.
        </p>

        <p className="text-gold text-sm tracking-widest mb-10 uppercase">
          The Art of Tailoring
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="button-gold">Explore Collections</button>
          <button className="border-2 border-gold text-gold font-semibold px-8 py-3 rounded-sm hover:bg-gold hover:text-dark transition duration-300 uppercase tracking-wider text-sm">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
