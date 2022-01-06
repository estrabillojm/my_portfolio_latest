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
                    </div>
                </div>



                <div className="about-col about-second-col">
                    <div className="about-content">
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
                            <div className="train about-train-3">
                                <h3 className="train-title">
                                    Augmented Reality: Visualize to make it Happen
                                </h3>
                                <div className="sub-train">
                                    <h4>TESDA</h4>
                                    <p className="address">Mel-Vi, Bldg., Jose Abad Santos Avenue, Rd., <br/> Dolores, City of San Fernando, Pampanga</p>
                                    <p className="date">March 17, 2018</p>
                                </div>
                            </div>
                            <div className="train about-train-4">
                                <h3 className="train-title">
                                    3D Studio Max
                                </h3>
                                <div className="sub-train">
                                    <h4>Microcadd Institute Inc</h4>
                                    <p className="address">Brgy Dolores, City of San Fernando, Pampanga</p>
                                    <p className="date">November 08, 2014 - December 13, 2014</p>
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