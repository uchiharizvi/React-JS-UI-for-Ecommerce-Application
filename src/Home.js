import React from 'react';
import smartphone from './assets/data/categories/smartphone.jpeg';
import laptop from './assets/data/categories/laptop.jpg';
import kitchen_appliance from './assets/data/categories/kitchen_applicances.jpeg';
import apple from './assets/data/brands/apple.webp';
import samsung from './assets/data/brands/samsung.avif';
import hp from './assets/data/brands/hp.png';
const categories = [
  { name: 'Laptops', image: laptop },
  { name: 'Mobile Phones', image: smartphone },
  { name: 'Kitchen Appliances', image: kitchen_appliance },
];

const brands = [
  { name: 'Apple', image: apple },
  { name: 'Samsung', image: samsung },
  { name: 'HP', image: hp },
];

const Home = () => (
  <div style={styles.container}>
    <h2 style={styles.heading}>Shop by Category</h2>
    <div style={styles.grid}>
      {categories.map((cat, index) => (
        <div key={index} style={styles.card}>
          <img src={cat.image} alt={cat.name} style={styles.image} />
          <p style={styles.label}>{cat.name}</p>
        </div>
      ))}
    </div>
  {/* Shop by Brand */}
  <h2 style={{ ...styles.heading, marginTop: '60px' }}>Shop by Brands</h2>
  <div style={styles.grid}>
    {brands.map((brand, index) => (
      <div key={index} style={styles.card}>
        <img src={brand.image} alt={brand.name} style={styles.image} />
        <p style={styles.label}>{brand.name}</p>
      </div>
    ))}
  </div>
</div>
);

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  label: {
    marginTop: '12px',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Home;