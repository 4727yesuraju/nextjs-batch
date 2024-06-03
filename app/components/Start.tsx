import React from 'react'

export default function Start() {
  return (
    <div className="flex flex-col gap-4 mt-20 py-4 mx-2 sm:flex-row bg-black text-white rounded-lg justify-between relative " >

      <img src="images/rrr.png" alt="" className="absolute -z-10 left-[0%] top-[0%] translate-x-[-50%] translate-y-[-50%] " />

      <img src="images/bstar.png" alt="" className="absolute -bottom-8 -left-8 rotate-90 w-12" />
      <img src="images/bstar.png" alt="" className="absolute -top-8 -right-8 rotate-90 w-12" />

      <img src="images/wstar.png" alt="" className="absolute bottom-8 left-8 rotate-90 w-12" />
      <img src="images/wstar.png" alt="" className="absolute top-8 right-64 rotate-90 w-12" />

        <div className="flex flex-col gap-2 items-center sm:items-start sm:gap-4 justify-center px-4 lg:pl-20">
            <h2 className="text-sm  font-bold text-nowrap sm:text-xl lg:text-5xl xl:text-7xl 2xl:text-8xl">Ready To Get Started?</h2>
            <p className="text-xs md:text-sm text-wrap xl:text-xl  ">Risus Habitant Leo Egestas Maris Daim Eget Morbi Tempus Vulputate</p>
            <button className='text-black bg-white flex items-center p-2 px-4 rounded-lg gap-2 justify-between'> 
                    <span className="text-nowrap">Download App</span>
                    <img src="images/apple.png" className="w-5" alt="" /> 
            </button>
        </div>
        <div className="w-full md:w-1/2">
            <img src="images/iPhone.png" alt="" className="w-full"/>
        </div>
    </div>
  )
}
