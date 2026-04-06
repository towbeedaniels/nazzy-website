import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart, isWishlistOpen, setIsWishlistOpen } = useAppContext();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <>
      {/* Wishlist Sidebar Overlay */}
      {isWishlistOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsWishlistOpen(false)}
        />
      )}

      {/* Wishlist Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-96 bg-dark text-cream shadow-2xl transform transition-transform duration-300 z-50 ${
          isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-b border-gold/30 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-playfair text-gold">Wishlist</h2>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="text-cream hover:text-gold transition"
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
        </div>

        {/* Wishlist Items */}
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {wishlist.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-cream/70 mb-4">Your wishlist is empty</p>
              <p className="text-cream/50 text-sm">
                Add items by clicking the heart icon on products
              </p>
            </div>
          ) : (
            <div className="space-y-4 p-6">
              {wishlist.map((item) => (
                <div key={item.id} className="border border-gold/30 rounded-lg p-4 hover:bg-navy-900 transition">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />

                  {/* Details */}
                  <h3 className="font-semibold text-gold mb-1">{item.name}</h3>
                  <p className="text-cream/70 text-sm mb-2">{item.category}</p>
                  <p className="text-2xl font-playfair text-gold mb-3">${item.price}</p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="flex-1 bg-gold/20 border border-gold text-gold px-3 py-2 rounded text-sm hover:bg-gold/30 transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="px-3 py-2 bg-red-900/30 border border-red-600 text-red-400 rounded text-sm hover:bg-red-900/50 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gold/30 p-6">
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="w-full bg-gold/20 border border-gold text-gold py-2 rounded font-semibold hover:bg-gold/30 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}
