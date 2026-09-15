// src/components/BookingModal.jsx
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Users, Mail, User, ShieldCheck } from 'lucide-react';

/**
 * Reusable BookingModal component
 * Handles form validation, controlled inputs, and simulated inquiry submission
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Callback to close the modal
 * @param {Object} props.pkg - Selected package data
 */
export default function BookingModal({ isOpen, onClose, pkg }) {
  // Controlled input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelers: 1,
    travelDate: '',
    specialRequests: ''
  });

  // Validation error states
  const [errors, setErrors] = useState({});
  // Submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Reset form when modal opens or package changes
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        travelers: 1,
        travelDate: '',
        specialRequests: ''
      });
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, pkg]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle change in controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Basic validation logic
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Number of travelers validation
    const travelersNum = Number(formData.travelers);
    if (!travelersNum || travelersNum < 1) {
      newErrors.travelers = 'At least 1 traveler is required';
    } else if (travelersNum > 50) {
      newErrors.travelers = 'For groups larger than 50, please contact our corporate desk';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Store copy of submitted data for the confirmation screen
      setSubmittedData({
        ...formData,
        packageTitle: pkg?.name || 'Selected Package',
        packagePrice: pkg?.formattedPrice || ''
      });
      setIsSubmitted(true);
    }
  };

  // Close when clicking outside the dialog content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow">Trip Inquiry</span>
            <h3 id="modal-title" className="modal-title">
              {isSubmitted ? 'Inquiry Confirmed' : `Book ${pkg?.name || 'Your Trip'}`}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="booking-success-view">
              <div className="success-icon-wrap">
                <CheckCircle size={54} className="success-check-icon" />
              </div>
              <h4>Thank you, {submittedData?.name}!</h4>
              <p className="success-message">
                Your booking inquiry for <strong>{submittedData?.packageTitle}</strong> has been
                received. Our destination specialist will review your details and email you a customized
                itinerary and booking schedule at <strong>{submittedData?.email}</strong> within 24 hours.
              </p>

              <div className="success-summary-box">
                <div className="summary-item">
                  <span className="summary-label">Package:</span>
                  <span className="summary-val">{submittedData?.packageTitle}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Estimated Price:</span>
                  <span className="summary-val">{submittedData?.packagePrice} / person</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Travelers:</span>
                  <span className="summary-val">{submittedData?.travelers} Person(s)</span>
                </div>
                {submittedData?.travelDate && (
                  <div className="summary-item">
                    <span className="summary-label">Preferred Date:</span>
                    <span className="summary-val">{submittedData?.travelDate}</span>
                  </div>
                )}
              </div>

              <div className="success-actions">
                <button type="button" className="btn btn-primary" onClick={onClose}>
                  Done & Explore More Trips
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="booking-form">
              {/* Package summary preview */}
              {pkg && (
                <div className="modal-pkg-summary">
                  <img src={pkg.image} alt={pkg.name} className="modal-pkg-img" />
                  <div className="modal-pkg-info">
                    <span className="modal-pkg-title">{pkg.name}</span>
                    <span className="modal-pkg-duration">{pkg.duration} • {pkg.destination}</span>
                    <span className="modal-pkg-price">{pkg.formattedPrice} <small>/ traveler</small></span>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="booking-name" className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ayesha Khan"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    autoFocus
                  />
                </div>
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="booking-email" className="form-label">
                  Email Address <span className="text-danger">*</span>
                </label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="booking-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                </div>
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              {/* Number of Travelers & Travel Date in a row */}
              <div className="form-row">
                <div className="form-group flex-1">
                  <label htmlFor="booking-travelers" className="form-label">
                    Travelers <span className="text-danger">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Users size={18} className="input-icon" />
                    <input
                      type="number"
                      id="booking-travelers"
                      name="travelers"
                      min="1"
                      max="50"
                      value={formData.travelers}
                      onChange={handleChange}
                      className={`form-input ${errors.travelers ? 'input-error' : ''}`}
                    />
                  </div>
                  {errors.travelers && <span className="form-error-msg">{errors.travelers}</span>}
                </div>

                <div className="form-group flex-1">
                  <label htmlFor="booking-date" className="form-label">
                    Preferred Date <span className="text-muted">(Optional)</span>
                  </label>
                  <div className="input-with-icon">
                    <Calendar size={18} className="input-icon" />
                    <input
                      type="date"
                      id="booking-date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="form-group">
                <label htmlFor="booking-requests" className="form-label">
                  Special Notes / Preferences <span className="text-muted">(Optional)</span>
                </label>
                <textarea
                  id="booking-requests"
                  name="specialRequests"
                  rows="3"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Dietary requests, hotel room preferences, pickup location..."
                  className="form-textarea"
                />
              </div>

              <div className="modal-guarantee">
                <ShieldCheck size={16} className="text-emerald" />
                <span>No instant payment required. Free cancellation up to 7 days before departure.</span>
              </div>

              {/* Modal Footer Buttons */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
