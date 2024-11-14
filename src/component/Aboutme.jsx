import React from 'react'
import webDev from '../assets/webDev.png'
import SE from '../assets/SE.png'

function Aboutme() {
    return (
        <div className='flex flex-col items-center text-white   h-screen'>
            <div>
                <h1 className='text-blue-500 text-3xl'>What I do</h1>
            </div>
            <div className='flex justify-center gap-8 w-full mt-6'>
                <div className="flex flex-col p-4 text-center items-center rounded-lg border-effect w-full md:w-1/3 shadow-md shadow-blue-300" >
                    <img className="h-28 grayscale invert mb-4" src='https://i.ibb.co/mF71ktB/development.png' alt="software engineer icon" />
                    <p className="font-semibold mb-2">Software Engineer</p>
                    <p className="text-gray-400 text-left">
                        Experienced in building scalable software solutions, with expertise in design, development, and problem-solving.
                    </p>
                </div>

                <div className="flex flex-col p-4 text-center items-center rounded-lg border-effect w-full md:w-1/3 shadow-md shadow-blue-300">
                    <img className="h-28  mb-4" src={webDev} alt="full stack developer icon" />
                    <p className="font-semibold mb-2">Full Stack Developer</p>
                    <p className="text-gray-400 text-left">
                        Skilled in frontend and backend development to deliver full-stack web applications with optimized performance.
                    </p>
                </div>

            </div>
            <div>
                <h1 className='text-blue-500 text-3xl mt-4 p-2'>About Me</h1>
            </div>
            <div className="flex flex-col p-4 text-center items-center rounded-lg border-effect w-full shadow-md shadow-blue-300">
                <p className="text-gray-400 text-left ">
                    I'm Gaurav Deverao Pachbhai, currently working as a Software Developer at Smartleaven Technologies. I completed my Bachelor’s degree in Information Technology in 2023. I chose this career because I’m passionate about creating innovative solutions and continuously learning new skills. I enjoy exploring emerging technologies and applying them to solve real-world problems, making each day an exciting learning experience.
                </p>


            </div>
        </div>
    )
}

export default Aboutme
