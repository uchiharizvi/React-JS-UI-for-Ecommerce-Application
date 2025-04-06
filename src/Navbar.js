import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // adjust path

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <div style={styles.logoSection}>
        <img src={logo} alt="Ecart Logo" style={styles.logo} />
        <h2 style={styles.title}>Ecart App</h2>
      </div>
      <div style={styles.links}>
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
  logo: {
    height: '40px',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#333',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default Navbar;