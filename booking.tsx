'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    destination: '',
    dates: '',
    guests: '1',
    type: 'luxury'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <motion.div
          className="booking-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Start Your Journey</h2>
          <p>Select your perfect destination and let us handle the rest</p>

          <motion.form 
            className="booking-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="form-grid">
              <div className="form-group">
                <label>Where to?</label>
                <select 
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                >
                  <option value="">Select Destination</option>
                  <option value="santorini">Santorini, Greece</option>
                  <option value="maldives">Maldives</option>
                  <option value="swiss-alps">Swiss Alps</option>
                </select>
              </div>

              <div className="form-group">
                <label>When?</label>
                <input 
                  type="date"
                  value={formData.dates}
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Guests</label>
                <select 
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Trip Type</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="luxury">Luxury</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="relaxation">Relaxation</option>
                </select>
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Plan My Trip
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;