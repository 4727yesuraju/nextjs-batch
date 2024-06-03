import React from 'react'

export default function Front() {
  return (
    <div className="flex flex-col mx-2 md:flex-row md:justify-center md:items-start py-20 relative">

      <img src="images/bstar.png" alt="" className="absolute top-6 left-2 rotate-90 w-8" />
      <img src="images/bstar.png" alt="" className="absolute top-96 left-20 rotate-90 w-8" />
        {/* content */}
        <div className="basis-[38%] flex flex-col gap-2 relative ">
          <img src="images/rrr.png" alt=""  className="absolute w-[50%] -top-[20%] md:w-[80%] md:-top-[24%] left-[22%] -z-10"/>
            <h2 className="text-xl font-bold text-wrap md:text-2xl lg:text-4xl xl:text-6xl">Make The Best Financial Decisions</h2>
            <span className="text-slate-500 text-xs md:text-sm xl:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
            <div className="flex gap-4 flex-col md:flex-row">
            <button className='text-white bg-black flex items-center p-2 px-4 rounded-lg gap-2 justify-between'> 
                    <span className="text-nowrap">Get Started</span>
                    <img src="images/arrow.png" className="w-5" alt="" /> 
            </button>
                <span className="flex gap-4 items-center">
                    <img src="images/play.png" alt="" />
                    <span className="text-nowrap">WATCH NOW</span>
                </span>
            </div>
            <div>
              <img src="images/a.png" alt="" className=""/>
            </div>
        </div>

        {/* image */}
        <div className="relative mt-20 -mb-25  md:-top-44 lg:-top-48 xl:left-20 xl:-top-64 h-96 sm:h-[500px] md:w-[59%] ">
          <img src="images/p1.png " alt="" className="absolute z-50 w-[75%]  left-0"/>
          <img src="images/p2.png " alt="" className="absolute z-40 w-[75%] left-[13%] top-[6%]"/>
          <img src="images/p3.png" alt="" className="absolute z-30 w-[75%] left-[16%] top-[2%]"/>
          <img src="images/red.png" alt="" className="absolute w-[70%] z-10 left-[5%] top-[25%]" />
        </div>
    </div>
  )
}
