// src/components/WanderlyLogo.jsx
import React from 'react';

/**
 * Wanderly Official Brand Logo
 * Geometric emblem combining a modern circular compass with an integrated mountain 'W' silhouette
 * and a forward-pointing coral navigation arrow.
 *
 * @param {Object} props
 * @param {number} [props.size=36] - Pixel width & height
 * @param {string} [props.className=''] - Extra classes for styling
 * @param {'auto'|'light'|'dark'|'inverted'} [props.variant='auto'] - Color variant
 */
export default function WanderlyLogo({
  size = 36,
  className = '',
  variant = 'auto',
}) {
  // Determine stroke color: inverted/dark backgrounds get crisp white frame,
  // light backgrounds get the brand deep navy (#0B2341), or currentColor
  const getFrameColor = () => {
    if (variant === 'inverted' || variant === 'dark') return '#FFFFFF';
    if (variant === 'light') return '#0B2341';
    return 'currentColor';
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      fill="none"
      className={`wanderly-brand-logo ${className}`}
      aria-label="Wanderly Logo"
      role="img"
    >
      <g id="wanderly-emblem">
        {/* Main Circular Frame & Mountain 'W' Contour */}
        <path
          d="M 331 76
             A 192 192 0 1 0 140 407
             L 250 240
             L 360 407
             A 192 192 0 0 0 424 169"
          fill="none"
          stroke={getFrameColor()}
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="wanderly-logo-frame"
        />

        {/* Dynamic Coral Compass Pointer Needle */}
        <polygon
          points="250,165 452,48 335,250"
          fill="#FA654B"
          className="wanderly-logo-arrow"
        />

        {/* Center Pivot Bracket with Side Ears & Alignment Pin */}
        <g id="pivot-bracket" transform="translate(272, 228) rotate(45)">
          <path
            d="M -15 -7
               A 16 16 0 0 1 15 -7
               C 23 -7 23 7 15 7
               A 16 16 0 0 1 -15 7
               C -23 7 -23 -7 -15 -7 Z"
            fill={getFrameColor()}
            className="wanderly-logo-pivot"
          />
          {/* Center Pin Hole */}
          <circle
            cx="0"
            cy="0"
            r="7.5"
            fill={variant === 'inverted' || variant === 'dark' ? '#0B192C' : 'var(--bg-card, #FFFFFF)'}
            className="wanderly-logo-pin-hole"
          />
        </g>
      </g>
    </svg>
  );
}
