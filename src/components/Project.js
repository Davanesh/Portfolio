import React from 'react';
import projectImage1 from '../assets/ecommerce-websites.jpg';
import projectImage2 from '../assets/food-ecommerce.jpg';
import projectImage3 from '../assets/website-blog.jpg';

export default function Project() {
    const projects = [
        { 
            id: 1, 
            title: "Ecommerce Websites", 
            imageUrl: projectImage1, 
            desc: 'An Ecommerce Website built with MERN Stack',
            link: 'https://github.com/',
            position: 'up'
        },
        { 
            id: 2, 
            title: "Food Ecommerce", 
            imageUrl: projectImage2, 
            desc: 'A Food Ecommerce Website built with React',
            link: 'https://github.com/',
            position: 'down'
        },
        { 
            id: 3, 
            title: "Groceries App", 
            imageUrl: projectImage3, 
            desc: 'A Groceries mobile app with a negotiation function, built with React Native, Node.js, Express.js, MongoDB',
            link: 'https://github.com/',
            position: 'up'
        },
        { 
            id: 4, 
            title: "Another Ecommerce", 
            imageUrl: projectImage1, 
            desc: 'Another Ecommerce Website built with MERN Stack',
            link: 'https://github.com/',
            position: 'down' 
        },
        { 
            id: 5, 
            title: "Ecommerce Platform", 
            imageUrl: projectImage2, 
            desc: 'An Ecommerce Website built with MERN Stack',
            link: 'https://github.com/',
            position: 'up'
        },
        { 
            id: 6, 
            title: "MERN Stack Project", 
            imageUrl: projectImage3, 
            desc: 'A Full MERN Stack Ecommerce Website',
            link: 'https://github.com/',
            position: 'down'
        }
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
