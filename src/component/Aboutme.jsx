import React from 'react'
import webDev from '../assets/webDev.png'



const Card = ({link, title}) => {
    return (
        <div className=' flex flex-col items-center justify-center relative bg-black text-white p-2 rounded-lg max-w-sm mx-auto BoxShadow mt-2 overflow-hidden h-24 w-32 sm:h-32 sm:w-48'>
            <img
                src={link}
                alt={title}
                className=" h-2/3 p-2"
            />
            <p>{title}</p>
        </div>
    );
}

const techStack = [
    {
        title:'Java',
        link:'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png'
    },
    {
        title:'JavaScript',
        link:'https://i.ibb.co/WGbLNwt/pngegg.png'
    },
    {
        title:'Nodejs',
        link:'https://i.ibb.co/JrN854v/node.png'
    },
    {
        title:'Expressjs',
        link:'https://i.ibb.co/tLCJs96/express.png'
    },
    {
        title:'Reactjs',
        link:'https://i.ibb.co/KsZXwyW/react.png'
    },
    {
        title:'Nextjs',
        link:'https://i.ibb.co/8bHjJNS/next.png'
    },
    {
        title:'HTML5',
        link:'https://i.ibb.co/jJ4BFvC/html.png'
    },
    {
        title:'CSS3',
        link:'https://i.ibb.co/d0B2MFp/css.png'
    },
    {
        title:'MySQL',
        link:'https://i.ibb.co/ZVYybvz/pngegg-1.png'
    },
    {
        title:'MongoDB',
        link:'https://i.ibb.co/RyBBVSK/mongo.png'
    },
    {
        title:'Bootstrap',
        link:'https://i.ibb.co/cywSbNW/bootstrap.png'
    },
    {
        title:'Tailwind CSS',
        link:"https://i.ibb.co/HYFZ6Cx/pngwing-com.png"
    },
    {
        title:'Redux',
        link:'https://i.ibb.co/Jj9g30X/pngwing-com-1.png'
    }
]

function Aboutme() {
    return (
        <div className='flex flex-col items-center text-white mt-10 sm:mt-0'>
            <div>
                <h1 className='text-blue-500 text-3xl'>What I do</h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-center gap-8 w-full mt-6'>
                <div className="flex flex-col p-4 text-center items-center rounded-lg border-effect w-full md:w-1/3 shadow-md shadow-blue-300" >
                    <img className="h-24 sm:h-28 grayscale invert mb-4" src='https://i.ibb.co/mF71ktB/development.png' alt="software engineer icon" />
                    <p className="font-semibold mb-2">Software Engineer</p>
                    <p className="text-gray-400 text-left ">
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
            <div>
                <h1 className='text-blue-500 text-3xl mt-4 p-2'>Tech Stack</h1>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-5'>
                {
                    techStack.map((item)=>(
                        <Card link={item.link} title={item.title}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Aboutme
