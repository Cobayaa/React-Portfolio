import React from 'react'
import './portfolio.css'
import Imga from '../../assets/crud.png'
import Imgb from '../../assets/db.png'
import Imgc from '../../assets/port1.png'
import Imgd from '../../assets/bot.png'
import Imge from '../../assets/vamos a cofigure management network.png'
import Imgf from '../../assets/Screenshot_1.jpg'
const portfolio = () => {
    return(
        <div id='portfolio' className="portfolio">
            <div className="portfolio-content">
                <h1 className='ddd' data-aos="fade-down"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"><span>P</span>ortfolio</h1>
                <p data-aos="fade-down"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">--Best Projects--</p>
                <div className="portfolio-boxes" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                    <div className="p-box" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                        <img src={Imgc} alt="img1" />
                        <h1>project 01</h1>
                        <h2>Restaurant Web Services</h2>
                        <a className='links' href="https://indie-coal.onrender.com" target="_blank" rel='noreferrer'>Go to web</a>
                    </div>
                    <div className="p-box" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                        <img src={Imgb} alt="img1"/>
                        <h1>project 02</h1>
                        <h2>React portfolio</h2>
                        <a className='links' href="https://github.com/Cobayaa/React-Portfolio" target="_blank" rel='noreferrer'>Go</a>
                    </div>
                    <div className="p-box" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                        <img src={Imga} alt="" />
                        <h1>project 03</h1>
                        <h2>C.R.U.D written in Python</h2>
                        <a className='links' href="https://github.com/Cobayaa/C.R.U.D" target="_blank" rel='noreferrer'>Go</a>
                    </div>
                    <div className="p-box" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                        <img src={Imgf} alt="" />
                        <h1>project 04</h1>
                        <h2>Alternative Portfolio</h2>
                        <a className='links' href="https://github.com/Cobayaa/simple-portfolio" target="_blank" rel='noreferrer'>Go</a>
                    </div>
                    <div className="p-box" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                        <img src={Imge} alt="" />
                        <h1>project 05</h1>
                        <h2>Services on Ubuntu & Win Server</h2>
                        <a className='links' href="https://drive.google.com/drive/folders/1ls4qfNNRMNPo42PYPpy2txJTDlRLHblB?usp=share_link" target="_blank" rel='noreferrer'>Go</a>
                    </div>
                    <div className="p-box" data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                        <img src={Imgd} alt="" />
                        <h1>project 06</h1>
                        <h2>Bot for Telegran written in Python</h2>
                        <a className='links' href="https://github.com/diazgranados/bot_telegram_real" target="_blank" rel='noreferrer'>Go</a>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default portfolio