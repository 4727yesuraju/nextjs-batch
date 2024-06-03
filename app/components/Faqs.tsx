import React from 'react'

export default function Faqs() {
    const quetions = {
        "The Best Financial Accounting AppEver1" : "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        "The Best Financial Accounting AppEver2" : "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        "The Best Financial Accounting AppEver3" : "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        "The Best Financial Accounting AppEver4" : "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        "The Best Financial Accounting AppEver5" : "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        "The Best Financial Accounting AppEver6" : "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    }
  return (
    <div className="py-10 px-2 relative">
      
      <img src="images/bstar.png" alt="" className="absolute bottom-6 -left-8 rotate-90 w-12" />
      <img src="images/bstar.png" alt="" className="absolute top-6 -right-8 rotate-90 w-12" />
        <span className="slate-500 tracking-widest text-[8px]">FAQS</span>
        <h2 className="text-xl font-bold mb-10 md:text-3xl xl:text-6xl">Frequently Asked Quetions</h2>
        <div className="flex flex-wrap gap-y-4 justify-between">
           {
             Object.keys(quetions).map((key,i)=><div key={i} className={`basis-[98%] md:basis-[48%] flex flex-col items-center gap-2 md:gap-4 md:px-20 py-4 md:py-10 px-10 rounded-lg ${i%2==0 && "bg-red-500 text-white"}  ${(i%4==0 || i%4==3) ? "md:bg-red-500 md:text-white" : "md:bg-white md:text-black"}`}>
                <span className="text-wrap text-sm font-bold md:text-lg xl:text-2xl">{key}</span>
                <span className="text-xs  md:text-sm xl:text-lg">{quetions[key]}</span>
             </div>)
           }
        </div>
    </div>
  )
}
