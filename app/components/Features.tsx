import React from 'react'

export default function Features() {
  return (
    <div className="flex flex-col justify-between items-center py-8 px-2 sm:flex-row relative md:-mt-48 lg:-mt-32 xl:-mt-16">
        <img src="images/bstar.png" alt="" className="absolute top-10 left-20 rotate-90 w-8" />
        <img src="images/rrr.png" alt=""  className="absolute -z-10 -right-56 top-[10%] -translate-y-[50%]"/>
        {/* image */}
        <div className="relative">
            
            <img src="images/rrr.png" alt=""  className="absolute -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <img src="images/fephone.png" alt="" />
        </div>

        {/* content */}
        <div className="flex flex-col gap-2 md:gap-4">
            <span className="text-xs text-[#ff5555] -mb-2 md:text-lg md:-mb-6">FEATURES</span>
            <span className="font-bold text-xl md:text-3xl xl:text-6xl">Uifry Premium</span>
            <span>
                <span className="flex gap-2 items-center">
                    <img src="images/star.png" alt="" />
                    <span className="font-bold text-sm md:text-lg xl:text-2xl">Budgeting Intervals</span>
                </span>
                <span className="text-slate-500 text-xs text-justify md:text-sm xl:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
            </span>
            <span>
                <span className="flex gap-2  items-center">
                    <img src="images/hex.png" alt="" />
                    <span className="font-bold text-sm md:text-lg xl:text-2xl">Budgeting Intervals</span>
                </span>
                <span className="text-xs text-slate-500 md:text-sm text-justify xl:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
            </span>
            <span>
                <span className="flex gap-2  items-center">
                    <img src="images/cube.png" alt="" />
                    <span className="font-bold text-sm md:text-lg xl:text-2xl">Budgeting Intervals</span>
                </span>
                <span className="text-xs text-slate-500 md:text-sm text-justify xl:text-lg">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
            </span>
        </div>
    </div>
  )
}
