import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header() {
    const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <header className='flex justify-between px-8 py-5 bg-primary text-white text-2xl'>
        <a className='font-bold text-2xl md:text-3xl lg:text-3xl' href='#'>Davanesh Saminathan</a>
        <nav className='hidden md:block'>
            <ul className='flex'>
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul> 
        </nav>
        {toggleMenu && <nav className='block md:hidden'>
            <ul onClick={()=>settoggleMenu(!toggleMenu)} className='flex flex-col bg-secondary mobile-nav'>
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul> 
        </nav>}
        <button onClick={() => settoggleMenu(!toggleMenu)}  className='block md:hidden'><Bars3Icon className='text-white h-8 '/></button>
    </header>
  )
}
