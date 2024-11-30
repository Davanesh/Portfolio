import React from 'react';
import projectImage1 from '../assets/real-state.png';
import projectImage2 from '../assets/drive clone.png';
import projectImage3 from '../assets/doc clone.png';
import projectImage4 from '../assets/app.png'

export default function Project() {
    const projects = [
        { 
            id: 1, 
            title: "Real State Market-Place", 
            imageUrl: projectImage1, 
            desc: 'A real estate platform allowing users to browse, buy, and sell properties. It includes property listings, filtering, and user authentication using Firebase, with a backend powered by Node.js and MongoDB for data management.',
            link: 'https://github.com/Davanesh/Real-Estate-Marketplace',
            position: 'up'
        },
        { 
            id: 2, 
            title: "Full Stack Google Drive Clone", 
            imageUrl: projectImage2, 
            desc: 'A full-stack Google Drive clone built with Next.js and Node.js, featuring secure file upload, storage, and sharing. It includes OTP-based authentication and email-based file sharing. The project demonstrates full-stack development, real-time functionality, and integration with Appwrite for storage.',
            link: 'https://github.com/Davanesh/CloudNest',
            position: 'down'
        },
        { 
            id: 3, 
            title: "Groceries Mobile App", 
            imageUrl: projectImage4, 
            desc: 'A mobile app for buying groceries directly from farmers, featuring a negotiation system for bulk, frequent, and product-based purchases. It includes user authentication with Firebase and offers real-time chat and market trend insights powered by an AI chatbot.',
            link: 'https://github.com/Davanesh',
            position: 'up'
        },
        { 
            id: 4, 
            title: "Real-Time Google Docs Clone", 
            imageUrl: projectImage3,
            desc: 'AnoA real-time Google Docs clone that enables live collaboration and messaging. Built with Next.js and React, it features real-time document editing, messaging, and notifications, demonstrating advanced full-stack development skills.',
            link: 'https://github.com/Davanesh',
            position: 'down' 
        },
    ];
    
    return (
        <div className='bg-primary py-20 text-white pl-12 pr-0' id='project'>
            <h1 className='text-4xl md:text-6xl font-bold '>My Projects</h1>
            <h2 className='py-6 text-xl md:text-2xl flex flex-wrap'>
                Welcome to my portfolio. Here you'll find a selection of my work. 
                Explore my projects to learn more about what I do.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 py-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`relative p-4 transition-transform duration-300 ease-in-out transform ${
                            project.position === 'up' ? 'md:-translate-y-12' : 'md:translate-y-12'
                        }`}>
                        <h3 className="mt-4 text-2xl md:text-3xl font-bold">{project.title}</h3>
                        <div className='relative'>
                            <img 
                                src={project.imageUrl} 
                                alt={`Project ${index + 1}`} 
                                className="w-[80%] h-56 md:h-72 lg:h-80 object-cover py-4"
                            />
                            <div className='absolute inset-0 backdrop-blur-md bg-white bg-opacity-20 opacity-0 duration-500 hover:opacity-100 flex flex-col justify-center w-[80%]'>
                                <p className='text-center text-black font-bold py-4 px-2'>{project.desc}</p>
                                <div className='flex justify-center'>
                                    <a 
                                        className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-bold' 
                                        target='_blank' 
                                        href={project.link}>
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
