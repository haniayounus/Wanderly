// src/components/DestinationCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass } from 'lucide-react';

/**
 * Reusable DestinationCard component
 * @param {Object} props
 * @param {Object} props.destination - Destination item data
 */
export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <div className="destination-card-image-wrap">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-card-img"
          loading="lazy"
        />
        <span className="destination-region-badge">
          <MapPin size={13} aria-hidden="true" />
          {destination.country}
        </span>
      </div>

      <div className="destination-card-content">
        <h3 className="destination-card-title">{destination.name}</h3>
        <p className="destination-card-desc">{destination.shortDescription}</p>

        <div className="destination-card-footer">
          {destination.packageId ? (
            <Link
              to={`/packages/${destination.packageId}`}
              className="btn-link destination-explore-btn"
            >
              <span>Explore Tour</span>
              <Compass size={16} aria-hidden="true" />
            </Link>
          ) : (
            <Link to="/destinations" className="btn-link destination-explore-btn">
              <span>View Details</span>
              <Compass size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
