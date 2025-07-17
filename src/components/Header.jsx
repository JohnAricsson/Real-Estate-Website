import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage:"url('/header_img.jpg')"}} id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='text-white sm:text-0.5  md:text-xl font-medium space-x-5 md:flex  justify-center pt-5'>
          <a href='#Projects' className='bg-blue-800  px-6 py-2 sm:px-8 sm:py-3  rounded-full  transform transition-transform duration-200 hover:scale-110 '>Projects</a>
          <a href='#Contact'className='bg-blue-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full  transform transition-transform duration-200 hover:scale-110'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
