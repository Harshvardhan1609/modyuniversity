import React from 'react'


const Updatecards = (props) => {
  return (
    <>
    <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-green-400 border-solid border-white mx-auto my-8 hover:scale-110 transform transition duration-500">
      <img class="w-full" src={props.image} alt="Pushkarna Org"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 py-3">{props.head}</div>
        <p class="text-gray-500 text-base">
          {props.text}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">

    
        
      </div>
    </div>
    </>
  )
}

export default Updatecards