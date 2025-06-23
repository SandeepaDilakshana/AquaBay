import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            AquaBay
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-200 transition">
              Products
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-blue-200 transition">
              Contact Us
            </Link>
            <Link to="/login" className="hover:text-blue-200 transition">
              Login
            </Link>
            <Link to="/signup" className="hover:text-blue-200 transition">
              Sign Up
            </Link>
            <Link to="/cart" className="flex items-center hover:text-blue-200 transition">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1">(0)</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-2">
            <Link to="/" className="block hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/products" className="block hover:text-blue-200 transition">
              Products
            </Link>
            <Link to="/about" className="block hover:text-blue-200 transition">
              About Us
            </Link>
            <Link to="/contact" className="block hover:text-blue-200 transition">
              Contact Us
            </Link>
            <Link to="/login" className="block hover:text-blue-200 transition">
              Login
            </Link>
            <Link to="/signup" className="block hover:text-blue-200 transition">
              Sign Up
            </Link>
            <Link to="/cart" className="flex items-center hover:text-blue-200 transition">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1">Cart (0)</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;