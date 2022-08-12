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
    <Updatecards head="Classroom and Technology" text="Learning and teaching is a two-way process that demands complete dedication and full concentration. To ensure complete level of concentration, a favorable environment is a must." buttonName="Registrations" image={formre} buttonLink = "https://forms.gle/XmoXpiwWgp8Zq5ns8" hashTag1 = "#education" hashTag2="#award" hashTag3 = "#innovation"/>
    <Updatecards head="Tapovan" text="Spirituality is the key to unlock the potential of the human mind. Spirituality allows for strengthening intuition, creativity, and inspiration so that one can be guided towards the life and work that they will find most rewarding. " buttonName="Register Quries" image={bank} buttonLink = "https://forms.gle/XeHTdxuzs9EPQoGVA" hashTag1 = "#bank" hashTag2="#queries" hashTag3 = "#queriesform"/>
    <Updatecards head="Auditorium Complex" image={innovate} text="The magnificent auditorium at Mody University is unique and one of the best auditoriums around the country. The auditorium is designed in such a way that it ensures a perfect view of the main stage irrespective of the seating location of the audience." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
    <Updatecards head="Transportation" image={innovate2} text="Mody University has its own fleet of 5 buses that are available for the pick and drop of the daily comers and also for emergency situations of the boarders." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
   </div>
   </div>
   </div>
  )
}

export default Updates