// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-700 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">AgroRental</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
          <Link to="/login" className="hover:text-green-600">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
