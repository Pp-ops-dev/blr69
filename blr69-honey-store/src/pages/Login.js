import { useState } from "react";
import '../styles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Login to continue ordering delicious food</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" " /* Required for floating effect */
              required
            />
            <label htmlFor="username">Email or Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" " /* Required for floating effect */
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="links">
            <a href="forgot-password.html">Forgot Password?</a>
            <a href="signup.html">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
