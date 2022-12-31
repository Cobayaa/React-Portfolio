import React from 'react'
import './header.css'
import Me from '../../assets/jean.jpg'
import Logo from '../../assets/logo2.png'
const Header = () => {
  return (
    <div id='header' className='header'>
        <div className="circle">
            <div className='brand'>
                <img src={Logo} alt="logo" />
                <h1>Jean Zambrano</h1>
            </div>
            <img className='me-photo' src={Me} alt="me" />
        </div>
        
        <div className="items">
            <div className="age">
                <h2 className='age-text'>age</h2>
                <div className="age-num">
                    <h2>18</h2>
                    <h2 className='age-original'>19</h2>
                    <h2>20</h2>
                </div>
            </div>
            <div className="cv">
                <a className='cv1' href="https://drive.google.com/file/d/1LB9pWDgvkPR36gsokWPBuEqCmzmomb_e/view?usp=share_link" target="_blank" rel='noreferrer'>Donwload CV</a>
            </div>
        </div>
    </div>
  )
}

export default Header