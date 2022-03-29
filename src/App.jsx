import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Testimonials from "./pages/testimonials";
import Donate from "./pages/donate";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Dropdown from "./components/Dropdown";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Header toggleMenu={toggleMenu}/>
      <Dropdown toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/donate" element={<Donate />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/privacy" element={<Privacy />}/>
      </Routes>
      <Footer />
    </>
  )
}