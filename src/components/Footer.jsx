import React from 'react'
import { FaSquareFacebook,FaYoutube,FaInstagram,FaTwitter } from "react-icons/fa6";




function Footer() {
  return (
    <div className='bg-black text-orange-400 flex flex-col justify-center items-center h-full'>
        
    <div className='bg-secondary flex text-primary w-full '>
        <ul className='flex justify-evenly items-center my-5 w-full'>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>

    </div>
    <p className='text-xl font-semibold p-2'><span className='text-white font-light mt-5'>Designed and developed by</span> Bakalaurs</p>
    <p className='text-sm mb-5'>Copyright © 2023 LinkUpLocal</p>
    <div className='flex justify-evenly items-center w-[400px] text-white text-2xl p-3'><FaSquareFacebook/><FaInstagram/><FaTwitter/><FaYoutube/> 
</div>
    </div>
  )
}

export default Footer