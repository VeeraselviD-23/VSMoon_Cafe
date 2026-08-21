import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Membership from "./Pages/Membership";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";

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