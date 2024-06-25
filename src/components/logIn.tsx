import React, { useEffect, useState } from "react";
import './index.css'
import axios from 'axios';
function LogIn() {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState<string | null>(null);

        
        const validateEmail = (value:string) => {
            if (!value) {
                return "Email is required";
            }
            return null;
        }

        const handleEmailChange = (event:any) =>{
            setEmail(event.target.value);
        }
        const handlePasswordChange = (event:any) => {
            setPassword(event.target.value);
        }
      
        const handleSubmit = async (event:React.FormEvent) => {
          event.preventDefault();
          const emailError = validateEmail(email);
          if (emailError) {
            alert(emailError);
            return ;
          }
          setError(null);
          try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
      alert('login sucessful');
      console.log('login sucessful',response.data);
      setEmail('');
      setPassword('');
      
          } catch (error) {
            console.error('Error logging in', error);
      const errorMessage = 'Invalid email or password';
      setError(errorMessage);
      alert(errorMessage);
          }
        };
    return(
        <div className="logIn-page">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
        <div className="username"><input type="email" placeholder="Email" onChange={handleEmailChange} value={email} /></div>
        <div className="password"><input type="password"  placeholder="Password" onChange={handlePasswordChange} value={password}/></div>
        <div className="forgetpass"><a href="#">Forget password?</a></div>
        <div className="login-btn"><button type="submit" >login</button></div>
        </form>
        <span className="signUp-link">
            Not a member?
            <a href="/signup">sign up</a>
        </span>
        </div>
    )
};
export default LogIn