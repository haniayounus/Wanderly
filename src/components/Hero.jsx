// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

/**
 * Hero section component for the Wanderly homepage
 */
export default function Hero() {
  const scrollToPackages = (e) => {
    e.preventDefault();
    const pkgSection = document.getElementById('packages');
    if (pkgSection) {
      pkgSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Image Container with Overlay */}
      <div className="hero-bg-media">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic scenic mountain lake landscape"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-container">
        <div className="hero-badge">
          <span>Curated Travel Experiences</span>
        </div>

        <h1 className="hero-headline">
          Discover places <br className="hidden-mobile" />
          <span className="hero-headline-highlight">worth remembering.</span>
        </h1>

        <p className="hero-subtitle">
          Curated trips, unforgettable destinations, and experiences designed around you.
        </p>

        <div className="hero-cta-group">
          <Link to="/destinations" className="btn btn-hero-primary">
            <span>Explore Destinations</span>
            <Compass size={18} aria-hidden="true" />
          </Link>

          <a href="#packages" onClick={scrollToPackages} className="btn btn-hero-secondary">
            <span>View Packages</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Hero quick credibility stats */}
        <div className="hero-stats-row">
          <div className="hero-stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Curated Destinations</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Handpicked Itineraries</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat-item">
            <span className="stat-number">4.9 ★</span>
            <span className="stat-label">Traveler Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
