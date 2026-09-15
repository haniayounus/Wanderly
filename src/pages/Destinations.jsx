// src/pages/Destinations.jsx
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import { destinations } from '../data/destinations.js';
import { MapPin, Globe, Mountain, Filter } from 'lucide-react';

/**
 * Destinations Page
 * Demonstrates React state, conditional rendering, and array filtering
 */
export default function Destinations() {
  // 1. React state for active filter ('All', 'Pakistan', 'International')
  const [activeFilter, setActiveFilter] = useState('All');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Filter destinations array dynamically using React state
  const filteredDestinations = destinations.filter((dest) => {
    if (activeFilter === 'All') return true;
    return dest.region.toLowerCase() === activeFilter.toLowerCase();
  });

  // Filter tab buttons definition
  const filterOptions = [
    { label: 'All', count: destinations.length, icon: Globe },
    {
      label: 'Pakistan',
      count: destinations.filter((d) => d.region === 'Pakistan').length,
      icon: Mountain
    },
    {
      label: 'International',
      count: destinations.filter((d) => d.region === 'International').length,
      icon: MapPin
    }
  ];

  return (
    <div className="destinations-page">
      {/* Destinations Page Hero */}
      <div className="page-hero">
        <div className="site-container text-center">
          <span className="page-eyebrow">Discover The Globe</span>
          <h1 className="page-title">Explore Travel Destinations</h1>
          <p className="page-subtitle">
            From the soaring granite spires of the Karakoram to vibrant international cultures.
            Select a region below to filter through our destinations.
          </p>
        </div>
      </div>

      <div className="site-container section-padding">
        {/* Filter Controls Bar */}
        <div className="filter-bar-container">
          <div className="filter-label-group">
            <Filter size={18} className="filter-icon" />
            <span className="filter-label">Filter by Region:</span>
          </div>

          <div className="filter-buttons-group" role="tablist" aria-label="Destination filters">
            {filterOptions.map((opt) => {
              const IconComp = opt.icon;
              const isSelected = activeFilter === opt.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`filter-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveFilter(opt.label)}
                >
                  <IconComp size={15} aria-hidden="true" />
                  <span>{opt.label}</span>
                  <span className="filter-count-badge">{opt.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count & Current Filter Indicator */}
        <div className="filter-status-row">
          <p className="filter-status-text">
            Showing <strong>{filteredDestinations.length}</strong> {activeFilter === 'All' ? 'destinations worldwide' : `${activeFilter} destinations`}
          </p>
        </div>

        {/* Dynamic Destinations Grid via map() */}
        {filteredDestinations.length > 0 ? (
          <div className="destinations-grid">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <div className="empty-results-box">
            <p>No destinations found for this filter.</p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setActiveFilter('All')}
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
