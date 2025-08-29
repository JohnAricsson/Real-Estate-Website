import React, { useEffect, useState } from 'react'
import {assets, projectsData} from '../assets/assets'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react"

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [   
    {
      breakpoint: 640, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
  };
  return (
    <motion.div 
      initial={{opacity: 0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: false}}
    className='container mx-auto mb-50 py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' id='Projects'  >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      
        {/*project slider container*/}
        <div className='w-full m-auto'>           
            <Slider {...settings}>
              {projectsData.map((project, index) => (
                <div key={index} className="px-4">                                
                    <img src={project.image} alt={project.title} className="w-full h-auto mb-4 rounded" />
                     <div className="text-center">     
                      <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                      <p className="text-gray-500 text-sm">
                        {project.price} <span>{project.location}</span>
                      </p>
                    </div>
                  
                </div>
              ))}
            </Slider>
            
        </div>

    </motion.div>
  )
}

export default Projects
