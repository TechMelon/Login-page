import React, { useEffect, useState } from "react";
const predefinedUsername = "adminlogin@gmail.com";
const predefinedPassword = "admin12";

function LogIn() {
    
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        
        useEffect(() => {
            localStorage.setItem('predefinedUsername', predefinedUsername);
          localStorage.setItem('predefinedPassword',predefinedPassword);
        }, []);
        
        const validateUsername = (value:string) => {
            if (!value) {
                return "username is required";
            }
        }

        const handleUsernameChange = (event:any) =>{
            setUsername(event.target.value);
        }
        const handlePasswordChange = (event:any) => {
            setPassword(event.target.value);
        }
      
        const handleSubmit = (event:React.FormEvent) => {
          event.preventDefault();
          const usernameError = validateUsername(username);
          if (usernameError) {
            alert(usernameError);
            return ;
          }
          const storedUsername = localStorage.getItem('predefinedUsername');
          const storedPassword = localStorage.getItem('predefinedPassword');

          if (username===storedUsername && password===storedPassword) {
            console.log('username : ', username,'password :', password);
            alert('Login successfull');
          setUsername('');
          setPassword('');
          }
          else{
            alert('Invalid username or password');
          }
        };
    return(
        <div className="logIn-page">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
        <div className="username"><input type="text" placeholder="Username" onChange={handleUsernameChange} value={username} /></div>
        <div className="password"><input type="password"  placeholder="Password" onChange={handlePasswordChange} value={password}/></div>
        <div className="forgetpass"><a href="forgetPassword.tsx">Forget password?</a></div>
        <div className="login-btn"><button type="submit" >login</button></div>
        </form>
        <span className="signUp-link">
            Not a member?
            <a href="sign.tsx">sign up</a>
        </span>
        </div>
    )
};
export default LogIn