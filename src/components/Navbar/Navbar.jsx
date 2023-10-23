import { Button } from '@mui/material';
import React, { useState } from 'react'

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed z-50 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white dark:bg-list-dark py-3 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 dark:text-white'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Trello Clone
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 dark:text-white top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-list-dark md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:transition-none transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-md md:my-0 my-4 px-2'>
              <a href={link.link} className='text-gray-800 px-2 dark:text-white hover:text-[#1976D2] dark:hover:text-cyan-900  duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button variant="contained" className='dark:bg-cyan-950 dark:hover:bg-cyan-900 md:ml-2'>Get Started</Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar