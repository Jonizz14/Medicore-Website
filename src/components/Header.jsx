import React, { useState, useEffect } from 'react';
import "./Header.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header id="mainHeader" className={`main-header fixed w-full z-50 transition duration-300 ${scrolled ? 'bg-white shadow-lg' : 'glass'}`}>
      <div className="container py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/images/logo.png" className="w-12 h-12 rounded-xl object-cover" alt="logo" />
          <div>
            <div className="text-lg font-display font-semibold">Medicore</div>
            <div className="text-xs text-gray-500">Premium Clinic System</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">Services</button>
          <button onClick={() => scrollToSection('doctors')} className="hover:text-primary transition">Doctors</button>
          <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition">Booking</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Contact</button>
          <button onClick={() => scrollToSection('booking')} className="btn btn-primary ml-2 hover-scale-102">
            Book Now
          </button>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="py-2 text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="py-2 text-left">Services</button>
            <button onClick={() => scrollToSection('doctors')} className="py-2 text-left">Doctors</button>
            <button onClick={() => scrollToSection('booking')} className="py-2 text-left">Booking</button>
            <button onClick={() => scrollToSection('contact')} className="py-2 text-left">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;