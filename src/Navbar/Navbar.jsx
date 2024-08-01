import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Styles from './Nvbar.module.css'

const Navbar = () => {
  return (
    <div>
        <ul className={Styles.flex}>
            <li>
                <NavLink className={Styles.none} to='/home'>home</NavLink>
            </li>
            <li>
                <NavLink className={Styles.none} to='about'>about</NavLink>
            </li>
            <li>
                <NavLink className={Styles.none} to='contact'>contact</NavLink>
            </li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, necessitatibus? 
        <Outlet />
    </div>
  )
}

export default Navbar;