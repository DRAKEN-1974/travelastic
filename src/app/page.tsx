'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './styles.css';

// Animation variants
const fadeInUp = {
  initial: { 
    y: 60, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { 
    scale: 0.9, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// ...rest of your existing code remains the same...
export default function Home() {
  return (
    <main className="main">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="hero-content"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeInUp}
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            variants={fadeInUp}
          >
            Explore the world's most amazing destinations
          </motion.p>
          <motion.div 
            className="search-box"
            variants={fadeInUp}
          >
            <input type="text" placeholder="Where do you want to go?" />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Destinations */}
      <motion.section 
        className="destinations"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="section-header"
          variants={fadeInUp}
        >
          <h2>Popular Destinations</h2>
          <p>Discover our most loved locations</p>
        </motion.div>
        <motion.div 
          className="destination-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: 'Bali',
              image: '/images/bali.jpg'
            },
            {
              name: 'Paris',
              image: '/images/paris.jpeg'
            },
            {
              name: 'Tokyo',
              image: '/images/tokyo.webp'
            },
            {
              name: 'New York',
              image: '/images/newyork2.jpg'
            }
          ].map((destination, index) => (
            <motion.div
              key={index}
              className="destination-card"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="destination-image">
                <Image 
                  src={destination.image}
                  alt={destination.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <button className="explore-btn">Explore</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Planning Section */}
      <motion.section 
        className="planning"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="section-header"
          variants={fadeInUp}
        >
          <h2>Plan Your Perfect Trip</h2>
          <p>Everything you need for your next adventure</p>
        </motion.div>
        <motion.div 
          className="planning-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { icon: 'plane', title: 'Flights', desc: 'Find the best deals on flights worldwide' },
            { icon: 'hotel', title: 'Hotels', desc: 'Book your perfect stay from our curated selection' },
            { icon: 'map-marked-alt', title: 'Tours', desc: 'Discover unique experiences and activities' },
            { icon: 'car', title: 'Car Rental', desc: 'Get the best rates on car rentals' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="planning-card"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <i className={`fas fa-${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Travel Inspiration */}
      <motion.section 
        className="inspiration"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="section-header"
          variants={fadeInUp}
        >
          <h2>Travel Inspiration</h2>
          <p>Stories and guides to inspire your next trip</p>
        </motion.div>
        <motion.div 
          className="inspiration-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="inspiration-card"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="inspiration-image">
                <Image 
                  src={`/images/inspiration-${item}.jpg`}
                  alt={`Travel inspiration ${item}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="inspiration-content">
                <span className="category">Travel Guide</span>
                <h3>Discover Hidden Gems</h3>
                <p>Explore off-the-beaten-path destinations...</p>
                <button className="read-more">Read More</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Expert Section */}
      <motion.section 
        className="expert-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="expert-container"
          variants={staggerContainer}
        >
          <motion.div 
            className="expert-content"
            variants={fadeInUp}
          >
            <div className="expert-branding">
              <h3>Travelastic Experts</h3>
              <h2>Your dream itinerary,<br />crafted with you</h2>
            </div>
            <p className="expert-description">
              Connect with our award-winning local experts to craft your personalized, unforgettable trip.
            </p>
            <div className="expert-tabs">
              <button className="tab-button active">How does it work?</button>
              <button className="tab-button">Meet our experts</button>
              <button className="tab-button">What's included?</button>
            </div>
            <p className="expert-details">
              Make a trip request, connect with a local expert, and sit back while our experts craft a custom itinerary based on expertise, exclusivity, and ease. It's a trip you couldn't plan yourself, all with 24/7 on-the-ground support.
            </p>
            <motion.button 
              className="explore-expert-btn"
              whileHover={{ x: 5 }}
            >
              Explore with Experts
              <i className="fas fa-arrow-right"></i>
            </motion.button>
          </motion.div>
          <motion.div 
            className="expert-image"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/z1.jpg"
              alt="Local travel expert"
              width={600}
              height={700}
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Newsletter */}
      <motion.section 
        className="newsletter"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="background-pattern">
          <motion.div 
            className="pattern-waves"
            animate={{ 
              backgroundPositionX: ["0%", "100%"],
              backgroundPositionY: ["0%", "100%"]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>
        <motion.div 
          className="newsletter-container"
          variants={fadeInUp}
        >
          <div className="newsletter-icon">
            <i className="far fa-envelope-open"></i>
          </div>
          <h2>Travel inspiration delivered<br />directly to your inbox</h2>
          <form className="newsletter-form">
            <motion.div 
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <input type="email" placeholder="Email address" required />
              <button type="submit">Subscribe now</button>
            </motion.div>
            <p className="privacy-notice">
              Subscribe to our newsletters and promotions. Read our{' '}
              <a href="/privacy">Privacy Policy.</a>
            </p>
          </form>
        </motion.div>
      </motion.section>
    </main>
  );
}