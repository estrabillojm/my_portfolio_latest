import "./style.css"

const Card = ({ image, project, status, viewDetails, cardClass }) => {
    
    return ( 
        <div className={`card ${cardClass}`}>
            <div className="prj-img">
                <img src={ image } alt="portfolio"/>
            </div>
            <div className="prf-desc">
                <h3>{ project }</h3>
                <div className="prj-flex">
                    <div></div>
                    <p className={`prj-status prj-${status} `}>{ status.toUpperCase() }</p>
                    <button onClick={() => viewDetails()}>Details</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;