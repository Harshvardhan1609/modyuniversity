
import React from 'react'
import ContactCards from './ContactCards'
import auth from '../Assets/auth.jpg'
const Contact = () => {
  return (
    <div>
         <div className="mx-auto  px-4 py-16 bg-white text-green-600 text-center flex flex-col" id="contact">
         <div>
        <h1 className="py-4">Contact Jodhpur Authority</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4 mt-3">
          <ContactCards  icon={< img size={10} src={auth} alt="Vinod Purohit" className="bg-sky-500 inline-flex p-1 rounded-full w-[200px] h-[200px]"/>}
            text="Vinod Purohit (Registrar)" contactlink="LinkedIn" contactlink2="Email" link3="https://www.linkedin.com/in/dr-vinod-purohit-3a938a17/?originalSubdomain=in" link4="mailto:vinodpurohit2008@gmail.com"/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact