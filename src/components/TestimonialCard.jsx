// src/components/TestimonialCard.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

/**
 * Reusable TestimonialCard component
 * @param {Object} props
 * @param {Object} props.testimonial - Testimonial data object
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
          {[...Array(testimonial.rating)].map((_, index) => (
            <Star key={index} size={16} className="star-icon" fill="currentColor" />
          ))}
        </div>
        <Quote size={24} className="testimonial-quote-icon" aria-hidden="true" />
      </div>

      <p className="testimonial-comment">"{testimonial.comment}"</p>

      <div className="testimonial-author">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testimonial-avatar"
          loading="lazy"
        />
        <div className="testimonial-info">
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <span className="testimonial-meta">
            {testimonial.location} • <strong className="testimonial-trip">{testimonial.trip}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
