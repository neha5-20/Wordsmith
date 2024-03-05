import { useState } from 'react';
import './register.css';
import {URL} from "../../App"
import {Link} from "react-router-dom";
import axios from 'axios';

export default function Register() {
  const [username,setUsername] = useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleRegister = async (e) =>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post(`${URL}/auth/register`,{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    }catch(err){
      setError(true);
    }
    
}
  return (
    <div className="register">
       <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleRegister}>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter Your username..."  onChange={(e)=> setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter Your Email..." onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password..." onChange={(e)=> setPassword(e.target.value)}/>
            <button className="registerBtn" type="submit">Register</button>
        </form>
            <button className="logBtn"><Link to="/login" className="link" >Login</Link></button>
            {error && <span>Something went wrong</span>}
    </div>
  )
}
