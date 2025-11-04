import React,{useState} from 'react'
import axios from "axios";

export default function Auth({setUser}) {

    async function handleSubmit(e) {
        e.preventDefault();
        let data = {
            email : e.target.email.value,
            password : e.target.password.value
        };
        
        let res = await axios.post("http://localhost:5000/api/auth/login",data);    
        setUser(res.data);
        localStorage.setItem("user",JSON.stringify(res.data));
        window.location.href = "/";
    }

  return (
    <div>
        <center>
            <h2>Login Page</h2>
            <div id="Login">
                <form onSubmit = {handleSubmit}>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </center>

    </div>
  )
}
