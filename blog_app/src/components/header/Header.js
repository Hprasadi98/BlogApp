import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className="headerTitlesm">React & Node</span>
            <span className="headerTitlelg">Blog</span>
        </div>
        <img src="../../images/3.jpg" alt="" className="headerImage" />
    </div>
  )
}

