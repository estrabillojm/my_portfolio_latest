import SinglePoly from "../../pages/svg/SinglePoly";

const ProjectDetail = ({ projects, index, hideDetail}) => {
    return ( 
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
                                    {projects[index].details.url &&  <a href={projects[index].details.url} target="_blank">{projects[index].details.domain}</a> }
                                </p>
                                <p className="url">
                                    {projects[index].details.urlBack && <strong>Server Side: </strong>}
                                    {projects[index].details.urlBack &&  <a href={projects[index].details.urlBack} target="_blank">{projects[index].details.domain}</a> }
                                </p>
                            </div>
                        </div>
                        }
                        <div className="prj-cls-container">
                            <button className="prj-close-btn" onClick={()=> hideDetail()}>Close</button>
                        </div>
                    </div>
                    <SinglePoly polyClass="poly-1"/>
                </div>
     );
}
 
export default ProjectDetail;