import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <div className='main'>
        <div>
            <h1>Shoppy</h1>
        </div>
        <div>
            <nav className='nav' >
                <div style={{
                  width:'600px'
                }} type="text" >
                  <input type="text" placeholder='Search Here...' name="" id="" />
                </div>
                <li className="navElement nav1">Home</li>
                <li className="navElement nav2">Cart</li>
                <li className="navElement nav4">Profile</li>
                <li className="navElement nav5">Contact</li>
                <button>Logout</button>
            </nav>
        </div>
    </div>
  )
}
