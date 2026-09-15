// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import PackageCard from '../components/PackageCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { destinations } from '../data/destinations.js';
import { packages } from '../data/packages.js';
import { testimonials } from '../data/testimonials.js';
import {
  Compass,
  ShieldCheck,
  Users,
  CalendarCheck,
  Headphones,
  ArrowRight,
  Heart,
  Sparkles
} from 'lucide-react';

/**
 * Home page component
 * @param {Object} props
 * @param {Array<string>} props.favorites - Array of favorited package IDs
 * @param {Function} props.onToggleFavorite - Function to toggle favorite status
 * @param {Function} props.onOpenBooking - Function to open booking modal for a package
 */
export default function Home({ favorites, onToggleFavorite, onOpenBooking }) {
  // State for filtering packages on homepage (All vs Favorites)
  const [packageFilter, setPackageFilter] = useState('all');

  // Filter packages based on selected tab
  const displayedPackages = packageFilter === 'favorites'
    ? packages.filter(pkg => favorites.includes(pkg.id))
    : packages;

  // Benefits list for "Why Choose Us"
  const benefits = [
    {
      id: 'benefit-1',
      icon: Compass,
      title: 'Handpicked Destinations',
      description: 'Every route, mountain pass, and heritage site is personally vetted by our seasoned expedition team.'
    },
    {
      id: 'benefit-2',
      icon: Users,
      title: 'Trusted Local Guides',
      description: 'Travel alongside accredited local storytellers who know the culture, terrain, and hidden gems intimately.'
    },
    {
      id: 'benefit-3',
      icon: CalendarCheck,
      title: 'Flexible Packages',
      description: 'Customizable dates, small-group sizes, and stress-free reschedule options designed for real life.'
    },
    {
      id: 'benefit-4',
      icon: Headphones,
      title: '24/7 Travel Support',
      description: 'From departure to return, our dedicated concierge is on standby for seamless peace of mind.'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Popular Destinations Section */}
      <section className="section-padding bg-surface" id="destinations-section">
        <div className="site-container">
          <SectionTitle
            tag="Explore The World"
            title="Popular Destinations"
            description="From the towering snowy peaks of Gilgit-Baltistan to exotic tropical beaches and timeless imperial capitals."
          />

          <div className="destinations-grid">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>

          <div className="section-bottom-action">
            <Link to="/destinations" className="btn btn-outline">
              <span>View All Destinations & Regions</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Packages Section */}
      <section className="section-padding" id="packages">
        <div className="site-container">
          <div className="packages-header-row">
            <SectionTitle
              tag="Curated Itineraries"
              title="Featured Travel Packages"
              description="All-inclusive experiences with guided tours, premium stays, and seamless logistics."
              center={false}
            />

            {/* Quick Package Filter Switch (All vs Saved Favorites) */}
            <div className="package-filter-pills" role="tablist" aria-label="Filter packages">
              <button
                type="button"
                role="tab"
                aria-selected={packageFilter === 'all'}
                className={`filter-pill ${packageFilter === 'all' ? 'active' : ''}`}
                onClick={() => setPackageFilter('all')}
              >
                All Packages ({packages.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={packageFilter === 'favorites'}
                className={`filter-pill ${packageFilter === 'favorites' ? 'active' : ''}`}
                onClick={() => setPackageFilter('favorites')}
              >
                <Heart size={14} className={favorites.length > 0 ? 'text-rose' : ''} fill={packageFilter === 'favorites' ? 'currentColor' : 'none'} />
                Saved Favorites ({favorites.length})
              </button>
            </div>
          </div>

          {displayedPackages.length === 0 ? (
            <div className="empty-favorites-box">
              <div className="empty-icon-wrap">
                <Heart size={36} className="text-muted" />
              </div>
              <h3>No Saved Packages Yet</h3>
              <p>Click the heart icon on any package card to save trips you'd love to take.</p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setPackageFilter('all')}
              >
                Browse All Packages
              </button>
            </div>
          ) : (
            <div className="packages-grid">
              {displayedPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isFavorite={favorites.includes(pkg.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="section-padding bg-surface" id="why-us">
        <div className="site-container">
          <SectionTitle
            tag="The Wanderly Difference"
            title="Why Choose Wanderly"
            description="We combine deep local knowledge with thoughtful hospitality to deliver trips you will talk about for decades."
          />

          <div className="benefits-grid">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.id} className="benefit-card">
                  <div className="benefit-icon-wrap">
                    <IconComponent size={24} className="benefit-icon" />
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="section-padding" id="testimonials">
        <div className="site-container">
          <SectionTitle
            tag="Traveler Stories"
            title="What Our Guests Say"
            description="Read firsthand reflections from travelers who discovered unforgettable memories with us."
          />

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA Banner */}
      <section className="cta-banner-section">
        <div className="site-container">
          <div className="cta-banner-card">
            <div className="cta-content">
              <span className="cta-tag">Ready For Your Next Journey?</span>
              <h2 className="cta-heading">Let's craft the journey of a lifetime.</h2>
              <p className="cta-subtext">
                Speak with our destination advisors today or browse our handpicked itineraries.
                No hassle, transparent pricing, and memories that linger forever.
              </p>
              <div className="cta-buttons">
                <Link to="/destinations" className="btn btn-primary cta-btn">
                  <span>Explore Destinations</span>
                  <Compass size={18} aria-hidden="true" />
                </Link>
                <a href="#packages" className="btn btn-secondary cta-btn">
                  <span>Browse Packages</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
