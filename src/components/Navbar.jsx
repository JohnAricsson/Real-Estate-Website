import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const[showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container  mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <div className='flex items-center'>
        <img className='w-10 h-10 md:w-12 md:h-12 mx-2' src={assets.logo} alt=''/>
        <span className="text-xl md:text-2xl font-bold text-white ">Skyline Base</span>
        </div>
        
        <ul className='hidden md:flex gap-7 text-white text-2xl font-medium'>
            <a href='#Header' className='hover:underline cursor-pointer  '>Home</a>
            <a href='#About' className='hover:underline cursor-pointer '>About</a>
            <a href='#Projects' className='hover:underline cursor-pointer '>Projects</a>
            <a href='#Testimonials' className='hover:underline cursor-pointer '>Testimonials</a>   
        </ul>
        <a href="https://wa.me/1234567890" target="_blank" className="hidden md:block bg-blue-800 text-white px-4 py-2 rounded-full font-medium transition duration-300">WhatsApp </a>
        <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer'/>        
      </div>
      {/* Menu items for mobile */}
      <div className={`md:hidden ${showMobileMenu?'fixed w-full': 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
         <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=>setShowMobileMenu(false)}src={assets.cross_icon} className='w-6'/>
         </div>
         <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
          <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
         </ul>
      </div>
    </div>
  )
}

export default Navbar
