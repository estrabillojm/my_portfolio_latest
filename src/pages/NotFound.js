import { Link } from "react-router-dom";
import "./styles/notFound.css"

const NotFound = () => {
    return ( 
        <div class="container-404">
            <h2>404</h2>
            <h3>Request Not Found</h3>
            <Link to="/" className="homepage-404">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;