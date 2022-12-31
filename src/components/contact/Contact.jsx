import React from 'react'
import './contact.css'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_uw762j2','template_dcma22c',form.current,'HouINTbuXfJWKYw0d')
        e.target.reset()
    }

    const MySwal = withReactContent(Swal)
    const showAlert=()=>{
        MySwal.fire({
            title:"mail sent successfully",
            text:"Thanks for your comment, I'll get in touch with you.",
            icon:"success",
            button:"Aceptar",
            color:"black",
            
        })
    }

  return (
    <div id='contact' className='contact'>
        <div className="text-contact" data-aos="fade-down"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine">
            <h1><span>C</span>ontact</h1>
            <p>Let´s say Hi!</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' required placeholder='Name' />
                <input type="email" name='email' required placeholder='Email' />
                <textarea name='message' required placeholder='Message'></textarea>
                <button type='submit' onClick={()=>showAlert()}>Send Mail</button>
            </form>
            <div className="footer">
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100005223366167" target="_blank" rel='noreferrer'><BsFacebook/></a>
                    <a href="https://github.com/Cobayaa" target="_blank" rel='noreferrer'><BsGithub/></a>
                </div>
                <h1>2022</h1>
                <p>© All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Contact