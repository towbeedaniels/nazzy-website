import React from 'react';

export default function About() {
  const values = [
    {
      title: 'Precision',
      description: 'Every stitch is executed with meticulous attention to detail.',
    },
    {
      title: 'Heritage',
      description: 'Celebrating African traditions with contemporary sophistication.',
    },
    {
      title: 'Quality',
      description: 'Only the finest fabrics and materials are selected for our creations.',
    },
    {
      title: 'Innovation',
      description: 'Blending timeless craftsmanship with modern design aesthetics.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <img
            src="/logo-dark.png"
            alt="Nazzy Stitchez"
            className="h-28 md:h-32 w-auto mx-auto mb-8"
          />
          <div className="flex justify-center mb-4">
            <div className="accent-line"></div>
          </div>
          <h2 className="section-title mb-4">About Nazzy Stitchez</h2>
          <p className="text-dark/70 text-lg">Our Story of Elegance and Excellence</p>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="font-playfair text-3xl text-dark mb-6">
              Crafting Masterpieces Since 2014
            </h3>
            <p className="text-dark/80 mb-4 leading-relaxed text-lg">
              Nazzy Stichez was born from a passion for exceptional tailoring and
              a deep appreciation for African heritage. What started as a vision
              to blend traditional craftsmanship with contemporary design has
              evolved into a prestigious bespoke fashion brand.
            </p>
            <p className="text-dark/80 mb-4 leading-relaxed text-lg">
              Each creation from Nazzy Stichez is a testament to our commitment to
              excellence. We don't just create garments; we craft wearable art that
              tells your unique story and celebrates your individuality.
            </p>
            <p className="text-dark/80 leading-relaxed text-lg">
              Our team of master tailors brings decades of combined experience,
              ensuring every piece meets our exacting standards of quality and
              design innovation.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
              alt="Nazzy Stitchez Atelier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 to-transparent"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl text-dark text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-gold p-6 rounded-sm shadow-lg hover:shadow-xl transition"
              >
                <h4 className="font-playfair text-xl text-navy-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-dark/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Highlight */}
        <div className="bg-gradient-to-r from-navy-900 to-dark rounded-lg p-12 text-cream">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-playfair text-3xl mb-4">
              Meet Our Artisans
            </h3>
            <p className="text-cream/90 mb-8 leading-relaxed">
              Our team comprises master tailors and designers who are passionate
              about their craft. Each member brings unique expertise and a shared
              commitment to creating garments that transcend ordinary fashion.
            </p>
            <button className="button-gold">Learn More About Our Team</button>
          </div>
        </div>
      </div>
    </section>
  );
}
