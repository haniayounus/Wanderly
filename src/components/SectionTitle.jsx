// src/components/SectionTitle.jsx
import React from 'react';

/**
 * Reusable section title component
 * @param {Object} props
 * @param {string} [props.tag] - Small label above the heading
 * @param {string} props.title - Main heading text
 * @param {string} [props.description] - Subtitle or explanatory text
 * @param {boolean} [props.center] - Whether to center-align the text
 */
export default function SectionTitle({ tag, title, description, center = true }) {
  return (
    <div className={`section-header ${center ? 'text-center' : 'text-left'}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
