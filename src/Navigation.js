import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Services from "./views/Services";
import Contact from "./views/Contact";
import PortfolioDetail from "./views/PortfolioDetail";
import NotFound from "./views/NotFound";
const Navigation = () => {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<PortfolioDetail />} />
        {/*<Route path="/services" element={<Services/>} />*/}
        <Route path="/services/:serviceId" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default Navigation;
