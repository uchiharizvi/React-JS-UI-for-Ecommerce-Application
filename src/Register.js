import React, { useState } from "react";
import { register } from "./Api";
import formStyles from './styles/formStyles';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("User registered successfully");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div style={formStyles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={formStyles.form}>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          style={formStyles.input}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
          style={formStyles.input}
          required
        />
        <button type="submit" style={{ ...formStyles.button, backgroundColor: '#28a745' }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;