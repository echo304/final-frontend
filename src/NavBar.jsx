import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My E-Commerce</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
