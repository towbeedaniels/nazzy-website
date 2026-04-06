import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';

export default function Collections() {
  const { addToCart, addToWishlist, isInWishlist } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 999]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  // Get unique sizes and colors from products
  const allSizes = [...new Set(products.flatMap(p => p.size))];
  const allColors = [...new Set(products.flatMap(p => p.color))];

  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p =>
        selectedSizes.some(size => p.size.includes(size))
      );
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p =>
        selectedColors.some(color => p.color.includes(color))
      );
    }

    // Sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        // Keep original order
        break;
    }

    return sorted;
  }, [selectedCategory, priceRange, selectedSizes, selectedColors, sortBy]);

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 999]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortBy('newest');
  };

  return (
    <div className="bg-cream min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <img
            src="/logo-dark.png"
            alt="Nazzy Stichez"
            className="h-24 w-auto mx-auto mb-6"
          />
          <div className="flex justify-center mb-4">
            <div className="accent-line"></div>
          </div>
          <h1 className="section-title mb-4 text-center">Complete Collections</h1>
          <p className="text-dark/70 text-lg text-center max-w-2xl mx-auto">
            Explore our entire range of bespoke designs and ready-to-wear pieces. 
            Find the perfect style with our advanced filtering options.
          </p>
        </div>

        {/* Show results count */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-navy-200">
          <div className="text-dark/70">
            <span className="font-semibold text-navy-900">{filteredProducts.length}</span> styles found
          </div>
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex gap-2 border border-navy-200 rounded p-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded transition ${
                  viewMode === 'grid'
                    ? 'bg-navy-900 text-cream'
                    : 'text-navy-900 hover:bg-navy-900/10'
                }`}
                title="Grid view"
              >
                ⊞
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded transition ${
                  viewMode === 'list'
                    ? 'bg-navy-900 text-cream'
                    : 'text-navy-900 hover:bg-navy-900/10'
                }`}
                title="List view"
              >
                ☰
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-navy-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-gold"
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-xl text-navy-900">Filters</h3>
                  <button
                    onClick={resetFilters}
                    className="text-gold hover:text-navy-900 text-sm underline transition"
                  >
                    Reset All
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    {['all', 'womens', 'mens', 'bridal'].map(category => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="ml-3 text-dark/80 hover:text-navy-900">
                          {category === 'all'
                            ? 'All Collections'
                            : category === 'womens'
                            ? "Women's"
                            : category === 'mens'
                            ? "Men's"
                            : 'Bridal'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-dark/70">Min: ${priceRange[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="999"
                        value={priceRange[0]}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val <= priceRange[1]) {
                            setPriceRange([val, priceRange[1]]);
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-dark/70">Max: ${priceRange[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="999"
                        value={priceRange[1]}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val >= priceRange[0]) {
                            setPriceRange([priceRange[0], val]);
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Size Filter */}
                <div className="mb-6 pb-6 border-b border-navy-200">
                  <h4 className="font-semibold text-navy-900 mb-3">Sizes</h4>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-2 text-sm border rounded transition ${
                          selectedSizes.includes(size)
                            ? 'bg-navy-900 text-cream border-navy-900'
                            : 'bg-white border-navy-200 text-navy-900 hover:border-navy-900'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Colors</h4>
                  <div className="space-y-2">
                    {allColors.map(color => (
                      <label key={color} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="ml-3 text-dark/80 hover:text-navy-900">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-dark/70 text-lg mb-4">No products found matching your filters</p>
                <button
                  onClick={resetFilters}
                  className="bg-navy-900 text-cream px-6 py-2 rounded hover:bg-navy-800 transition"
                >
                  Clear Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              // Grid View
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer bg-white"
                  >
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden bg-dark">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-gold px-3 py-1 rounded-full text-navy-900 font-semibold text-sm">
                        ${product.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-playfair text-lg text-navy-900 mb-2">{product.name}</h3>
                      <p className="text-dark/70 text-sm mb-2">{product.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-yellow-500 text-sm">★ {product.rating}</span>
                        <span className="text-dark/60 text-xs">({product.reviews} reviews)</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            handleAddToCart(product);
                          }}
                          className="flex-1 bg-navy-900 text-cream px-3 py-2 rounded text-sm font-semibold hover:bg-navy-800 transition"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => addToWishlist(product)}
                          className={`px-3 py-2 rounded text-sm font-semibold transition ${
                            isInWishlist(product.id)
                              ? 'bg-gold text-navy-900'
                              : 'bg-gold/20 text-gold hover:bg-gold/30'
                          }`}
                          title="Add to Wishlist"
                        >
                          ♡
                        </button>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="px-3 py-2 border border-navy-900 text-navy-900 rounded text-sm hover:bg-navy-900/10 transition"
                          title="View Details"
                        >
                          👁
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-4">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex gap-6 items-start group"
                  >
                    {/* Image */}
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-dark">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-playfair text-xl text-navy-900 mb-2">{product.name}</h3>
                      <p className="text-dark/70 text-sm mb-3">{product.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                        <div>
                          <span className="text-dark/60">Available Sizes:</span>
                          <p className="text-navy-900 font-semibold">{product.size.join(', ')}</p>
                        </div>
                        <div>
                          <span className="text-dark/60">Available Colors:</span>
                          <p className="text-navy-900 font-semibold">{product.color.join(', ')}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-yellow-500">★ {product.rating}</span>
                          <span className="text-dark/60 text-sm">({product.reviews} reviews)</span>
                          <span className="text-dark/60">Category: {product.category === 'womens' ? "Women's" : product.category === 'mens' ? "Men's" : 'Bridal'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      <div className="text-3xl font-playfair text-gold">${product.price}</div>
                      <div className="flex flex-col gap-2 w-full">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-navy-900 text-cream px-4 py-2 rounded font-semibold hover:bg-navy-800 transition whitespace-nowrap"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => addToWishlist(product)}
                          className={`px-4 py-2 rounded font-semibold transition whitespace-nowrap ${
                            isInWishlist(product.id)
                              ? 'bg-gold text-navy-900'
                              : 'bg-gold/20 text-gold hover:bg-gold/30'
                          }`}
                        >
                          ♡ Wishlist
                        </button>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="border border-navy-900 text-navy-900 px-4 py-2 rounded hover:bg-navy-900/10 transition whitespace-nowrap"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
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
  );
}
