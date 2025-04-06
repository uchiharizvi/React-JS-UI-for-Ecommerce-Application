import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={styles.container}>
    <h1>Welcome to Ecart</h1>
    <div style={styles.buttonGroup}>
      <Link to="/register" style={styles.button}>Sign Up</Link>
      <Link to="/login" style={styles.button}>Login</Link>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
  }
};

export default Home;