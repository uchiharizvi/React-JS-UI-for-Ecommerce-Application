import React, {useState} from "react";
import { register } from "./Api";

const Register = () => {
    const [form, setForm] = useState({username: '', password: ''});
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
        <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} value={form.username} placeholder="Username"/>
        <input type = "password" name="password" onChange={handleChange} value={form.password} placeholder="Password"/>
        <button type="submit">Register</button>
        </form>
    );
};
export default Register;
// This code defines a React component for a registration form.
// It uses the `useState` hook to manage form state and handles form submission.
// The `handleChange` function updates the state when the input values change.
// The `handleSubmit` function sends the form data to the server using the `register` function imported from `Api.js`.
// If the registration is successful, it alerts the user.
// If there's an error, it alerts the user about the error.
// The form includes two input fields for username and password, and a submit button.
// The `Register` component is exported for use in other parts of the application.
// This code defines a React component for a registration form. 
