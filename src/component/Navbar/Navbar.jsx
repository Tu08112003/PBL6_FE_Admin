import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo'>
          <h1>Batocom</h1>
          <h4>Admin Panel</h4>
        </div>
        <img src={assets.avatar} alt="" className="profile" />
    </div>
  )
}

export default Navbar