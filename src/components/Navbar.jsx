import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img className='w-10 h-10 md:w-20 md:h-20 ' src={assets.logo} alt=''/>
        <ul className='hidden md:flex gap-7 text-white text-2xl font-medium'>
            <a href='#Header' className='hover:underline cursor-pointer hover:text-gray-400 '>Home</a>
            <a href='#Header' className='hover:underline cursor-pointer hover:text-gray-400'>About</a>
            <a href='#Header' className='hover:underline cursor-pointer hover:text-gray-400'>Projects</a>
            <a href='#Header' className='hover:underline cursor-pointer hover:text-gray-400'>Testimonials</a>   
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
        <img src={assets.menu_icon} className='md:hidden w-7'/>
      </div>
    </div>
  )
}

export default Navbar
