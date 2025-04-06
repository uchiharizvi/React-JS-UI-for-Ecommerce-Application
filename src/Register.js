import React, {useState} from "react";
import { register } from "./Api";

const Register = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
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
        <div style={styles.container}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Email"
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              placeholder="Password"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Register</button>
          </form>
        </div>
      );
    };

    const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Register;
