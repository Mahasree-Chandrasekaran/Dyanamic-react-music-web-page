import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='border-b-4 border-purple text-center fixed top-0
       bg-teal-500 font-black w-full text-lg text-gray-900 p-2'>
<ul>
    <li className='inline-block py-4'>
      <Link to="/" className='pl-6 pr-8'>Home</Link>
    </li>
    
    <li className='inline-block py-4'>
      <Link to="/about" className='pl-6 pr-8'>About</Link>
    </li>

    <li className='inline-block py-4'>
      <Link to="/articles-list" className='pl-6 pr-8'>Song Lyrics</Link>
    </li>

    
</ul>
      </nav>
  )
}

export default Navbar