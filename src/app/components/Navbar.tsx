'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Travelastic"
              width={120}
              height={30}
              priority
            />
          </Link>
        </div>

        <nav className="nav-center">
          <Link href="/destinations" className="nav-link">Destinations</Link>
          <Link href="/planning" className="nav-link">Planning</Link>
          <Link href="/inspiration" className="nav-link">Inspiration</Link>
          <Link href="/shop" className="nav-link">Shop</Link>
        </nav>

        <div className="nav-right">
          <button 
            className="search-button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <i className="fas fa-search"></i>
            <span>Search</span>
          </button>

          <button className="saves-button">
            <i className="far fa-bookmark"></i>
            <span>Saves</span>
          </button>

          <button className="sign-in-button">
            Sign in
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Where would you like to go?"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;