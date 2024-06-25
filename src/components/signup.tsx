import React, { useState } from "react";
import axios from "axios";
import './signup.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateUsername = (value: string) => {
    if (!value) {
      return "Username is required";
    }
    return "";
  };

  const validateEmail = (value:string) => {
    if (!value) {
      return "Email is required";
    }
    return "";
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return "Password is required";
    }
    return "";
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) {
      return "Confirm Password is required";
    }
    return "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    const emailError = validateEmail(email);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    if (usernameError || emailError || passwordError || confirmPasswordError) {
      setErrorMessage(`${usernameError} ${emailError} ${passwordError} ${confirmPasswordError}`.trim());
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup',{
        username,
        email,
        password,
      });
      console.log('Form submitted',response.data);
      alert('Account created');
      setErrorMessage('');

    } catch (error) {
      console.error('Error submitting form', error);
      setErrorMessage('Error submitting form. Please try again.');
    }
    
  };

  return (
    <div className="signUp-page">
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <div className="Username">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value) }
            value={username}
          />
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value) }
            value={email}
          />
        </div>
        <div className="Password">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="confirmPassword">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <div className="loginBtn">
          <button type="submit">Signup</button>
        </div>
      </form>
      <span className="login-link">
            Already have a account?
            <a href="/">Login</a>
        </span>
    </div>
  );
}

export default Signup;