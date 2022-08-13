import React  , {useState} from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'
import '../index.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav =() => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[65px] bg-white shadow-lg rounded-3xl shadow-emerald-100 sticky top-0 '>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div><h1 className=' text-3xl font-extrabold py-4 bg-clip-text bg-gradient-to-r text-transparent 
            from-green-500 via-green-300 to-yellow-300
            animate-text drop-shadow-lg shadow-green-300'>
                MODY UNIVERSITY</h1></div>
            <div className='hidden md:flex '>
                <ul className='flex text-black items-center'>
                <li className = "cursor-pointer hover:text-green-400 hover:animate-pulse "><Link to="hero" spy={true} smooth={true} offset={50} duration={600}>Home</Link></li>
                <li className = "cursor-pointer hover:text-green-400 hover:animate-pulse "><Link to="campustour" spy={true} smooth={true} offset={50} duration={600}>Campus Tour</Link></li>
                <li className = "cursor-pointer hover:text-green-400 hover:animate-pulse "><Link to="schools" spy={true} smooth={true} offset={50} duration={600}>Schools</Link></li>
                    <li className = "cursor-pointer hover:text-green-400 hover:animate-pulse "><Link to="about" spy={true} smooth={true} offset={50} duration={600}>About</Link></li>
                    <li className = "cursor-pointer hover:text-green-400 hover:animate-pulse "><Link to="community" spy={true} smooth={true} offset={50} duration={700}>Campus Life</Link></li>
                    <li className = "cursor-pointer hover:text-green-400 hover:animate-pulse "><Link to="contact" spy={true} smooth={true} offset={50} duration={700}>Contact</Link></li>
                <a            href="https://zcal.co/vinodpurohit/CounsellingSession
                " target="_blank"rel="noreferrer"><button className="ml-4 hover:animate-pulse text-white ">Register for a call</button></a>
                </ul>
            </div>
            {/* HamburgerMenu */}
            <div onClick={handleNav} className = "block md:hidden">
                {nav ?  <AiOutlineClose size={30} className="text-green-500"/> : <AiOutlineMenu size={30} className="text-green-500"/>}
               
            </div>
            {/* ----MobileMenu */}
            <div className = {nav ? "w-full bg-white text-green-500 absolute top-[90px] left-0 flex justify-center text-center" : 'absolute left-[-100%]'}>
                <ul>
                <li className = "text-2xl cursor-pointer "><Link to="hero" spy={true} smooth={true} offset={50} duration={600} onClick={handleNav}>Home</Link></li>
                <li className = "text-2xl cursor-pointer "><Link to="campustour" spy={true} smooth={true} offset={50} duration={600} onClick={handleNav}>Campus Tour</Link></li>
                    <li className = "text-2xl cursor-pointer "><Link to="schools" spy={true} smooth={true} offset={50} duration={600} onClick={handleNav}>Schools</Link></li>
                    <li className = "text-2xl cursor-pointer "><Link to="about" spy={true} smooth={true} offset={50} duration={600} onClick={handleNav}>About</Link></li>
                    <li className = "text-2xl cursor-pointer " ><Link to="community" spy={true} smooth={true} offset={50} duration={700} onClick={handleNav}> Campus Life</Link></li>
                    <li className = "text-2xl cursor-pointer " ><Link to="contact" spy={true} smooth={true} offset={50} duration={700} onClick={handleNav}>Contact</Link></li>
                    {/* <a href="https://zcal.co/vinodpurohit/CounsellingSession
                " target="_blank"rel="noreferrer">                    <button className="m-8 px-8 text-white" onClick={handleNav}>Register for a call</button></a> */}

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar