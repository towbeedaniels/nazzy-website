import './App.css';
import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { PageProvider, usePageContext } from './context/PageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ShippingReturns from './pages/ShippingReturns';

function AppContent() {
  const { currentPage } = usePageContext();

  // Handle URL-based navigation
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/privacy') {
      // Navigate to privacy page via pathname
    } else if (path === '/terms') {
      // Navigate to terms page via pathname
    } else if (path === '/shipping') {
      // Navigate to shipping page via pathname
    }
  }, []);

  return (
    <div className="App bg-cream">
      <Header />
      <Cart />
      <Wishlist />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Lookbook />
          <Services />
          <About />
          <Booking />
        </>
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy />
      ) : currentPage === 'terms' ? (
        <TermsConditions />
      ) : currentPage === 'shipping' ? (
        <ShippingReturns />
      ) : (
        <>
          <Hero />
          <Lookbook />
          <Services />
          <About />
          <Booking />
        </>
      )}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <PageProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </PageProvider>
  );
}

export default App;
