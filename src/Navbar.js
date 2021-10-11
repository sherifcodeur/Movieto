
import {Link} from "react-router-dom"

const Navbar = () => {
    
   

    return ( 

       

        <nav className="navbar">
            <h1>Movies And Series Database</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;