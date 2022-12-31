import React from 'react'
import './about.css'
import Me2 from '../../assets/jeanAbout.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="img-about"data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">  
        <img className='me2' src={Me2} alt="me2" />
      </div>
      <div className="text-about"data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
          <h1><span className='text1'>A</span>bout me</h1>
          <h2>I’m a <span className='text'>Freelancer Full-stack Developer </span> 
          with over <span className='text'>2 years of experience</span></h2>
          <p>I’m UI/UX Designer. I’m from Colombia, i code and create web elements
          for amazing people around the world. I like work with a new people.
          New people new experience.</p>
          <div className="numbers">
              <h1 className='text'>10<span className='text-numbers'> Projects Completed.</span></h1>
              <h1 className='text'>5<span className='text-numbers'> Satisfied Clients.</span></h1>
          </div>
      </div>
    </div>
  )
}

export default About