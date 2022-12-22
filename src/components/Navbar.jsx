import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='navbar' id='navbar'>
        <div >
            <NavLink className='navbar__title' to='/' >Videogames JES</NavLink>
        </div>
        <div className='navbar__create'>
            <NavLink className='navbar__create-title' to='/form'>Create Videogame</NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar