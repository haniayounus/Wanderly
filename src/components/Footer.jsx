// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, Clock } from 'lucide-react';
import WanderlyLogo from './WanderlyLogo';

/**
 * Footer component with brand details, navigation, contact, and social placeholders
 */
export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-top-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-logo">
              <span className="logo-icon-wrap footer-logo-wrap">
                <WanderlyLogo size={26} className="logo-icon" variant="inverted" />
              </span>
              <span className="logo-text">Wanderly</span>
            </Link>
            <p className="footer-brand-tagline">
              Discover places worth remembering. We craft bespoke journeys across Pakistan's
              majestic northern corridors and inspiring global destinations.
            </p>
            <div className="footer-social-links" aria-label="Social media links">
              <a href="#social-instagram" className="social-icon-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#social-facebook" className="social-icon-btn" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#social-twitter" className="social-icon-btn" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#social-youtube" className="social-icon-btn" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <a href="/#packages">Tour Packages</a>
              </li>
              <li>
                <a href="/#why-us">Why Choose Us</a>
              </li>
              <li>
                <a href="/#testimonials">Traveler Reviews</a>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div className="footer-col">
            <h4 className="footer-heading">Top Destinations</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/packages/hunza-escape">Hunza Valley, PK</Link>
              </li>
              <li>
                <Link to="/packages/skardu-adventure">Skardu & Karakoram, PK</Link>
              </li>
              <li>
                <Link to="/packages/swat-getaway">Swat Valley, PK</Link>
              </li>
              <li>
                <Link to="/packages/istanbul-discovery">Istanbul, Turkey</Link>
              </li>
              <li>
                <Link to="/packages/dubai-explorer">Dubai, UAE</Link>
              </li>
              <li>
                <Link to="/packages/bali-retreat">Bali, Indonesia</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Suite 402, Beverly Centre, Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+92 (051) 844-9220 / +971 (4) 221-8890</span>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>adventures@wanderlytravel.com</span>
              </li>
              <li className="contact-item">
                <Clock size={18} className="contact-icon" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM PKT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Wanderly Travel Agency. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span className="dot-divider">•</span>
            <span>Terms of Service</span>
            <span className="dot-divider">•</span>
            <span>Travel Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
