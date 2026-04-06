import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { usePageContext } from '../context/PageContext';
import { searchProducts } from '../data/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigateTo, currentPage } = usePageContext();
  const {
    searchActive,
    setSearchActive,
    searchQuery,
    setSearchQuery,
    cartCount,
    setIsCartOpen,
    user,
    loginUser,
    logoutUser,
    isUserMenuOpen,
    setIsUserMenuOpen,
    wishlist,
  } = useAppContext();

  const [searchResults, setSearchResults] = useState([]);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const navItems = [
    { label: 'Home', href: '#home', action: () => navigateTo('home') },
    { label: 'Collections', href: '#collections', action: () => navigateTo('collections') },
    { label: 'Bespoke', href: '#services', action: null },
    { label: 'About', href: '#about', action: null },
    { label: 'Contact', href: '#booking', action: null },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSearchResults(searchProducts(query));
    } else {
      setSearchResults([]);
    }
  };

  const handleLogin = () => {
    if (loginForm.email && loginForm.password) {
      loginUser({
        name: loginForm.email.split('@')[0],
        email: loginForm.email,
      });
      setLoginForm({ email: '', password: '' });
      setIsUserMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoginForm({ email: '', password: '' });
  };

  return (
    <header className="sticky top-0 z-50 bg-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo-light.png"
              alt="Nazzy Stichez"
              className="h-12 md:h-14 w-auto hover:opacity-80 transition cursor-pointer"
              onClick={() => navigateTo('home')}
              title="Back to Home"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.action ? (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-cream hover:text-gold transition duration-300 font-montserrat text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-cream hover:text-gold transition duration-300 font-montserrat text-sm tracking-wide"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA and Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchActive(!searchActive)}
                className="text-cream hover:text-gold transition"
                title="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Search Results Dropdown */}
              {searchActive && (
                <div className="absolute right-0 mt-2 w-80 bg-dark border border-gold/30 rounded-lg shadow-2xl z-50">
                  <div className="p-4">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full bg-navy-900 border border-gold/50 rounded-sm px-3 py-2 text-cream focus:outline-none focus:border-gold"
                      autoFocus
                    />
                  </div>
                  {searchResults.length > 0 && (
                    <div className="max-h-96 overflow-y-auto">
                      {searchResults.map((product) => (
                        <a
                          key={product.id}
                          href="#lookbook"
                          className="block px-4 py-3 hover:bg-navy-800 border-t border-gold/20 transition"
                          onClick={() => setSearchActive(false)}
                        >
                          <p className="text-gold font-semibold text-sm">{product.name}</p>
                          <p className="text-cream/70 text-xs">${product.price}</p>
                        </a>
                      ))}
                    </div>
                  )}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="px-4 py-6 text-center text-cream/70 text-sm">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User Account */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="text-cream hover:text-gold transition relative"
                title="Account"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* User Menu Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-dark border border-gold/30 rounded-lg shadow-2xl z-50">
                  {user ? (
                    <div>
                      <div className="px-4 py-4 border-b border-gold/20">
                        <p className="text-gold font-semibold">Welcome!</p>
                        <p className="text-cream/80 text-sm">{user.email}</p>
                      </div>
                      <a href="#booking" className="block px-4 py-3 hover:bg-navy-800 text-cream text-sm">
                        My Orders
                      </a>
                      <a href="#booking" className="block px-4 py-3 hover:bg-navy-800 text-cream text-sm border-t border-gold/20">
                        Wishlist
                      </a>
                      <a href="#about" className="block px-4 py-3 hover:bg-navy-800 text-cream text-sm border-t border-gold/20">
                        Settings
                      </a>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 hover:bg-navy-800 text-cream text-sm border-t border-gold/20 text-left"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 space-y-3">
                      <div>
                        <label className="block text-cream/80 text-xs font-semibold mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                          placeholder="user@example.com"
                          className="w-full bg-navy-900 border border-gold/30 rounded-sm px-3 py-2 text-cream focus:outline-none focus:border-gold text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-cream/80 text-xs font-semibold mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                          placeholder="••••••••"
                          className="w-full bg-navy-900 border border-gold/30 rounded-sm px-3 py-2 text-cream focus:outline-none focus:border-gold text-sm"
                        />
                      </div>
                      <button
                        onClick={handleLogin}
                        className="w-full bg-gold text-dark font-semibold py-2 rounded-sm hover:bg-opacity-90 transition text-sm"
                      >
                        Sign In
                      </button>
                      <p className="text-cream/70 text-xs text-center">
                        New customer?{' '}
                        <a href="#booking" className="text-gold hover:underline">
                          Create account
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-cream hover:text-gold transition relative"
              title="Shopping Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Wishlist */}
            <a
              href="#lookbook"
              className="text-cream hover:text-gold transition relative"
              title="Wishlist"
            >
              ♡
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </a>

            <a href="#booking" className="button-gold">Book Consultation</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream hover:text-gold transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              item.action ? (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-cream hover:text-gold transition py-2"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-cream hover:text-gold transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <a href="#booking" className="w-full button-gold mt-4 inline-block text-center">
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
