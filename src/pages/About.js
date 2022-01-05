import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./styles/about.css"
const About = () => {
    return ( 
        <div className="about">
            <Navbar page="about"/>
            <div className="container">
                <h1>About Me Page - <em>(Under Development)</em></h1>
            </div>
        </div>
     );
}
 
export default About;