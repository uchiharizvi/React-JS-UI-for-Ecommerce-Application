import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.name}>Toobify</h1>
      <h2 style={styles.title}>Canva Designer | Freelancer</h2>
      <p style={styles.pronouns}>she/her</p>

      <p style={styles.tagline}>🎯 We design, You shine!</p>

      <ul style={styles.services}>
        <li>🖌️ Logos</li>
        <li>📱 Social Media Posts</li>
        <li>🎨 Visual Branding</li>
      </ul>

      <p style={styles.description}>🚀 Turning ideas into stunning visuals</p>
      <p style={styles.contact}>📩 DM to break the mold</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  name: {
    fontSize: '2.5rem',
    color: '#007bff',
    marginBottom: '5px',
  },
  title: {
    fontSize: '1.3rem',
    color: '#555',
    marginBottom: '5px',
  },
  pronouns: {
    fontSize: '1rem',
    color: '#999',
    marginBottom: '20px',
  },
  tagline: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '20px',
  },
  services: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '10px',
  },
  contact: {
    fontSize: '1.1rem',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default About;