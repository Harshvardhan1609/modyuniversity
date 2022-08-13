import React from 'react'
import ReactPlayer from 'react-player'

const CampusTourCards = (props) => {
  return (
    <>
    <div class="rounded overflow-hidden shadow-lg shadow-green-400 border-solid border-white mx-auto sm:h-[13rem] sm:w-[22rem] h-[16rem] w-[26rem] md:h-[25rem] md:w-[44rem]">
    <ReactPlayer muted loop playing height="100%" width="100%" url={'https://www.youtube.com/watch?v=a0VQ68ND5vk&t=204s'}></ReactPlayer>
    </div>
    </>
  )
}

export default CampusTourCards