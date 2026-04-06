import React, { useState } from 'react';

export default function Booking() {
  const [activeTab, setActiveTab] = useState('consultation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for booking! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <section id="booking" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gold"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-gold font-bold mb-4">
            Experience Nazzy Stichez
          </h2>
          <p className="text-cream/80 text-lg">
            Book Your Consultation or Explore Our Store
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('consultation')}
            className={`px-8 py-3 font-montserrat text-sm tracking-wider uppercase rounded-sm transition duration-300 ${
              activeTab === 'consultation'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-navy-900/50 text-cream border border-gold/30 hover:border-gold'
            }`}
          >
            Book Consultation
          </button>
          <button
            onClick={() => setActiveTab('store')}
            className={`px-8 py-3 font-montserrat text-sm tracking-wider uppercase rounded-sm transition duration-300 ${
              activeTab === 'store'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-navy-900/50 text-cream border border-gold/30 hover:border-gold'
            }`}
          >
            Visit Store
          </button>
        </div>

        {/* Content Container */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-navy-900/30 border border-gold/20 rounded-lg p-8">
            {activeTab === 'consultation' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-playfair text-2xl text-gold mb-6">
                  Schedule Your Consultation
                </h3>

                <div>
                  <label className="block text-cream/90 text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-dark/50 border border-gold/30 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream/90 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark/50 border border-gold/30 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/90 text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-dark/50 border border-gold/30 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream/90 text-sm font-semibold mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark/50 border border-gold/30 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/90 text-sm font-semibold mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark/50 border border-gold/30 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/90 text-sm font-semibold mb-2">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full bg-dark/50 border border-gold/30 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition resize-none"
                    placeholder="Describe your design ideas, preferences, and any special requests..."
                  ></textarea>
                </div>

                <button type="submit" className="button-gold w-full">
                  Confirm Consultation
                </button>

                <p className="text-cream/70 text-xs text-center">
                  We'll reach out to confirm your appointment within 24 hours.
                </p>
              </form>
            ) : (
              <div>
                <h3 className="font-playfair text-2xl text-gold mb-6">
                  Visit Our Store
                </h3>
                <div className="space-y-6 text-cream/90">
                  <div>
                    <h4 className="text-gold font-semibold mb-2">Location</h4>
                    <p>123 Fashion District Lane</p>
                    <p>Elegant City, ST 12345</p>
                  </div>

                  <div>
                    <h4 className="text-gold font-semibold mb-2">Hours</h4>
                    <p>Monday - Friday: 10am - 6pm</p>
                    <p>Saturday: 11am - 5pm</p>
                    <p>Sunday: Closed</p>
                  </div>

                  <div>
                    <h4 className="text-gold font-semibold mb-2">Contact</h4>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Email: hello@nazzy.com</p>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-gold font-semibold mb-4">Featured Products</h4>
                    <div className="space-y-4">
                      <div className="bg-dark/50 p-4 rounded border border-gold/20">
                        <p className="text-gold font-semibold mb-1">Ankara Blazer</p>
                        <p className="text-sm mb-2">Premium hand-beaded jacket</p>
                        <p className="text-gold">$450</p>
                      </div>
                      <div className="bg-dark/50 p-4 rounded border border-gold/20">
                        <p className="text-gold font-semibold mb-1">Traditional Agbada</p>
                        <p className="text-sm mb-2">Classic elegant attire</p>
                        <p className="text-gold">$380</p>
                      </div>
                      <div className="bg-dark/50 p-4 rounded border border-gold/20">
                        <p className="text-gold font-semibold mb-1">Evening Gown</p>
                        <p className="text-sm mb-2">Floor-length sophistication</p>
                        <p className="text-gold">$550</p>
                      </div>
                    </div>
                  </div>

                  <button className="button-gold w-full">Shop All Products</button>
                </div>
              </div>
            )}
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-8">
              <h3 className="font-playfair text-2xl text-gold mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-4 text-cream/90">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>
                    <strong>Expert Craftsmanship</strong> - Decades of combined
                    experience in bespoke tailoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>
                    <strong>Premium Materials</strong> - Hand-selected fabrics from
                    around the world
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>
                    <strong>Personalized Service</strong> - Dedicated attention to
                    every client
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>
                    <strong>Cultural Pride</strong> - Celebrating African heritage
                    with contemporary elegance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>
                    <strong>Timely Delivery</strong> - Excellence without delays
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-900/30 border border-gold/20 rounded-lg p-8">
              <h3 className="font-playfair text-2xl text-gold mb-4">
                Client Testimonials
              </h3>
              <div className="space-y-6">
                <p className="text-cream/90 italic">
                  "Nazzy Stichez transformed my vision into reality. The attention
                  to detail is unmatched!"
                </p>
                <p className="text-gold font-semibold">- Amara K.</p>

                <p className="text-cream/90 italic">
                  "A truly bespoke experience. Every stitch reflects luxury and
                  dedication to excellence."
                </p>
                <p className="text-gold font-semibold">- James O.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
