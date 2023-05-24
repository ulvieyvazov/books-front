import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-parent'>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li>Categoris</li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
                <li><NavLink to={'/add'}>Add Books</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header