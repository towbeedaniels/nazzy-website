import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-cream">
      <Header />
      <Hero />
      <Lookbook />
      <Services />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
