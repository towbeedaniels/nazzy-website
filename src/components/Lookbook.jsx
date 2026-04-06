import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';

export default function Lookbook() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart, addToWishlist, isInWishlist } = useAppContext();

  const filteredItems =
    selectedCategory === 'all'
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

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
                  ? 'bg-navy-900 text-cream'
                  : 'bg-white text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-cream'
              }`}
            >
              {category === 'all'
                ? 'All Collections'
                : category === 'womens'
                ? "Women's"
                : category === 'mens'
                ? "Men's"
                : 'Bridal'}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden bg-dark">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark/90 to-transparent opacity-100 group-hover:opacity-100">
                <h3 className="font-playfair text-2xl text-gold mb-2">{item.name}</h3>
                <p className="text-cream/90 text-sm mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gold font-semibold">${item.price}</p>
                  <div className="flex gap-2">
                    <span className="text-yellow-300 text-sm">★ {item.rating}</span>
                    <span className="text-cream/70 text-xs">({item.reviews})</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="flex-1 bg-gold text-dark font-semibold px-4 py-2 rounded-sm hover:bg-opacity-90 transition uppercase text-xs tracking-wider"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToWishlist(item);
                    }}
                    className={`px-4 py-2 rounded-sm transition text-sm ${
                      isInWishlist(item.id)
                        ? 'bg-gold text-dark'
                        : 'bg-dark/50 text-gold hover:bg-dark'
                    }`}
                    title="Add to Wishlist"
                  >
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-cream rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image */}
                <div className="h-96">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-dark/50 hover:text-dark"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => addToWishlist(selectedProduct)}
                    className="absolute top-4 left-4 text-dark/50 hover:text-dark text-2xl"
                    title="Add to Wishlist"
                  >
                    {isInWishlist(selectedProduct.id) ? '❤' : '♡'}
                  </button>

                  <div>
                    <h3 className="font-playfair text-3xl text-navy-900 mb-2">
                      {selectedProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-yellow-500 text-lg">★ {selectedProduct.rating}</span>
                      <span className="text-dark/60">({selectedProduct.reviews} reviews)</span>
                    </div>
                    <p className="text-dark/80 mb-4">{selectedProduct.details}</p>
                    <p className="text-3xl text-gold font-playfair mb-6">
                      ${selectedProduct.price}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-navy-900 mb-2">Available Sizes:</p>
                        <div className="flex gap-2 flex-wrap">
                          {selectedProduct.size.map((size) => (
                            <button
                              key={size}
                              className="border-2 border-navy-900 text-navy-900 px-4 py-2 rounded hover:bg-navy-900 hover:text-cream transition"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-navy-900 mb-2">Available Colors:</p>
                        <div className="flex gap-2 flex-wrap">
                          {selectedProduct.color.map((color) => (
                            <button
                              key={color}
                              className="border-2 border-navy-900 text-navy-900 px-4 py-2 rounded hover:bg-navy-900 hover:text-cream transition"
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="button-gold w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
