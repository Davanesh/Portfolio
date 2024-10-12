import React from 'react';
import AboutImg from '../assets/about.png';
import { FaGithub, FaLinkedinIn , FaInstagram  } from "react-icons/fa";

export default function About() {

    const config = {
        social: {
          github:'https://github.com/Davanesh',
          linkedin:'https://www.linkedin.com/in/davanesh-saminathan-31375a31a/',
          insta:'https://www.instagram.com/'
        }
      }

  return (
    <div className='bg-secondary p-8 sm:p-12' id='about'>
        <div className='bg-primary text-white p-6 sm:p-12 flex flex-col lg:flex-row items-center'>
            {/* Text Section */}
            <div className='lg:w-1/2 flex flex-col justify-center mb-6 lg:mb-0 lg:pr-8'>
                <h2 className='text-4xl sm:text-6xl font-bold pb-6'>About Me</h2>
                <h3 className='text-2xl sm:text-4xl pb-1'>My name is <span className='font-bold'>Davanesh Saminathan</span></h3>
                <h5 className='pb-4 text-xl sm:text-2xl'>A passionate and driven full-stack developer.</h5>
                <p className='pb-3 text-base sm:text-xl leading-7 sm:leading-8'>
                  I specialize in building modern and responsive websites and applications using cutting-edge technologies.
                  With strong proficiency in frontend development, I craft dynamic user experiences with HTML, JavaScript,
                  React.js, React Native, CSS3, and Tailwind CSS.
                </p>
                <p className='pb-3 text-base sm:text-xl leading-7 sm:leading-8'>
                  I excel in backend development with Node.js and Express.js, and work with databases like MongoDB and MySQL to
                  manage and store data effectively.
                </p>
                <p className='text-base sm:text-xl leading-7 sm:leading-8'>
                  I'm also experienced with AWS (Amazon Web Services), integrating cloud technologies into my projects for improved scalability and performance.
                </p>

                {/* Social Links */}
                <div className='flex py-6'>
                    <a href={config.social.github} className='px-3 hover:text-white'><FaGithub size={42}/></a>
                    <a href={config.social.linkedin} className='px-3 hover:text-white'><FaLinkedinIn size={42}/></a>
                    <a href={config.social.insta} className='px-3 hover:text-white'><FaInstagram size={42}/></a>
                </div>            
            </div>

            {/* Image Section */}
            <div className='lg:w-1/2 w-full flex justify-center'>
                <img className='w-3/4 sm:w-full h-auto object-cover rounded-lg' src={AboutImg} alt="About Davanesh"/>
            </div>
        </div>
    </div>
  )
}
