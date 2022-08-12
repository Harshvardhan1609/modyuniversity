import React from 'react'
import {Link} from 'react-scroll'

const Footers = () => {
  return (
<footer class="p-5 shadow shadow-green-300-400 md:flex md:items-center md:justify-between md:p-6 bg-white rounded-lg shadow-green-200">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://modyuniversityjdh.netlify.com/" class="hover:underline">Mody University</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        <Link to="about" spy={true} smooth={true} offset={50} duration={900} class="mr-4 hover:underline md:mr-6 cursor-pointer hover:text-yellow-200">About</Link>
        </li>
        <li>
            <a href="https://modyuniversityjdh.netlify.com/" class="mr-4 hover:underline md:mr-6 cursor-pointer hover:text-yellow-200">Policy</a>
        </li>
        <li>
        <Link to="updates" spy={true} smooth={true} offset={50} duration={900} className="mr-4 hover:underline md:mr-6 cursor-pointer hover:text-yellow-200">Campus life</Link>
        </li>
        <li>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={900} className="mr-4 hover:underline md:mr-6 cursor-pointer hover:text-yellow-200">Contact</Link>
        </li>
        <a            href="https://zcal.co/vinodpurohit/CounsellingSession
                " target="_blank"rel="noreferrer"><button className="ml-4 hover:animate-pulse text-white ">Register for a call</button></a>
    </ul>
</footer>
  )
}

export default Footers