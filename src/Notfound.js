import { Link } from "react-router-dom"

const Notfound = () => {
    return ( 

        <div className="content">

            <h1>404 PAGE NOT FOUND</h1>

           

            <h3><Link to='/'>Return Home</Link> </h3>
        </div>
     );
}
 
export default Notfound;