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
      <div className='flex flex-col self-center items-center justify-center bg-black'>
        <div className='w-full'> <Navbar /></div>
       
          <section className='w-3/5' id='home'><Home /></section>
          <section className='w-3/5' id='aboutme'><Aboutme /></section>
          <section className='w-3/5' id='projects'> <Projects /></section>
        
      </div>
    </>
  )
}

export default App
