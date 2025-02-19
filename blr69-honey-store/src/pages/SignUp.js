import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phno: "",
    dob: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Account Created Successfully!");
    navigate("/"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} id="signupForm">
          <div className="input-group">
            <input type="text" id="firstname" value={formData.firstname} onChange={handleChange} required />
            <label>First Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="lastname" value={formData.lastname} onChange={handleChange} required />
            <label>Last Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="phno" value={formData.phno} onChange={handleChange} required />
            <label>Phone Number</label>
          </div>
          <div className="input-group">
            <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
            <label>Password</label>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <div className="links">
            <a href="/">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
