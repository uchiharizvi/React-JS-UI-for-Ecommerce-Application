import React, { useState } from 'react';
import { login } from './Api';
import formStyles from './styles/formStyles';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await login(form);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={formStyles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={formStyles.form}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          style={formStyles.input}
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          style={formStyles.input}
          required
        />
        {error && <p style={formStyles.error}>{error}</p>}
        <button type="submit" style={formStyles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;