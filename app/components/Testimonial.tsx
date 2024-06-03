import React from 'react'

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-4 relative">
        <img src="images/bstar.png" alt="" className="absolute bottom-6 left-2 rotate-90 w-12" />

        <span className="text-sm -mb-4 md:text-lg ">Testimonial</span>
        <h1 className="text-xl font-bold w-[100%] text-center text-wrap sm:w-[50%] md:text-3xl xl:text-6xl">What Our Users Say About Us?</h1>
        <div className="flex items-center flex-col sm:flex-row">
            <div className="basis-[48%] relative">
                <img src="images/rrr.png" alt=""  className="absolute -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
                <img src="images/testimonials.png" alt=""  />
            </div>
            <div className="basis-[48%] flex flex-col gap-2">
                <h2 className="font-bold text-sm md:text-lg xl:text-2xl">The Best Financial Accoutnig AppEver!</h2>
                <span className="text-slate-500 text-xs text-justify md:text-sm xl:text-lg">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</span>
                <img src="images/groups.png" alt="" className="w-32" />
                <span className="font-bold text-xs md:text-sm xl:text-lg">Nick names</span>
            </div>
        </div>
    </div>
  )
}
