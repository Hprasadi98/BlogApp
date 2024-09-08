import React from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className='loginInput' placeholder='Enter your email...'/>
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...'/>
            <button className="loginButton" onClick={()=>navigate('/home')}>Login</button>
        </form>
        <button className="loginRegisterButton" onClick={()=>navigate('/')}>Register</button>
    </div>
  )
}
