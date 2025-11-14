import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="mainHeader"
      className={`header ${scrolled ? "header--scrolled" : "header--glass"}`}
    >
      <div className="header__container">
        <a href="#" className="logo">
          <img src="/images/logo.png" className="logo__image" alt="logo" />
          <div className="logo__text-group">
            <div className="logo__title">Medicore</div>
            <div className="logo__subtitle">Premium Clinic System</div>
          </div>
        </a>

        <nav className="nav__desktop">
          <button onClick={() => scrollToSection("home")} className="nav__link">
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="nav__link"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("doctors")}
            className="nav__link"
          >
            Doctors
          </button>
          <button
            onClick={() => scrollToSection("booking")}
            className="nav__link"
          >
            Booking
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav__link"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("booking")}
            className="btn btn--primary nav__book-btn"
          >
            Book Now
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav__toggle-btn"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      {mobileMenuOpen && (
        <div id="mobile-menu" className="nav__mobile-menu">
          <div className="nav__mobile-links">
            <button
              onClick={() => scrollToSection("home")}
              className="nav__mobile-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav__mobile-link"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("doctors")}
              className="nav__mobile-link"
            >
              Doctors
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="nav__mobile-link"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav__mobile-link"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
