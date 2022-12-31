import React from 'react'
import './services.css'
import { FaReact } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
import { SiFlask } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaLinux } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'
import { FaNetworkWired } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { SiLinux } from 'react-icons/si'
import { SiKalilinux } from 'react-icons/si'
import { HiBadgeCheck } from 'react-icons/hi'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-container">
          <div className="texr" data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <h1 className='serterx'>This are the <span className='serp'> services </span> that i offer</h1>
          </div>
        <div className="services-boxes" data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
            <div className="box">
              <div className="icon">
                <MdWeb/>
              </div>
              <h1>Web Desing</h1>
            </div>
            <div className="box">
              <div className="icon">
                <FaDatabase/>
              </div>
              <h1>Database Support</h1>
            </div>
            <div className="box">
              <div className="icon">
                <FaNetworkWired/>
              </div>
              <h1>Network Support</h1>
            </div>
            <div className="box">
              <div className="icon">
                <FaCode/>
              </div>
              <h1>Back-end Development</h1>
            </div>
            <div className="box">
              <div className="icon">
                <SiLinux/>
              </div> 
              <h1>Linux Support</h1>
            </div>
            <div className="box">
              <div className="icon">
                <SiKalilinux/>
              </div>
              <h1>Ethical Hacking</h1>
            </div>
        </div>
      </div>
      <div className="skills" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
          <h1 className='serterx'>My Skills</h1>
          <div className="certified">
            <div className="cert"><HiBadgeCheck/></div>
            <p>Basic-Intermediate</p>
          </div>
          <div className="skills-box">
            <div className="sk-box"><FaReact/></div>
            <div className="sk-box"><DiDjango/></div>
            <div className="sk-box"><SiFlask/></div>
            <div className="sk-box"><FaNode/></div>
            <div className="sk-box"><FaBootstrap/></div>
            <div className="sk-box"><FaFigma/></div>
            <div className="sk-box"><FaHtml5/></div>
            <div className="sk-box"><FaCss3Alt/></div>
            <div className="sk-box"><FaJsSquare/></div>
            <div className="sk-box"><FaPython/></div>
            <div className="sk-box"><FaGit/></div>
            <div className="sk-box"><FaLinux/></div>
          </div>
      </div>
    </div>
  )
}

export default Services