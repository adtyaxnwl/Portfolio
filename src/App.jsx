import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Weather from './pages/Weather';
import './index.css';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
