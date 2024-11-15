import React, { useEffect, useState } from 'react';
import Profile from '../assets/Profile.png';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const profileTitle = ['Web Developer', 'Full Stack Developer', 'Software Engineer'];

function Home() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % profileTitle.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col-reverse justify-evenly sm:flex-row sm:justify-between  h-screen text-white items-center '>
      {/* Inro */}
      <div className='text-left w-full sm:w-2/6 mt-5 sm:mt-0 '>
        <p className='text-white'>
          Hello, <span className='text-blue-500'>I'm</span>
        </p>
        <p className='text-blue-500 font-bold text-3xl'>Gaurav Pachbhai</p>
        <p className='mt-2 text-lg font-medium'>
          {profileTitle[titleIndex]}
        </p>
        <p className='mt-4'>
          I am committed to finding innovative solutions and continuously experimenting to help my clients achieve their goals.
        </p>
        <button className='bg-blue-500 p-2 mt-9 shadow-lg rounded-lg w-28 border-b-2 border-gray-300'>
          Let's Talk
        </button>

        <div className='flex items-center mt-10 space-x-4'>
          <span className='text-xl'>Check out my</span>
          <div className='hexagon bg-blue-500'>
            <a href="https://www.linkedin.com/in/gaurav-pachbhai-526b39230/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='text-white text-md' />
            </a>
          </div>

          <div className='hexagon bg-gray-800'>
            <a href="https://github.com/GauravPachbhai" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-white text-md' />
            </a>
          </div>
        </div>
      </div>

    {/*Profile image */}
      <div>
        <img
          className="bg-transparent object-cover object-center  h-64 sm:h-80 lg:h-96 rounded-lg"
          src={Profile}
          alt="Profile background"
        />
      </div>
    </div>
  );
}

export default Home;
