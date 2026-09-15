// src/components/PackageCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Star, ArrowRight } from 'lucide-react';

/**
 * Reusable PackageCard component
 * @param {Object} props
 * @param {Object} props.pkg - Package data object
 * @param {boolean} props.isFavorite - Whether this package is in favorites
 * @param {Function} props.onToggleFavorite - Callback when clicking the favorite heart button
 */
export default function PackageCard({ pkg, isFavorite, onToggleFavorite }) {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(pkg.id);
    }
  };

  return (
    <article className="package-card">
      <div className="package-card-image-wrap">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="package-card-img"
          loading="lazy"
        />

        <div className="package-badge-group">
          <span className="package-duration-badge">
            <Clock size={13} aria-hidden="true" />
            {pkg.duration}
          </span>
          <span className="package-rating-badge">
            <Star size={13} className="star-icon" aria-hidden="true" />
            {pkg.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={handleFavoriteClick}
          className={`favorite-btn ${isFavorite ? 'is-active' : ''}`}
          aria-label={isFavorite ? `Remove ${pkg.name} from favorites` : `Save ${pkg.name} to favorites`}
          title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
        >
          <Heart
            size={18}
            className={`heart-icon ${isFavorite ? 'filled' : ''}`}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      <div className="package-card-body">
        <div className="package-destination-row">
          <span className="package-destination-tag">{pkg.destination}</span>
        </div>

        <h3 className="package-title">
          <Link to={`/packages/${pkg.id}`}>{pkg.name}</Link>
        </h3>

        <p className="package-desc">{pkg.shortDescription}</p>

        <div className="package-card-footer">
          <div className="package-price-wrap">
            <span className="package-price-label">Starting from</span>
            <span className="package-price-value">{pkg.formattedPrice}</span>
          </div>

          <Link
            to={`/packages/${pkg.id}`}
            className="btn btn-primary btn-sm package-view-btn"
          >
            <span>View Package</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
