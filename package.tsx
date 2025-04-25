'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './package.css';

const packages = [
  {
    id: 1,
    title: 'Romantic Paris',
    type: 'Honeymoon Special',
    duration: '7 Days',
    price: '2,999',
    rating: 4.9,
    image: '/images/pairspackage.jpg',
    features: ['Eiffel Tower Visit', 'Seine River Cruise', 'Luxury Hotel Stay']
  },
  {
    id: 2,
    title: 'Maldives Paradise',
    type: 'Beach Getaway',
    duration: '5 Days',
    price: '3,499',
    rating: 4.8,
    image: '/images/maldives1.webp',
    features: ['Water Villa', 'Scuba Diving', 'Private Beach']
  },
  {
    id: 3,
    title: 'Swiss Adventure',
    type: 'Mountain Escape',
    duration: '6 Days',
    price: '2,799',
    rating: 4.7,
    image: '/images/swiss.jpg',
    features: ['Ski Resort', 'Mountain Train', 'Chocolate Tour']
  }
];

const Packages = () => {
  return (
    <section className="packages-section">
      <div className="packages-container">
        <motion.div
          className="packages-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Featured Packages</h2>
          <p>Curated experiences for unforgettable journeys</p>
        </motion.div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="package-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="package-image">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="package-type">{pkg.type}</div>
              </div>
              
              <div className="package-content">
                <div className="package-info">
                  <h3>{pkg.title}</h3>
                  <div className="package-meta">
                    <span className="duration">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {pkg.duration}
                    </span>
                    <span className="rating">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {pkg.rating}
                    </span>
                  </div>
                </div>

                <ul className="features-list">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="package-footer">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{pkg.price}</span>
                  </div>
                  <motion.button
                    className="book-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;