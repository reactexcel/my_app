'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5"
const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PRICING", link: "/pricing" },
    { name: "SERVICES", link: "/service" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' w-full fixed top-0 left-0' style={{ height: "70px" }}>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'style={{background:"black"}}>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          </span>
          <img src="/logo.png" alt="" />
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden' style={{ color: "white" }}>
          {
            open ?
              (<IoCloseSharp />)
              :
              (<FiMenu />)
          }

        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'} `} style={{backgroundColor:"black"}}>
          {
            Links.map((link) => (
              <li onClick={() => setOpen(!open)} key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link style={{ fontSize: "1rem", fontWeight: "bold",color:"white" }} href={link.link} className={`text-gray-800 hover:text-white-400 duration-500 `}>{link.name}</Link>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  )
}

export default Nav