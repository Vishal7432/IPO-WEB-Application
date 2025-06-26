import React, { useState } from "react";
import "./Login.css"; // CSS styling is separate

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const res = await fetch("http://localhost:5173/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="logo">BLUESTOCK</h2>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="actions">
            <div className="remember">🔒 Remember me</div>
            <a href="#" className="forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="bottom-msg">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
        {message && <p className="status">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
