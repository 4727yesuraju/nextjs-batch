import React from 'react'
import Start from './Start'
import Faqs from './Faqs'
import Testimonial from './Testimonial'
import Advantages from './Advantages'
import Features from './Features'
import Front from './Front'
import Customize from './Customize'

export default function Main() {
  return (
    <div className="my-10">
      <Front />
      <Features />
      <Advantages />
      <Customize/> 
      <Testimonial />
      <Faqs />
      <Start />
    </div>
  )
}
