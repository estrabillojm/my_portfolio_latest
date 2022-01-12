import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { TEMPLATE_ID, USER_ID } from "../config/keys";
import "./styles/contact.css"
import EmailLogo from "./svg/EmailLogo";
import Location from './svg/Location'
import Phone from "./svg/Phone";
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'



const Contact = () => {
    const styleLabel = (e) => {
        const elem = document.querySelectorAll(`.f-group label`)

        elem.forEach(el => {
            el.classList.remove("contact-focused")
        })

        document.querySelector(`.${e.target.name}`).classList.add("contact-focused")
    }

    const removeStyle = () => {
        const elem = document.querySelectorAll(`.f-group label`)
        elem.forEach(el => {
            el.classList.remove("contact-focused")
        })
    }

    const [formData, setFormData] = useState({fullName: "", email: "", subject: "", message: ""})

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const sweetAlert = (header, msg, status) => {
        Swal.fire(
            header,
            msg,
            status
        )
    }



    const handleFormSubmit = (e) => {
        e.preventDefault()
        emailjs.send('service_r8fyz7h',TEMPLATE_ID, formData, USER_ID).then(result => {
            if(result.text === "OK"){
                sweetAlert("Success", "Message Sent!", "success")
            }else{
                sweetAlert("Network Error", "Please try again later", "danger")
            }
        })
    }

    return ( 
        <div className="contact">
            <Navbar page="contact"/>
            <div className="container">
                <div className="sub-contact contact-info">
                    <h2>Get in touch</h2>
                    <div className="contact-detail">
                        <div className="contact-flex address">
                            <Location/>
                            <p>Bacolor 2001, Pampanga, Philippines</p>
                        </div>
                        <div className="contact-flex phone">
                            <Phone/>
                            <p>(0999) - 813 - 4639</p>
                        </div>
                        <div className="contact-flex email-info">
                            <EmailLogo/>
                            <p>estrabillo.johnmichael@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="sub-contact contact-form">
                    <div className="contact-text">
                        <h1>Lets Build Something <span className="awesome">Awesome!</span></h1>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="f-group">
                        <label htmlFor="fullName" className="fullName">Full Name</label>
                        <input type="text" id="fullName" onFocus={ styleLabel } onBlur={ removeStyle } onChange={handleInput} name="fullName"/>
                    </div>
                    <div className="f-group">
                        <label htmlFor="email" className="email">E-mail</label>
                        <input type="text" id="email" onFocus={ styleLabel } onBlur={ removeStyle } onChange={handleInput} name="email"/>
                    </div>

                    <div className="f-group">
                        <label htmlFor="subject" className="subject">Subject</label>
                        <input id="subject" onFocus={ styleLabel } onBlur={ removeStyle } onChange={handleInput} name="subject"/>
                    </div>

                    <div className="f-group">
                        <label htmlFor="message" className="message">Message</label>
                        <textarea id="message" onFocus={ styleLabel } onBlur={ removeStyle } onChange={handleInput} name="message"></textarea>
                    </div>

                    <div className="btn-form">
                        <button className="btn-contact">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     );
}
export default Contact;