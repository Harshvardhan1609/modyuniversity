import React from 'react'
import ReactPlayer from 'react-player'

const CampusTourCards = (props) => {
  return (
    <div id='campustour'>
    <div class="rounded-2xl overflow-hidden shadow-lg shadow-green-400 border-solid border-white mx-auto h-[14rem] w-[19rem] lg:h-[25rem] lg:w-[44rem]"> 
    <ReactPlayer muted loop playing height="100%" width="100%" controls url={'https://www.youtube.com/watch?v=a0VQ68ND5vk&t=204s'}></ReactPlayer>
    </div>
    </div>
  )
}

export default CampusTourCards