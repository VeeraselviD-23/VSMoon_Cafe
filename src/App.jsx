import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Membership from "./pages/Membership";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/membership" element={<Membership />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;