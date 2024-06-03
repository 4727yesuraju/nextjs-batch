import React from 'react'

export default function Advantages() {
  return (
    <div className="flex items-center flex-col gap-2 py-4 px-2 sm:flex-row relative">
        <img src="images/bstar.png" alt="" className="absolute top-6 right-2 rotate-90 w-8" />
        <img src="images/bstar.png" alt="" className="absolute bottom-6 left-[45%] rotate-90 w-8" />
        <div className="flex flex-col gap-2 basis-[48%]">
            <span className="text-[#FF5555] text-sm md:text-lg">ADVANTAGES</span>
            <span className="text-xl font-bold md:text-3xl text-nowrap xl:text-6xl">WHY CHOOSE UIFRY?</span>
            <span className="flex gap-2 items-center">
                <img src="images/bell.png" alt="" className="w-8"/>
                <span className="font-bold md:text-lg xl:text-2xl">Clever notifications</span>
            </span>
            <span className="text-slate-500 text-xs text-justify md:text-sm xl:text-lg">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</span>
        </div>
        <div className="basis-[48%] relative">
            <img src="images/rrr.png" alt=""  className="absolute -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <img src="images/adphone.png" alt="" />
        </div>
    </div>
  )
}
