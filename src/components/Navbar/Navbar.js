import { Link } from "react-router-dom";
import "./style.css"
import Logo from "./images/logo.png"
import FbLogo from "./images/fb.png"
import LinkedIn from "./images/linkedin.png"
import Skype from "./images/skype.png"

const Navbar = ({ page }) => {
    return ( 
        
        <nav>

            <div className="container navbar">
                <div className="hidden-sm"></div>
                <div className="logo-container">
                    <Link to="/">
                        <img src={Logo} alt="jm-portfolio-logo" className="jm-logo"/>
                    </Link>
                </div>
                <div className="tabs">
                    <ul>
                        <li className={ page === "home" ? "active-link" : ""}>
                            <Link to="/">Home</Link>
                            <div className={ page === "home" ? "active-line" : ""}></div>
                        </li>
                        <li className={ page === "skills" ? "active-link" : ""}>
                            <Link to="/skills">Skills</Link>
                            <div className={ page === "skills" ? "active-line" : ""}></div>
                        </li>

                        <li className={ page === "projects" ? "active-link" : ""}>
                            <Link to="/projects">Projects</Link>
                            <div className={ page === "projects" ? "active-line" : ""}></div>
                        </li>

                        <li className={ page === "about" ? "active-link" : ""}>
                            <Link to="/about-me">About</Link>
                            <div className={ page === "about" ? "active-line" : ""}></div>
                        </li>
                        <li className={ page === "contact" ? "active-link" : ""}>
                            <Link to="/contact-me">Contact Me</Link>
                            <div className={ page === "contact" ? "active-line" : ""}></div>
                        </li>
                    </ul>
                </div>
                <div className="show-sm">
                    <span className="material-icons menu">
                        menu
                    </span>
                </div>
                <div className="social">
                    <ul>
                        <li className="social-logo">
                            <a href="https://www.facebook.com/jmestrabillo/" target="_blank" rel="noreferrer" className="fb-logo">
                                <img src={FbLogo} alt="fb-page" className="fb-logo"/>
                            </a>
                        </li>
                        <li className="social-logo">
                            <a href="https://www.linkedin.com/in/john-michael-estrabillo-b3a2671aa/" target="_blank" rel="noreferrer" className="fb-logo" >
                                <img src={LinkedIn} alt="linkedin-page" className="li-logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://join.skype.com/invite/VKM4MOOOpoC7"  target="_blank" rel="noreferrer" className="skype-logo">
                                <img src={Skype} alt="skype-page" className="skype-logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;