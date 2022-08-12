import React from 'react'
import Updatecards from './Updatescards'
import formre from '../Assets/1.png'
import bank from '../Assets/2.png'
import innovate from '../Assets/3.png'

const Updates = () => {
  return (
    <div className="mx-auto px-4 py-16 bg-white text-green-500 text-center flex flex-col  " id="about">
    <div>
   <h1 className="py-4">About</h1>
   <p className="py-4 mx-5 text-[15px]">
   The Mody University is a Private university aimed at helping the girl population avail quality education with world-class techniques in an IT-savvy environment. It gives the students an opportunity to study the subject they want. They can choose from numerous undergraduate and postgraduate courses of different disciplines like Arts, Science, Commerce, Engineering, Management, Law, Fashion, Interior Design, Architecture, Physiotherapy, Agriculture etc.
   </p>
   <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-6 text-black ">
    <Updatecards head="International Collaborations" text="Knowledge should be welcomed with open arms. We believe that international knowledge is one of best you can gain." buttonName="Registrations" image={formre} buttonLink = "https://forms.gle/XmoXpiwWgp8Zq5ns8" hashTag1 = "#education" hashTag2="#award" hashTag3 = "#innovation"/>
    <Updatecards head="#MUPlacement" text="What after college? We will place you with the best. Go thru our placement section to know more" buttonName="Register Quries" image={bank} buttonLink = "https://forms.gle/XeHTdxuzs9EPQoGVA" hashTag1 = "#bank" hashTag2="#queries" hashTag3 = "#queriesform"/>
    <Updatecards head="#MUProfessionalAffiliations" image={innovate} text="These Affilations help our Students to grow and learn the best of the stuff." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
   </div>
   </div>
   </div>
  )
}

export default Updates