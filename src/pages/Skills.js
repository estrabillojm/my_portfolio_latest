import Navbar from "../components/Navbar/Navbar";
import Skill from './svg/Skill'
import Mern from './svg/Mern'
import "./styles/skill.css"
import Footer from "../components/Footer/Footer";
const Skills = () => {
    return ( 
        
        <div>
            <title>Skills - JM Portfolio</title>
            <Navbar page="skills"/>
            <div className="container skill-flex">  
                
                <div className="skill-content">
                   
                    <div className="skill-1">
                        <div className="current-stack">
                            <h2>Current Stack</h2>   
                            <Mern/>         
                        </div>        
                        
                        <div className="skill-1-header">
                            <h2>Web Development</h2>
                        </div>
                        <ul className="list-1">
                            <li>Solid Knowledge in Core CSS including Flex, Grid, Animations <br/>and Media Queries</li>
                            <li>Experienced in converting prototypes to HTML</li>
                            <li>Knowledge in Desktop or Mobile First Approach</li>
                            <li>Experienced in using Modern Javascript (ES6)</li>
                            <li>Understanding of Async await and Promises in Javascript</li>
                            <li>Knowledge of OOP, Functional and Procedural Approach in Javascript</li>
                            <li>Follow Software Development best practices</li>
                            <li>Experienced in consuming data from an API</li>
                        </ul>
                    </div>
                    <div className="skill-2">
                        <div className="skill-2-header">
                            <h2>UI/UX Designing</h2>
                        </div>
                        <ul className="list-2">
                            <li>Knowledge of UI/UX principles</li>
                            <li>Knowledge of using Adobe XD, Photoshop and Illustrator</li>
                            <li>Experienced in creating mockups, wireframes and prototypes</li>
                        </ul>
                    </div>
                </div>
                <Skill/>
            </div>
            <Footer/>
        </div>
     );
}
export default Skills;