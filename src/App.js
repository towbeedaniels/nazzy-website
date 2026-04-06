import './App.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <AppProvider>
      <div className="App bg-cream">
        <Header />
        <Cart />
        <Hero />
        <Lookbook />
        <Services />
        <About />
        <Booking />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
