import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Login.css"
import logoImage from '../images/reshita.logo.png';
import logoDoc from '../images/doc-aid1.img.png';
import "../Style/Login.css";
const Login = () => {
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`http://localhost:8094/doctorCnt/logIn`, {
            email,
            password,
          });
          console.log(res.data)
        } catch (err) {
            console.log(err);
            
          }
        }
    
   
  return (
    
    <div className="dashboard">
    <div className="left">
        <div className="logo">
            <img src={logoImage} alt="Username" />
        </div>
        <div className="triangle">
            <img
                src={logoDoc}
                width="400"
                height="300"
                className="center"
                alt="Triangle"
            />
        </div>
    </div>
    <div className="right">
        <form action="#" onSubmit={handleSubmit}>
            <div className="center">
                <div className="login-register">
                    <input type="text" placeholder="Username"  onChange={(e)=>setUserEmail(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
                    <div>
                        <br />
                    </div>
                </div>
                <div className="submit">
                    <div>
                        <br />
                    </div>
                    <div>
                        <br />
                    </div>
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </form>
    </div>
</div>  
  )
}

export default Login