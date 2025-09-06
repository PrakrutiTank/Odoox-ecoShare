// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./UserProfile.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded user
  const dummyUser = {
    name: "John Doe",
    email: "john@example.com",
    password: "123456",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // validate
    if (email === dummyUser.email && password === dummyUser.password) {
      // successful login → redirect to MainPage
      navigate("/main");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="user-profile" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div className="profile-content" style={{ maxWidth: "400px" }}>
        <h2 style={{ color: "#4a7c59", textAlign: "center", marginBottom: "20px" }}>Login</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div className="profile-field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
          </div>
          <div className="profile-field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
          </div>
          <button type="submit" className="save-btn">Login</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don't have an account? <Link to="/signup" style={{ color: "#4a7c59" }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
