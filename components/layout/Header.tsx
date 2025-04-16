
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-semibold text-timber-dark">Timber</span>
          <span className="text-sm uppercase tracking-widest text-timber-medium">Elegance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-timber-dark"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-6 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col gap-4">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link 
      href="/" 
      className="text-timber-dark hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      Home
    </Link>
    <Link 
      href="/products" 
      className="text-timber-dark hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      Products
    </Link>
    <Link 
      href="/gallery" 
      className="text-timber-dark hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      Gallery
    </Link>
    <Link 
      href="/about" 
      className="text-timber-dark hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      About
    </Link>
    <Link 
      href="/blog" 
      className="text-timber-dark hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      Blog
    </Link>
    <Link 
      href="/contact" 
      className="text-timber-dark hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      Contact
    </Link>
  </>
);

export default Header;
