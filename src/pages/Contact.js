import Navbar from "../components/Navbar/Navbar";
import "./styles/contact.css"
const Contact = () => {
    return ( 
        <div className="contact">
            <Navbar page="contact"/>
            <div className="container">
                <div className="sub-contact contact-info">
                    <h1>Get in touch</h1>
                    <div className="contact-detail">
                        <div className="contact-flex address">
                            <p>Bacolor 2001, Pampanga, Philippines</p>
                        </div>
                        <div className="contact-flex phone">
                            <p>(0999) - 813 - 4639</p>
                        </div>
                        <div className="contact-flex email">
                            <p>estrabillo.johnmichael@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="sub-contact contact-form">
                    <form>

                            <div className="f-group">
                            <label htmlFor="email">Full Name</label>
                            <input type="text" id="email"/>
                        </div>


                        <div className="f-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email"/>
                        </div>

                        <div className="f-group">
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject"></textarea>
                        </div>

                        <div className="f-group">
                            <label htmlFor="fullname">Message</label>
                            <textarea id="fullname"></textarea>
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