import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full p-2 lg:pr-40 xl:px-48 ">
      
        <div className="flex gap-5 text-sm items-center lg:gap-10 lg:text-xl">

          <Logo />
          
          <div className="gap-2 font-medium  hidden sm:flex xl:gap-10">
              <span className="text-red-400">Home</span>
              <span className="hover:text-red-400">About Us</span>
              <span className="hover:text-red-400">Pricing</span>
              <span className="hover:text-red-400">Features</span>
          </div>
        </div>

        <button className="bg-black text-white p-2 px-4 rounded-lg text-sm md:text-lg">Download</button>
    </div>
  )
}
