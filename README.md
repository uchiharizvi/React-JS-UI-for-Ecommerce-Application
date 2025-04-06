# 🛍️ Ecart Web UI

This is the React frontend for the **Ecart** application. It currently supports **user registration**, and will soon include **login**, **product browsing**, **wishlist**, **cart**, and more.

---

## 🚀 Features

✅ User Registration (with email & password)  
✅ API integration with backend (Spring Boot)  
✅ Centralized routing using React Router  
✅ Clean, centered UI with responsive form layout  
✅ Home page with navigation options for Sign Up / Login

---

## 🧰 Tech Stack

- **React.js**
- **React Router DOM**
- **Axios** for API calls
- **Java Spring Boot** (backend, not included here)

---

## 📦 Installation

Make sure you have `node` and `npm` installed. Then run:

```bash
git clone https://github.com/your-username/ecart-web-ui.git
cd ecart-web-ui
npm install


▶️ Running the App
`npm start`
The app will start on:
📍 http://localhost:3000

Make sure your Spring Boot backend is running on http://localhost:8081.

📁 Project Structure
src/
├── Api.js              # Axios config and API functions
├── App.js              # Main app with routing
├── Home.js             # Home page with Sign Up / Login
├── Register.js         # Registration form component
├── index.js            # Entry point

🔗 Backend API

The frontend expects the following endpoint from the backend:
	•	POST /api/v1/auth/register – for registering a new user
Example request payload:
`{
  "email": "test@example.com",
  "password": "secure123"
}`

🙌 Author

Built by Kavish Rizvi
Feel free to fork, contribute, or star!