import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { FaGithub, FaLinkedinIn , FaInstagram  } from "react-icons/fa";

export default function Contact() {
    const config = {
        social: {
          github:'https://github.com/Davanesh',
          linkedin:'https://www.linkedin.com/in/davanesh-saminathan-31375a31a/',
          insta:'https://www.instagram.com/'
        }
      }
  return (
    <div className='bg-primary flex-wrap md:flex  justify-between md:flex-row text-white' id='contact'>
        <div className='text-center flex-1 py-24 border-2 md:border-r-0 border-white'>
        <div className='flex justify-center pb-4'>
                <CiLocationOn  size={36}/>
            </div>
            <h4 className='text-xl mb-3'>Address</h4>
            <p className='text-lg flex-wrap'>53-A Big Chetty street, Trichy-8</p>
        </div>
        <div className='text-center flex-1 py-24 border-2 md:border-r-0 border-white '>
        <div className='flex justify-center pb-4'>
                <IoCallOutline  size={36}/>
            </div>
            <h4 className='text-xl mb-3'>Phone</h4>
            <p>934256195</p>
        </div>
        <div className='text-center flex-1 py-24 border-2 border-r-0 border-white flex justify-center flex-col'>
            <div className='flex justify-center pb-4'>
                <MdOutlineMailOutline size={36}/>
            </div>
            <h4 className='text-xl mb-3'>Email</h4>
            <p className='text-sg'>davaneshsaminathan335@gmail.com</p>
        </div>
        <div className='text-center flex-1 py-24 border-2 border-white'>
        <div className='flex justify-center pb-4'>
                <BiLike size={36}/>
            </div>
            <h4 className='text-xl mb-3'>Contact</h4>
            <div className='flex gap-3 justify-center'>
                <a href={config.social.github} className='hover:text-white'><FaGithub size={28}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><FaLinkedinIn size={28}/></a>
                <a href={config.social.insta} className='hover:text-white'><FaInstagram size={28}/></a>
            </div> 
        </div>
    </div>
  )
}
