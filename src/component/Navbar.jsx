import React from 'react';

function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 64; // Height of the navbar
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}


function Navbar() {
    return (
        <nav className='flex flex-col justify-center sm:justify-between sm:flex-row items-center p-4 w-fit sm:w-full fixed h-26 sm:h-16 bg-black z-20  sm:mt-0'>
            <div className='flex items-center '>
                <img
                    src='https://i.ibb.co/GPbdFJH/Frame-2.png'
                    alt='logo'
                    className='w-10 h-10 mr-3'
                />
                <h1 className='text-white text-lg font-bold'>Portfolio</h1>
            </div>
            <div>
                <ul className='flex space-x-3 justify-evenly  sm:space-x-6 text-white'>
                    <li className='p-2 hover:text-blue-500 cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
                    <li className='p-2 hover:text-blue-500 cursor-pointer' onClick={() => scrollToSection('aboutme')}>About Me</li>
                    <li className='p-2  hover:text-blue-500 cursor-pointer' onClick={() => scrollToSection('projects')}>Projects</li>
                    <li className='p-2 flex hover:bg-blue-900 cursor-pointer bg-blue-600 rounded-lg h-9 items-center'  ><a href='https://drive.google.com/file/d/18WlIUyuhigb6Y4HF6P9o3HrVAmUG1dzH/view?usp=sharing' target="_blank">Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
