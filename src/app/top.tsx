'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import './top.css';

const travelImages = [
  '/images/mountain.jpg',
  '/images/beach.jpg',
  '/images/mountain1.jpg',
  '/images/sky.jpg',
];

const fadeUpVariants = {
  initial: { y: 200, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
};

const Top = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % travelImages.length);
    }, 4000); // Changed to 4 seconds for better viewing

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="top-section">
      <div className="top-container">
        <motion.div
          className="title-container"
          initial="initial"
          animate="animate"
        >
          <div className="line-wrap">
            <motion.h1 variants={fadeUpVariants} transition={{ delay: 0.2 }}>
              Explore
            </motion.h1>
          </div>
          <div className="line-wrap">
            <motion.h1 variants={fadeUpVariants} transition={{ delay: 0.4 }}>
              the world
            </motion.h1>
          </div>
          <div className="line-wrap">
            <motion.h1 variants={fadeUpVariants} transition={{ delay: 0.6 }}>
              with us
            </motion.h1>
          </div>
          
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Crafting unforgettable journeys and lifetime memories
          </motion.p>
        </motion.div>

        <motion.div
          className="circle-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
            delay: 0.8
          }}
        >
          <div className="circle">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="image-container"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
              >
                <Image
                  src={travelImages[currentImage]}
                  alt="Travel destination"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  className="travel-image"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="scrolldown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="scroll-line"></div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Top;
