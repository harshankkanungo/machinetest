import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Pricing from "./pages/Pricing";
import PhotoStyle from "./pages/PhotoStyle";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community" element={<PhotoStyle />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
