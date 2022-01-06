import "./single-poly.css"

const SinglePoly = ({ polyClass }) => {
    return ( 
        <svg version="1.1" id="Layer_1" className={ `parent-poly ${polyClass}`}   x="0px" y="0px" viewBox="0 0 257 300">
            <polygon className={ `poly-0`} points="253.5,223.5 253.5,77.49 128.49,4.49 3.49,77.49 3.49,223.5 128.49,296.5 "/>
        </svg>

     );
}
 
export default SinglePoly;