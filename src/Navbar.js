import logo from "./Images/logo.png";
import user from "./Images/user.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={logo} alt="Logo" class = "logo"/>
            <h1> Budget Tracker</h1>
            <div className="links">    
                <Link to ="/"><img src={user} alt="User" class = "user"/></Link>
            </div>
            
        </div>
     );
}
 
export default Navbar;