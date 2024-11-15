import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Aboutme from './component/Aboutme'
import Projects from './component/Projects'
import Footer from './component/Footer'

function App() {


  return (
    <>
      <div className='flex flex-col self-center items-center justify-center bg-black w-full'>
        <div className='w-full'> <Navbar /></div>

        <div className='w-full flex flex-col justify-center self-center items-center mt-10 sm:mt-0'> 
          <section className='w-full sm:w-10/12 lg:w-3/4 mt-12 sm:mt-0 p-10' id='home'><Home /></section>
        
          <section className='w-3/4 pb-10' id='aboutme'><Aboutme /></section>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <section className='w-3/4 mt-4  pb-10' id='projects'> <Projects /></section>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        <Footer/>

      </div>
    </>
  )
}

export default App
