import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Aboutme from './component/Aboutme'
import Projects from './component/Projects'

function App() {


  return (
    <>
      <div className='flex flex-col self-center items-center justify-center bg-black w-screen'>
        <div className='w-full'> <Navbar /></div>

        <div className='w-full flex flex-col justify-center self-center items-center mt-10 sm:mt-0'> 
          <section className='w-3/4 sm:w-10/12 lg:w-3/4' id='home'><Home /></section>
          <section className='w-3/4' id='aboutme'><Aboutme /></section>
          <section className='w-3/4 mt-10' id='projects'> <Projects /></section>
        </div>

      </div>
    </>
  )
}

export default App
