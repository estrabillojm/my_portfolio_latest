import { Link } from "react-router-dom";
import FbLogo from "../Navbar/images/fb.png"
import LinkedIn from "../Navbar/images/linkedin.png"
import Skype from "../Navbar/images/skype.png"
import "./style.css"

const Social = () => {
    return ( 
        <div className="social-sm">
            <ul>
                <li>
                    <a href="https://www.facebook.com/jmestrabillo/" target="_blank" rel="noreferrer" className="fb-logo">
                        <img src={FbLogo} alt="fb-page" className="fb-logo-sm"/>
                    </a>
                </li>
                <li>
                    <Link to="/" className="li-logo">
                        <img src={LinkedIn} alt="linkedin-page" className="li-logo-sm"/>
                    </Link>
                </li>

                <li>
                    <Link to="/" className="skype-logo">
                        <img src={Skype} alt="skype-page" className="skype-logo-sm"/>
                    </Link>
                </li>
            </ul>
        </div>
     );
}
export default Social;