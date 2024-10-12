import React from 'react';
import bg2 from '../assets/Untitled Project2.jpg';
import resumepdf from '../assets/Resume.pdf'

export default function Resume() {
  return (
    <div>
        <div className='hidden md:block'>
            <div className='relative flex justify-center items-center h-full' id='resume'>
                <img className='hidden sm:block h-full w-full object-cover' src={bg2} alt="Background"/>
                <div className='bg-primary text-white p-8 flex absolute justify-center items-center'>
                    <div className='flex flex-col p-3'>
                        <h1 className='font-bold text-4xl sm:text-6xl pb-4'>RESUME</h1>
                        <p className='text-xl sm:text-2xl md:text-4xl pb-8'>You can view my Resume</p>
                        <div className='flex justify-center'>
                            <a target='_blank' href={resumepdf} download="My_Resume.pdf" className="mt-6 px-8 py-4 md:w-[440px] w-[320px] bg-teal-400 text-black flex justify-center font-bold rounded-lg hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='block md:hidden'>
            <div className='bg-primary text-white p-8 flex justify-center items-center'>
                <div className='flex flex-col p-3'>
                    <h1 className='font-bold text-4xl sm:text-6xl pb-4'>RESUME</h1>
                    <p className='text-xl sm:text-2xl md:text-4xl pb-8'>You can view my Resume</p>
                    <div className='flex justify-center'>
                        <a target='_blank' href={resumepdf} download="My_Resume.pdf" className="mt-6 px-8 py-4 md:w-[440px] w-[320px] bg-teal-400 text-black flex justify-center font-bold rounded-lg hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
