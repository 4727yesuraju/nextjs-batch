"use-client"

import React from 'react'

export default function Button({message,bg,width=null,image=null}) {
  return (
      <button className={`${bg==='black'? 'text-white bg-black' : 'text-black bg-white'} p-2 px-5  rounded-lg ${width && `w-[${width}]`} flex justify-between items-center gap-2`}> 
        <span className="text-nowrap">{message}</span>
        {image && <img src={`images/${image}`} className="w-5" alt="" />}
</button>
  )
}
