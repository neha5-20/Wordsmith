import './login.css';
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
       <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter Your Email..."/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..."/>
            <button className="loginBtn">Login</button>
        </form>
            <button className="regBtn"><Link to="/register" className="link">Register</Link></button>
    </div>
  )
}
