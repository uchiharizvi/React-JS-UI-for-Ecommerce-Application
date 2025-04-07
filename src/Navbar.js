import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // adjust path

const Navbar = () => {
  return (
    <div style={styles.nav}>
      {/* Left side: Logo + App Name */}
      <div style={styles.logoSection}>
        <img src={logo} alt="Ecart Logo" style={styles.logo} />
        <div style={styles.divider} />
        <h2 style={styles.title}>Toobify Designs</h2>
      </div>

      {/* Middle: Navigation Links */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
      </div>

      {/* Right side: Auth Links */}
      <div style={styles.authLinks}>
        <Link to="/register" style={styles.link}>Sign Up</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#ffffffcc',
    borderBottom: '1px solid #ccc',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  divider: {
    width: '1px',
    height: '30px',
    backgroundColor: '#ccc',
    marginLeft: '10px',
    marginRight: '10px',
  },
  logo: {
    height: '40px',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#333',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  authLinks: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default Navbar;