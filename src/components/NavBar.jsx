
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4 fixed top-0 w-full shadow-md flex flex-col justify-center md:flex-row'>
    <h1 className='text-x1 font-bold cursor-pointer'>
        <Link>meesho</Link>
    </h1>

    <div className='flex flex-col gap-10 text-center text-lg md:flex-row'>
      <Link to='/'className='transform transition during-500 hover:scale-150'>Home</Link>
      <Link to='/contact'className='navbar-btn'>Contact</Link>
      <Link to='/about'className='navbar-btn'>About</Link>
      <Link to='/carts'className='navbar-btn'>Carts</Link>
      <Link to='/login'className='navbar-btn'>Login</Link>
    </div>
    </nav>
  )
}

export default Navbar