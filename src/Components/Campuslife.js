import React from 'react'
import Updatecards from './Updatescards'
import formre from '../Assets/10.jpg'
import bank from '../Assets/11.jpg'
import innovate from '../Assets/12.jpg'
import innovate2 from '../Assets/13.jpg'

const Updates = () => {
  return (
    <div className="mx-auto px-4 py-16 bg-white text-green-500 text-center flex flex-col  " id="community">
    <div>
   <h1 className="py-4">Campus Life</h1>    
   <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-5 mt-6 text-black ">
    <Updatecards head="Classroom and Technology" text="Knowledge should be welcomed with open arms. We believe that international knowledge is one of best you can gain." buttonName="Registrations" image={formre} buttonLink = "https://forms.gle/XmoXpiwWgp8Zq5ns8" hashTag1 = "#education" hashTag2="#award" hashTag3 = "#innovation"/>
    <Updatecards head="Tapovan" text="What after college? We will place you with the best. Go thru our placement section to know more" buttonName="Register Quries" image={bank} buttonLink = "https://forms.gle/XeHTdxuzs9EPQoGVA" hashTag1 = "#bank" hashTag2="#queries" hashTag3 = "#queriesform"/>
    <Updatecards head="Auditorium Complex" image={innovate} text="These Affilations help our Students to grow and learn the best of the stuff." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
    <Updatecards head="Transportation" image={innovate2} text="These Affilations help our Students to grow and learn the best of the stuff." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
   </div>
   </div>
   </div>
  )
}

export default Updates