import React,{useEffect} from 'react';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'
//We have used React slick, Web3Forms, React Toastify and Framer Motion Libraries
const App = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0); // scrolls to top on page load
        }, []);

  return (
      
    <div className='w-full overflow-hidden'> 
      <ToastContainer/>     
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
