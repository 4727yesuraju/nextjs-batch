import React from 'react'
import Logo from './Logo'

export default function Footer() {
  const items:any = {
    "Links" : ["Home","About Us","Booking","Blog"],
    "Legal" : ["Terms of User","Privacy Policy","Cookie Policy"],
    "Product" : ["Take Tour","Live Chat","Reviews"]
  }
  return (
    <div className="flex flex-col justify-arounded items-center gap-4">

      <div className="flex flex-col gap-10  p-2 items-center sm:flex-row sm:items-start md:justify-center md:gap-14 w-full lg:justify-around">

        <div className="flex flex-col gap-2">
          <Logo />
          <span className="flex items-center gap-1">
            <span>
              <img src="images/email.png" alt="" />
            </span>
            <span className="text-nowrap text-slate-500 text-sm sm:text-xs lg:text-lg">Help@Frybix.Com</span>
          </span>
          <span className="flex items-center gap-1">
            <span >
              <img src="images/phone.png" alt="" />
            </span>
            <span className="text-nowrap text-slate-500 text-sm sm:text-xs lg:text-lg">+1234 456 678 89</span>
          </span>
        </div>

        {/* links */}
        <div className="flex gap-5 lg:gap-14">
          {
            Object.keys(items).map((key,i)=>{
              return <div className="flex flex-col" key={i}>
                 <span className="font-bold lg:text-2xl">{key}</span>
                 {
                  items[key].map((terms:any,i:any)=>{
                    return <span className=" text-nowrap text-xs text-slate-500 lg:text-xl" key={i}>{terms}</span>
                  })
                 }
              </div>
            })
          }
        </div>
   
        {/* newletter */}
        <div className="flex flex-col items-center gap-1 sm:items-start lg:gap-4">
          <span className="font-bold lg:text-2xl">Newsletter</span>
          <span className="font-medium text-xs text-slate-500 lg:text-xl">stay Up to Date</span>
          <span className=" flex flex-nowrap sm:flex-col md:flex-row">
            <input type="text" placeholder="Your email" className="text-center focus:outline-none w-[100px] text-xs sm:border-b sm:mb-1 border-slate-500 md:border-0 lg:w-[150px] lg:text-xl" />
            <button className="bg-black text-white p-1 px-2 rounded-lg text-xs">Subscribe</button>
          </span>
        </div>

      </div>

      {/* line */}
      <div className="w-screen h-[2px] bg-gradient-to-r from-transparent from-indigo-500 via-purple-500 to-pink-500 to-transparent"></div>

      {/* copyright */}
      <div className="text-slate-500 text-xs sm:text-sm md:text-xl">Copyright 2022 uifry.com all rights reserved.</div>
    </div>
  )
}
