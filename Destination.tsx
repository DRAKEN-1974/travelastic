'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './destination.css';

const destinations = [
  {
    id: 1,
    title: "Bali",
    image: "/images/bali x.jpg",
    category: "TROPICAL",
    description: "Paradise island with rich culture and beaches"
  },
  {
    id: 2,
    title: "Varanasi",
    image: "/images/varansi.jpg",
    category: "SPIRITUAL",
    description: "Ancient city on the banks of sacred Ganges"
  },
  {
    id: 3,
    title: "Santorini",
    image: "/images/santori1.jpg",
    category: "ISLANDS",
    description: "Iconic white buildings and Mediterranean charm"
  },
  {
    id: 4,
    title: "Kyoto",
    image: "/images/kyoto.jpg",
    category: "CULTURAL",
    description: "Traditional Japanese temples and gardens"
  },
  {
    id: 5,
    title: "Machu Picchu",
    image: "/images/machu.webp",
    category: "HISTORICAL",
    description: "Ancient Incan city in the Andes mountains"
  },
  {
    id: 6,
    title: "Dubai",
    image: "/images/dubai.jpg",
    category: "MODERN",
    description: "Futuristic city in the Arabian desert"
  }
];

const Destination = () => {
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!(e.buttons > 0)) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="featured-section">
      <div className="featured-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h1>Featured destinations</h1>
          <p>Explore our handpicked destinations around the world</p>
        </motion.div>

        <div 
          className="destinations-wrapper"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setStartX(0)}
          onMouseUp={() => setStartX(0)}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="destination-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -20 }}
            >
              <div className="card-image">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index < 2}
                />
                <div className="category">{destination.category}</div>
              </div>
              <div className="card-content">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <button className="explore-btn">
                  Explore
                  <span className="arrow">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;