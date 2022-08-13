import React from 'react'
import Updatecards from './Updatescards'
import formre from '../Assets/s1.jpg'
import bank from '../Assets/s2.jpg'
import innovate from '../Assets/s3.jpg'
import innovate1 from '../Assets/s4.jpg'
import innovate2 from '../Assets/s5.jpg'
import innovate3 from '../Assets/s6.jpg'

const Schools = () => { 
  return (
    <div className=" mx-auto px-4 py-16  bg-white text-green-500 text-center flex flex-col" id="schools">
    <div>
   <h1 className="py-4">Schools at Mody University</h1>
   <p className="py-4 mx-5 text-[15px]">
    Mody university always been to be the most remarkable institute for all the students but just like a big Empiere Stands on the pillars of achievements our institute is also standing on the pillars of our World class schools.
   </p>
   <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-6 text-black ">
    <Updatecards head="School of Management" text="School of Business (SOB) has three major pillars of Management, Economics and Commerce – which combine together to make SOB a center of excellence for study of Business in totality." buttonName="Registrations" image={formre} buttonLink = "https://forms.gle/XmoXpiwWgp8Zq5ns8" hashTag1 = "#education" hashTag2="#award" hashTag3 = "#innovation"/>
    <Updatecards head="School of Design" text="The world is going through a transition phase where each and every element of the same needs an utmost care and requires reshaping through holistic design & its communication. An attention needs to be given in a more methodological manner." image={bank} buttonLink = "https://forms.gle/XeHTdxuzs9EPQoGVA" hashTag1 = "#bank" hashTag2="#queries" hashTag3 = "#queriesform"/>
    <Updatecards head="School of Engineering and Technology" image={innovate} text="School of Engineering and Technology offers unique opportunities for education and research in various domains of Engineering and Technology. " buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
    <Updatecards head="School of Etiquette and Finishing Skills" image={innovate1} text="School of Etiquette and Finishing Skills (SEFS) was first conceptualized by our Honourable Chairman, Shri R.P Mody, a visionary, legendary scholar and devoted philanthropist who firmly believed in the holistic development and progress of young ladies." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
    <Updatecards head="School of Law" image={innovate2} text="We firmly believe that legal education is a valuable investment that will serve in the interest of the students throughout their life. Therefore, we visualize to establish our College as a world-class institution with wholesome education and exceptional educational facilities. " buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
    <Updatecards head="School of Liberal Art and Sciences" image={innovate3} text="The School of Liberal Arts and Sciences (SLAS) is a uniquely positioned School at Mody University of Science and Technology. The Mission of the School is to develop students' academic achievement, professional success, and personal growth." buttonName="Innovate Now" buttonLink = "https://forms.gle/GEnL1txCeCyC24Yf6" hashTag1 = "#innovation" hashTag2="#ideas" hashTag3 = "#youth"/>
   </div>
   </div>
   </div>
  )
}

export default Schools