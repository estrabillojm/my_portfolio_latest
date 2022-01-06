import Navbar from "../components/Navbar/Navbar";
import "./styles/about.css"
import AboutIcons from "./svg/AboutIcons";
const About = () => {
    return ( 
        <div>
            <Navbar page="about"/>
            <div className="container about-me-grid">
                <div className="about-col about-first-col">
                    <div className="about-icons">
                        <AboutIcons/>
                    </div>
                </div>

                <div className="about-col about-second-col">
                    <div className="about-content">
                        <div className="education">
                            <h2>About Me</h2>
                            <div className="about-educ">
                                <div className="content college">
                                    <div className="sub-educ">
                                        <p className="address" id="about-me-para">
                                            Hi there. I'm <strong>John Michael. </strong>
                                            I was born in Pampanga, Philippines and currently living here with my family. <br/> <br/>

                                            Being a Web Developer, I am passionate about learning new technology and continuing to improve my Problem Solving, Analytical and Designing Skills.
                                            <br/><br/>
                                            During my spare time, I like to read books, listen to music and to play mobile games.
                                            <br/><br/>
                                            When it comes to my strength, I find myself as a Proactive team player which helps me to stay motivated and focused towards my work.
                                            <br/><br/>
                                            And when it comes to weakness, I also find myself as an introvert.
                                            Sometimes, I am shy to share my ideas infront of many persons.
                                            I will only tell my Ideas until they ask me to.
                                            <br/> <br/>
                                            If I will be given the opportunity, I will leverage all my learnings and skills and work for the upliftment of your esteemed organization. That’s all about me. thank you!
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="about-col about-third-col">
                    <div className="about-content">
                    <div className="education">
                            <h2>Education</h2>
                            <div className="about-educ">
                                <div className="content college">
                                    <h3 className="course">
                                        B.S in Information Technology
                                    </h3>
                                    <div className="sub-educ">
                                        <h4>St Nicolas College of Business and Technology</h4>
                                        <p className="address">Mel-Vi, Bldg., Jose Abad Santos Avenue, Rd., <br/> Dolores, City of San Fernando, Pampanga</p>
                                        <p className="date">Batch 2016 - 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        <div className="about-work">
                            <h2>Working Experience</h2>
                            <div className="work about-work-1">
                                <h3 className="work-title">
                                    Mobile and Web Developer
                                </h3>
                                <div className="sub-work">
                                    <h4>Red Dragon Farm</h4>
                                    <p className="address">Brgy. Lara, City of San Fernando, Pampanga</p>
                                    <p className="date">March 22, 2021 - September 13, 2021</p>
                                </div>
                            </div>


                            <div className="work about-work-2">
                                <h3 className="work-title">
                                    Intern
                                </h3>
                                <div className="sub-work">
                                    <h4>NEDA Region III</h4>
                                    <p className="address">DMGC, Brgy. Maimpis, City of San Fernando<br/>Pampanga</p>
                                    <p className="date">December 19, 2019 - March 12, 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-train">
                            <h2>Training & Seminars</h2>
                            <div className="train about-train-1">
                                <h3 className="train-title">
                                    Front End Web Development
                                </h3>
                                <div className="sub-train">
                                    <h4>Bayan Academy</h4>
                                    <p className="address">Brgy. Lara, City of San Fernando, Pampanga</p>
                                    <p className="date">February 15, 2021 - February 24, 2021</p>
                                </div>
                            </div>
                            <div className="train about-train-2">
                                <h3 className="train-title">
                                    Computer System Servicing NCII
                                </h3>
                                <div className="sub-train">
                                    <h4>TESDA</h4>
                                    <p className="address">Mel-Vi, Bldg., Jose Abad Santos Avenue, Rd., <br/> Dolores, City of San Fernando, Pampanga</p>
                                    <p className="date">September 12, 2019 - November 06, 2020</p>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default About;