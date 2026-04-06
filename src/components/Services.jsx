import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '✂️',
      title: 'Custom Tailoring',
      description:
        'Bespoke garments crafted to your exact measurements and preferences. Each piece is a unique masterpiece tailored to your individual style.',
      features: ['Perfect Fit', 'Premium Fabrics', 'Expert Craftsmanship'],
    },
    {
      id: 2,
      icon: '👗',
      title: 'Ready-to-Wear Collections',
      description:
        'Carefully selected and designed pieces that capture the essence of luxury fashion. Blending traditional African aesthetics with contemporary design.',
      features: ['Limited Editions', 'Hand-Selected', 'Ethically Sourced'],
    },
    {
      id: 3,
      icon: '💍',
      title: 'Bridal Alterations',
      description:
        'Specializing in bridal wear alterations to ensure your wedding day ensemble is absolutely perfect. We treat every detail with care and precision.',
      features: ['Expert Seamstresses', 'Meticulous Attention', 'Timely Delivery'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gold"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-gold font-bold mb-4">
            Our Services
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your fashion needs, from custom
            creations to expert alterations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="bg-emerald-900/30 border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition duration-300 hover:bg-emerald-900/50 h-full">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-2xl text-gold mb-4">
                  {service.title}
                </h3>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-cream/70 text-sm flex items-center">
                      <span className="text-gold mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-transparent border border-gold/30 rounded-lg p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="font-playfair text-3xl text-gold mb-4">
                Experience Nazzy Stichez: Personalized Excellence
              </h3>
              <p className="text-cream/80 mb-6 leading-relaxed">
                Book a consultation with our expert team to discuss your vision,
                preferred fabrics, and design preferences. We'll create a
                customized experience tailored to your unique needs.
              </p>
              <button className="button-gold">Schedule an Appointment</button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-gold text-4xl font-playfair mb-2">500+</p>
                  <p className="text-cream/70 text-sm">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-4xl font-playfair mb-2">10Y+</p>
                  <p className="text-cream/70 text-sm">Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-4xl font-playfair mb-2">100%</p>
                  <p className="text-cream/70 text-sm">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-4xl font-playfair mb-2">∞</p>
                  <p className="text-cream/70 text-sm">Possibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
