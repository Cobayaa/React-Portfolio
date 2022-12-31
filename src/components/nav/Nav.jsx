import React from 'react'
import './nav.css'
import { useState } from 'react'
import { BiHome } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { MdOutlineContactMail } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav'>
        <h1 className='logo'>COBAYA</h1>
        <div className="nav-container-links">
            <div className="line"></div>
            <ul>
                <li> <BiHome/> <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><span className='span'>H</span>ome</a></li>
                <li><BsFillPersonFill/><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <span className='span'>A</span>bout</a></li>
                <li><RiCustomerService2Fill/><a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><span className='span'>S</span>ervices</a></li>
                <li><MdWork/><a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><span className='span'>P</span>ortfolio</a></li>
                <li><MdOutlineContactMail/><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span className='span'>C</span>ontact</a></li>
            </ul>
            <div className="line"></div>
        </div>
        <div className="name">Jean<br/>Zambrano</div>
    </div>
  )
}

export default Nav