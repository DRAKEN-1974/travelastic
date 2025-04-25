'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './middle.css';

const Middle = () => {
  return (
    <section className="middle-section">
      <div className="middle-container">
        <div className="content-grid">
          {/* Left Side - Video */}
          <motion.div
            className="video-container"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="floating-video"
            >
              <source src="/images/31175-384523301_small.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="text-content"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Travelastic is a leading travel agency focused on luxury trips, adventure tours, and unique experiences.</h2>
            
            <motion.div
              className="action-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#services">What we offer</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Middle;