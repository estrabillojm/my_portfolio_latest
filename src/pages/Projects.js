import Navbar from '../components/Navbar/Navbar'
import "./styles/project.css"
import { useState } from 'react'
import ProjectDetail from '../components/ProjectDetail/projectDetail'
import { projects } from '../store/Store'
import  Card  from '../components/Cards/Card'

const Projects = () => {
    const [ index, setIndex ] = useState(0)
    const viewDetails = (ind) => {
        setIndex(ind)
        document.getElementById("details").classList.remove("t-details")
        document.getElementById("p-projects").classList.remove("no-details")
        document.getElementById("p-projects").classList.add("with-details")
        document.getElementById("details").classList.add("show-details")
        document.getElementById("content").classList.add("show-content-details")
    }



    const hideDetail = () => {
        document.getElementById("details").classList.add("t-details")
        document.getElementById("p-projects").classList.add("n-details")
        document.getElementById("p-projects").classList.remove("with-details")
        document.getElementById("details").classList.remove("show-details")
        document.getElementById("content").classList.remove("show-content-details")
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
                                    cardClass={`prj-${index}`}
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
                <ProjectDetail projects={projects} index={index} hideDetail={hideDetail} />
            </div>
        </div>
     );
}
export default Projects;