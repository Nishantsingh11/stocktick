import React from 'react'
import {FaTwitter,FaYoutube} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='container mx-auto '>
        <nav className='flex justify-between border-2 text-center bg-navbarColor-final text-white'>
            <div className="logo w-60 h-10 mt-4">
               <h1 className='font-bold text-2xl'>StockTik</h1>
            </div>
            <div className="right-side">
            <ul className='flex'>
                <li className='m-5 text-lg font-thin'><a href="@">About</a></li>
                <li className='m-5 text-lg font-thin'><a href="@">Privacy Policy</a></li>
                <li className='m-5 text-3xl font-thin'><a href="@">< FaTwitter/></a></li>
                <li className='m-5 text-3xl font-thin'><a href="@">< FaYoutube/></a></li>
                <li className='m-5 text-lg '><a href="@" className=' border-2px border-white bg-blue-500 px-2 py-2 rounded-md'>Sign up</a></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar