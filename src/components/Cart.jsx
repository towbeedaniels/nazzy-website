import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function Cart() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, isCartOpen, setIsCartOpen } =
    useAppContext();

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsCartOpen(false)} />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-dark text-cream shadow-2xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-navy-900 px-6 py-4 flex justify-between items-center border-b border-gold/20">
          <h2 className="font-playfair text-2xl text-gold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-cream hover:text-gold transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <div>
            <div className="overflow-y-auto max-h-96 px-6 py-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-navy-900 rounded-lg p-4 border border-gold/20 hover:border-gold/50 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-gold font-semibold">{item.name}</h3>
                      <p className="text-cream/70 text-sm">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-cream/70 hover:text-gold transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="bg-gold/20 text-gold px-2 py-1 rounded hover:bg-gold/30 transition"
                    >
                      −
                    </button>
                    <span className="text-cream">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="bg-gold/20 text-gold px-2 py-1 rounded hover:bg-gold/30 transition"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-2 text-right text-gold font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="sticky bottom-0 bg-navy-900 px-6 py-4 border-t border-gold/20 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-cream/80">
                  <span>Subtotal:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-cream/80">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-gold/20 pt-2 flex justify-between text-gold font-semibold text-lg">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-gold text-dark font-semibold py-3 rounded-sm hover:bg-opacity-90 transition">
                Proceed to Checkout
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full border border-gold text-gold font-semibold py-3 rounded-sm hover:bg-gold/10 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <svg className="w-16 h-16 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <div className="text-center">
              <h3 className="text-cream font-semibold mb-2">Your cart is empty</h3>
              <p className="text-cream/70 mb-6">
                Add items from our collections to get started
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="button-gold"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
