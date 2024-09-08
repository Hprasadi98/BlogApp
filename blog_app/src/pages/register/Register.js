import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter your username...'/>
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter your email...'/>
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter your password...'/>
            <button className="registerButton" onClick={()=>navigate('./login')}>Register</button>
        </form>
        <button className="registerLoginButton" onClick={()=>navigate('./login')}>Login</button>
    </div>
  )
}
