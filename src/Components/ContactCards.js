import React from 'react'

const ContactCards = (props) => {
  return (
    <div>
        <div>
         <div className="flex-auto border rounded-2xl py-10 m-5 shadow-lg shadow-green-500" >
            <div>
              <div className="p-6 mr-3 rounded-full">
                {props.icon}
              </div>
              <a href={props.link} target="_blank" rel="noreferrer">
              <h2 className='hover:animate-pulse text-green-900 text-2xl'>
                {props.text}
              </h2>
              <div className='p-3'>
                <a href={props.link3}  target="_blank" rel="noreferrer"><button className="text-white mx-3">
                {props.contactlink}
              </button></a>
              <a href={props.link4} target="_blank" rel="noreferrer"><button className="text-white mx-3">
              {props.contactlink2}
            </button></a>
              </div>
              </a>
            </div>
          </div>
    </div>
    </div>
  )
}

export default ContactCards