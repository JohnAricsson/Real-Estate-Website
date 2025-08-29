import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='pt-top px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start mt-5'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <div className='flex items-center'>
                <img className='w-10 h-10 md:w-12 md:h-12 mx-2 my-2' src={assets.logo} alt=''/>
                <span className="text-xl md:text-2xl font-bold text-white ">Skyline Base</span>
            </div>
            <p className='text-gray-400 mt-4 mb-4'>Connecting buyers, sellers, and renters with verified residential and commercial listings. Fast, easy, and reliable property search.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-10 '>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-1 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
                <a href="#Header" className='hover:text-white'>Privacy policy</a>
                

            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newslater</h3>
            <p className='text-gray-400 mb-4 max-w-80'> The latest news,articles and resources, send to your inbox weekly</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white' >Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-400'>
        Copyright 2024 © Skyline Base. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
