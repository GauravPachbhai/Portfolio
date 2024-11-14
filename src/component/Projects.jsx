import { Link } from 'lucide-react';
import React, { useState } from 'react'

const Card = ({ title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-black text-white p-6 rounded-lg max-w-sm mx-auto BoxShadow mt-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{backgroundImage:''}}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-base mb-6">{description}</p>

      {/* Modal-like overlay that appears on hover */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='flex gap-3'
            
          >
            {title}
         <Link />
          </a>
        </div>
      )}
    </div>
  );
};




function Projects() {
  return (
    <div className="flex flex-col gap-2 text-white h-screen items-center justify-center p-4">
      <div>
        <h1 className='text-blue-500 text-3xl mt-4 p-2'>Projects</h1>
      </div>
      <div className='grid grid-cols-2 gap-10 w-full mx-auto items-center justify-center  mt-5 '>
        <Card
          title='Flipkart Clone'
          description='Flip-kart clone App Created Using latest technologies.Created an JSON file for product grid, Created an Database of MongoDB.Learned how to use node.js, api calling from Back-end'
          link='https://github.com/GauravPachbhai/E-commerce' />
        <Card 
        title='Online Election'
        description='Creating an Online voting platform using Ethereum DApp, Created an Smart contract using solidity, Technologies Used solidity, JavaScript, Meta-Mask, Ganache'
        link='https://github.com/GauravPachbhai/Election_DAPP' />
        <Card 
        title='I-stromen'
        description='Built a real-time machine monitoring web app for injection molding module data, Integrated dynamic graphs for data visualization and performance analysis, Created reporting and alarm alert functionalities for machine maintenance, Designed a back-end to store, process, and visualize real-time data from injection molding machines.'/>
        <Card 
        title='Foodi'
        description='A modern food delivery app built with Next.js, featuring NextAuth for secure user authentication (sign-up/sign-in). The app offers real-time order tracking, a responsive interface, and secure payment integration. Users can enjoy a seamless ordering experience while admins can easily manage the menu and orders.'
        link='https://github.com/GauravPachbhai/Foodi' />
      </div>
    </div>
  );
}


export default Projects
