import React from 'react'


const Updatecards = (props) => {
  return (
    <>
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md shadow-green-400 border-solid border-white mx-auto my-8 hover:shadow-2xl hover:shadow-emerald-500 duration-500">
      <img class="w-full" src={props.image} alt="Modyuniversity"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 py-3">{props.head}</div>
        <p class="text-gray-500 text-base">
          {props.text}
        </p>
      </div>
    </div>
    </>
  )
}

export default Updatecards