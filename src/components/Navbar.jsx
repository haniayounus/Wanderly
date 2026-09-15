// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Heart } from 'lucide-react';
import WanderlyLogo from './WanderlyLogo';

/**
 * Navbar component with responsive mobile drawer, dark mode toggle, and favorites counter
 * @param {Object} props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.onToggleTheme - Theme toggle handler
 * @param {number} props.favoritesCount - Number of favorited packages
 */
export default function Navbar({ theme, onToggleTheme, favoritesCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to scroll to add elevation shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle smooth scroll to packages or contact if on home page
  const handleAnchorClick = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else {
      // If not on home page, navigate to home with hash
      navigate(`/#${targetId}`);
      setMobileMenuOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" aria-label="Wanderly Travel Agency">
          <span className="logo-icon-wrap">
            <WanderlyLogo size={28} className="logo-icon" variant={theme === 'dark' ? 'inverted' : 'light'} />
          </span>
          <span className="logo-text">Wanderly</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className={`nav-link ${isActive('/destinations') ? 'active' : ''}`}
          >
            Destinations
          </Link>
          <a
            href="/#packages"
            onClick={(e) => handleAnchorClick(e, 'packages')}
            className="nav-link"
          >
            Packages
          </a>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, 'contact')}
            className="nav-link"
          >
            Contact
          </a>
        </nav>

        {/* Right side controls: Favorites, Dark Mode Toggle & Mobile Menu button */}
        <div className="navbar-actions">
          {/* Favorites quick indicator */}
          <a
            href="/#packages"
            onClick={(e) => handleAnchorClick(e, 'packages')}
            className="favorites-badge-btn"
            title={`${favoritesCount} saved trip(s)`}
            aria-label={`${favoritesCount} saved trips`}
          >
            <Heart size={19} className={favoritesCount > 0 ? 'text-rose' : ''} fill={favoritesCount > 0 ? 'currentColor' : 'none'} />
            {favoritesCount > 0 && (
              <span className="favorites-pill">{favoritesCount}</span>
            )}
          </a>

          {/* Theme Toggle (Light / Dark) */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="theme-icon sun" />
            ) : (
              <Moon size={20} className="theme-icon moon" />
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <Link
              to="/"
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className={`mobile-nav-link ${isActive('/destinations') ? 'active' : ''}`}
            >
              Destinations
            </Link>
            <a
              href="/#packages"
              onClick={(e) => handleAnchorClick(e, 'packages')}
              className="mobile-nav-link"
            >
              Packages
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="mobile-nav-link"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
