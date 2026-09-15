// src/pages/PackageDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { packages } from '../data/packages.js';
import BookingModal from '../components/BookingModal.jsx';
import {
  Clock,
  Star,
  MapPin,
  Heart,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ChevronLeft,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';

/**
 * Reusable PackageDetails page driven by dynamic URL parameter :id
 * @param {Object} props
 * @param {Array<string>} props.favorites - Array of favorited package IDs
 * @param {Function} props.onToggleFavorite - Function to toggle favorite status
 */
export default function PackageDetails({ favorites = [], onToggleFavorite }) {
  // Extract :id parameter from current URL using React Router
  const { id } = useParams();
  const navigate = useNavigate();

  // Booking modal open state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll to top on load or ID change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find matching package from packages data array
  const pkg = packages.find((p) => p.id === id);

  // If package is not found for this URL parameter, show friendly fallback
  if (!pkg) {
    return (
      <div className="package-not-found site-container section-padding text-center">
        <div className="not-found-card">
          <Compass size={48} className="text-muted mb-3" />
          <h2>Package Not Found</h2>
          <p>We couldn't find the travel package you're looking for.</p>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary">
              <ChevronLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(pkg.id);

  return (
    <div className="package-details-page">
      {/* Top Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="site-container">
          <div className="breadcrumb-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="breadcrumb-back-btn"
            >
              <ChevronLeft size={16} />
              <span>Back</span>
            </button>
            <span className="breadcrumb-sep">/</span>
            <Link to="/destinations" className="breadcrumb-link">Destinations</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{pkg.name}</span>
          </div>
        </div>
      </div>

      <div className="site-container details-content-container">
        {/* Package Header Row */}
        <div className="pkg-header-row">
          <div>
            <div className="pkg-meta-tags">
              <span className="badge-region">
                <MapPin size={13} />
                {pkg.destination}
              </span>
              <span className="badge-rating">
                <Star size={13} className="star-icon" fill="currentColor" />
                {pkg.rating} ({pkg.reviewsCount} reviews)
              </span>
            </div>
            <h1 className="pkg-detail-title">{pkg.name}</h1>
          </div>

          {/* Action buttons (Favorite) */}
          <div className="pkg-detail-actions">
            <button
              type="button"
              onClick={() => onToggleFavorite(pkg.id)}
              className={`detail-action-btn ${isFavorite ? 'is-fav' : ''}`}
              title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
              aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            >
              <Heart
                size={18}
                fill={isFavorite ? 'currentColor' : 'none'}
                className={isFavorite ? 'text-rose' : ''}
              />
              <span>{isFavorite ? 'Saved' : 'Favorite'}</span>
            </button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="pkg-hero-media">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="pkg-hero-img"
          />
          <div className="pkg-hero-overlay-tags">
            <span className="pkg-overlay-tag">
              <Clock size={14} />
              {pkg.duration}
            </span>
            <span className="pkg-overlay-tag">
              <Users size={14} />
              {pkg.groupSize || 'Small group tour'}
            </span>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="pkg-layout-grid">
          {/* Left Column: Overview, Included, Itinerary */}
          <div className="pkg-main-col">
            {/* Overview Section */}
            <section className="detail-section">
              <h2 className="detail-heading">Trip Overview</h2>
              <p className="detail-paragraph">{pkg.description}</p>
            </section>

            {/* What's Included */}
            <section className="detail-section">
              <h2 className="detail-heading">What's Included</h2>
              <div className="included-list-grid">
                {pkg.included && pkg.included.map((item, index) => (
                  <div key={index} className="included-item">
                    <CheckCircle2 size={18} className="included-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-day Itinerary */}
            <section className="detail-section">
              <h2 className="detail-heading">Day-by-Day Itinerary</h2>
              <div className="itinerary-timeline">
                {pkg.itinerary && pkg.itinerary.map((dayItem) => (
                  <div key={dayItem.day} className="timeline-node">
                    <div className="timeline-marker">
                      <span className="day-badge">Day {dayItem.day}</span>
                    </div>
                    <div className="timeline-content">
                      <h3 className="itinerary-title">{dayItem.title}</h3>
                      <p className="itinerary-desc">{dayItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <aside className="pkg-sidebar-col">
            <div className="sticky-booking-card">
              <div className="booking-card-price-header">
                <span className="price-lead-label">Starting Price</span>
                <div className="price-row">
                  <span className="detail-price">{pkg.formattedPrice}</span>
                  <span className="price-subtext">/ traveler</span>
                </div>
              </div>

              <div className="booking-card-specs">
                <div className="spec-row">
                  <span className="spec-label">Duration</span>
                  <span className="spec-value">{pkg.duration}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Group Size</span>
                  <span className="spec-value">{pkg.groupSize}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Trip Rating</span>
                  <span className="spec-value">★ {pkg.rating} / 5.0</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Availability</span>
                  <span className="spec-value text-emerald">Guaranteed Departures</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block btn-book-trip"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <span>Book This Trip</span>
                <ArrowRight size={18} />
              </button>

              <div className="booking-guarantees">
                <div className="guarantee-line">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>No payment needed today — free 24-hr hold</span>
                </div>
                <div className="guarantee-line">
                  <Calendar size={16} className="text-emerald" />
                  <span>Flexible rescheduling if plans change</span>
                </div>
              </div>

              <div className="custom-trip-notice">
                <p>Have custom requirements or travel dates? Click "Book This Trip" to send notes to our trip planner.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Booking Inquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        pkg={pkg}
      />
    </div>
  );
}
