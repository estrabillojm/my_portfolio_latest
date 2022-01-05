import Navbar from '../components/Navbar/Navbar'
import "./styles/project.css"
import Image1 from './images/projects/image-1.jpg'
import Image2 from './images/projects/image-2.jpg'
import Image3 from './images/projects/image-3.jpg'
import Image4 from './images/projects/image-4.jpg'
import Image5 from './images/projects/image-5.jpg'
import Image6 from './images/projects/image-6.jpg'
import Card from '../components/Cards/Card';
import { useState } from 'react'



const Projects = () => {

    const [ index, setIndex ] = useState(0)

    const projects = [
        {
            image: Image1,
            title: "My Portfolio 2022",
            status: "ongoing",
            details: {
                description: "This Portfolio is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into my personality and work ethic.",
                techs: ["React.js", "JSX", "TailwindCSS", "CSS", "CSS Media Queries", "CSS Animation"],
                url: "https://github.com/estrabillojm/latest-portfolio.git",
                urlBack: ""
            }
        },
        {
            image: Image2,
            title: "The Whitsundays",
            status: "done",
            details: {
                description: "The Whitsundays web page is converted from Prototype (PSD File) to an interactive static web page.",
                techs: ["HTML", "CSS", "CSS Media Queries", "CSS Animation", "Javascript","jQuery"],
                url: "https://github.com/estrabillojm/the-whitsundays.git",
                urlBack: ""
            }
        },
        {
            image: Image3,
            title: "CRUD w/Sanctum",
            status: "done",
            details: {
                description: "This mini project is just to refresh my knowledge in Laravel 7, Laravel Sanctum and vue js. This app allows the user to login, register, generate token, create, read, update and delete",
                techs: ["HTML","Vue 3 (Client Side)", "Composition API", "Vuex 4 (Central Store)", "TailwindCSS", "CSS", "Laravel 7 REST API (Server Side)", "Laravel Sanctum"],
                url: "https://github.com/estrabillojm/todo-with-auth-front-end.git",
                urlBack: "https://github.com/estrabillojm/todo-with-auth-backend.git"
            }
        },
        {
            image: Image4,
            title: "Crystales (Front End)",
            status: "pending",
            details: {
                description: "Crystales is a Finance Management System that can monitor and track all transactions and generate financial reports",
                techs: ["HTML","Vue 3 (Client Side)", "Options and Composition API", "Vuex 4 (Central Store)", "Tailwind CSS", "CSS", "CSS Animation", "GSAP"],
                url: "https://github.com/estrabillojm/crystales-front-end-vue-3.git",
                urlBack: ""
            }
        },
        {
            image: Image5,
            title: "Dayago",
            status: "done",
            details: {
                description: "Dayago is a generic system to manage blood bank based on information of donor, patient and blood type. It process the transaction between the patient/donor, blood bank and hospitals through online.",
                techs: ["HTML", "Laravel 7", "Laravel 7 Blade Template","jQuery", "Bootstrap", "Minimal CSS"],
                url: "",
                urlBack: ""
            }
        },
        {
            image: Image6,
            title: "Enrollment System",
            status: "done",
            details: {
                description: "Online Enrollment System is our capstone project wayback 2019. This System is developed based on the manual enrollment process of Dolores Stand Alone Senior High School. It tracks and monitor all the new and old enrollees and transferees. It also allows the student to fill up the form and make an appointment online. It can also generate reports.",
                techs: ["HTML", "Node.js", "Express.js","Blade Template", "Bootstrap", "Minimal CSS"],
                url: "https://github.com/estrabillojm/Enrollment-System.git",
                urlBack: ""
            }
        }
    ]
    
    
    const viewDetails = (ind) => {
        setIndex(ind)
        document.getElementById("p-projects").classList.remove("no-details")
        document.getElementById("p-projects").classList.add("with-details")
        document.getElementById("details").classList.add("show-details")
        document.getElementById("content").classList.add("show-content-details")
    }

    return ( 
        <div>
            <title>Projects - JM Portfolio</title>
            <Navbar page="projects"/>

            <div className="notice-dev">
                <h1>Small - Medium Screen Layout are still under development</h1>
            </div>
            <div className="container project-grid">
                <div className="p-projects no-details" id="p-projects">   
                    {
                        projects.map((p, index) => {
                            return (
                                <div key={index}>
                                    <Card
                                    image={p.image}
                                    project={p.title}
                                    status={p.status}
                                    viewDetails={()=> viewDetails(index)}
                                    /> 
                                </div>
                            )
                        })
                    }  
                </div>
                <div className="prj-details" id="details">
                    <div className="prj-content" id="content">
                        <h2 className="prj-title">{ projects[index].title }</h2>
                        <div className="project-description">
                            <h3>Description:</h3> 
                            <div className="prj-line">
                                <p className="prj-desc">
                                    <em>
                                        { projects[index].details.description }
                                    </em>
                                </p>
                            </div>
                        </div>
                        <div className="technology-used">
                            <h3>Technology/Languages: </h3>
                            <ul className="prj-line">
                                {
                                    projects[index].details.techs.map((t, index) => {
                                        return (
                                            <li className="tech-used" key={index}>{t}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        { projects[index].details.url && <div className="prj-url">
                            <h3>Link: </h3>
                            <div className="prj-line">
                                <p className="url">
                                    {projects[index].details.urlBack && <strong>Client Side: </strong>}
                                    { projects[index].details.url }
                                </p>
                                <p className="url">
                                    {projects[index].details.urlBack && <strong>Server Side: </strong>}
                                    { projects[index].details.urlBack }
                                </p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Projects;