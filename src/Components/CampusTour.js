import React from 'react'
import Updatecards from './CampusTourCards'
import formre from '../Assets/s1.jpg'


const CampusTour = () => {
  return (
    <div className="mx-auto px-4 py-16 bg-white text-green-500 text-center flex flex-col  " id="schools">
    <div>
   <h1 className="py-4">Campus Tour</h1>
   <p className="py-4 mx-5 text-[15px]">
   </p>
   <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-5 mt-6 text-black ">
    <Updatecards head="School of Management" text="School of Business (SOB) has three major pillars of Management, Economics and Commerce – which combine together to make SOB a center of excellence for study of Business in totality." buttonName="Registrations" image={formre} buttonLink = "https://forms.gle/XmoXpiwWgp8Zq5ns8" hashTag1 = "#education" hashTag2="#award" hashTag3 = "#innovation"/>
   </div>
   </div>
   </div>
  )
}

export default CampusTour