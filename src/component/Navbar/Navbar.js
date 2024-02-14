import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <div>
        <div className='navbar'>
            <h1>Mahesh Choudhary</h1>
            <div className='menu' >
                <Link activeClass='active' to='Home' spy={true} smooth={true} offset={-100} duration={500} className='menuList' >Home</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-10} duration={500} className='menuList' >Skill</Link>
                <Link activeClass='active' to='project' spy={true} smooth={true} offset={-10} duration={500} className='menuList' >Project</Link>
                <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={500} className='menuList' >Work</Link>

            </div>
            <button className='menuButton' onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src='' alt='' className='menuImg'/>
                Contact Me
            </button>

            <h1 className='mob1' onClick={()=>setShowMenu(!showMenu)}> ≡ </h1>
            <div className='Mobmenu1' style={{ display : showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='Home' spy={true} smooth={true} offset={-100} duration={500} className='mobmenuList' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='mobmenuList' onClick={()=>setShowMenu(false)}>Skill</Link>
                <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='mobmenuList' onClick={()=>setShowMenu(false)}>Project</Link>
                <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className='mobmenuList' onClick={()=>setShowMenu(false)}>Work</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='mobmenuList' onClick={()=>setShowMenu(false)}>Contact</Link>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar