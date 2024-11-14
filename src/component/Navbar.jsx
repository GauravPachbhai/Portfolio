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
        <nav className='flex justify-between items-center p-4 w-full fixed h-16'>
            <div className='flex items-center '>
                <img
                    src='https://i.ibb.co/GPbdFJH/Frame-2.png'
                    alt='logo'
                    className='w-10 h-10 mr-3'
                />
                <h1 className='text-white text-lg font-bold'>Portfolio</h1>
            </div>
            <div>
                <ul className='flex space-x-6 text-white'>
                    <li className='p-2 hover:text-blue-500 cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
                    <li className='p-2 hover:text-blue-500 cursor-pointer' onClick={() => scrollToSection('aboutme')}>About Me</li>
                    <li className='p-2  hover:text-blue-500 cursor-pointer' onClick={() => scrollToSection('projects')}>Projects</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
