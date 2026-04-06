import React, { useState } from 'react';

export default function Lookbook() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const items = [
    {
      id: 1,
      category: 'womens',
      title: "Ankara Masterpiece",
      description: "Hand-beaded jacket with intricate embroidery",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop",
    },
    {
      id: 2,
      category: 'mens',
      title: "Traditional Excellence",
      description: "Structured traditional attire with modern tailoring",
      image: "https://images.unsplash.com/photo-1505689914660-d02b0e88ca56?w=500&h=600&fit=crop",
    },
    {
      id: 3,
      category: 'bridal',
      title: "Regal Gown",
      description: "Custom wedding dress with gold threading",
      image: "https://images.unsplash.com/photo-1595777707802-1b5f11b1388c?w=500&h=600&fit=crop",
    },
    {
      id: 4,
      category: 'womens',
      title: "Evening Elegance",
      description: "Floor-length silhouette with gold accents",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=600&fit=crop",
    },
    {
      id: 5,
      category: 'mens',
      title: "Contemporary Suit",
      description: "Bespoke tailored suit with subtle detailing",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
    },
    {
      id: 6,
      category: 'bridal',
      title: "Bridal Alteration",
      description: "Perfect fit for your special day",
      image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=500&h=600&fit=crop",
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="lookbook" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="accent-line"></div>
          </div>
          <h2 className="section-title mb-4">Discover The Collections</h2>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Explore our carefully curated showcase of bespoke designs and
            ready-to-wear pieces that embody our commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'womens', 'mens', 'bridal'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-montserrat text-sm tracking-wider uppercase transition duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-900 text-cream'
                  : 'bg-white text-emerald-900 border border-emerald-900 hover:bg-emerald-900 hover:text-cream'
              }`}
            >
              {category === 'all' ? 'All Collections' : category === 'womens' ? "Women's" : category === 'mens' ? "Men's" : 'Bridal'}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden bg-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark/90 to-transparent opacity-100 group-hover:opacity-100">
                <h3 className="font-playfair text-2xl text-gold mb-2">{item.title}</h3>
                <p className="text-cream/90 text-sm mb-4">{item.description}</p>
                <button className="self-start bg-gold text-dark font-semibold px-4 py-2 rounded-sm hover:bg-opacity-90 transition uppercase text-xs tracking-wider">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
