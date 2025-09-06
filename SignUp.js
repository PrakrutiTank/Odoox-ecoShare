// src/pages/SignUp.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`Welcome ${name}! You can now login with your credentials.`);
  };

  return (
    <div className="user-profile" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div className="profile-content" style={{ maxWidth: "400px" }}>
        <h2 style={{ color: "#4a7c59", textAlign: "center", marginBottom: "20px" }}>Sign Up</h2>
        <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div className="profile-field">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
          </div>
          <div className="profile-field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
          </div>
          <div className="profile-field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
          </div>
          <button type="submit" className="save-btn">Sign Up</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account? <Link to="/login" style={{ color: "#4a7c59" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}
