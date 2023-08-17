import { useState } from "react";
import logo from "./Images/logo.png";
import user from "./Images/user.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Dropdown = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (options) => {
      switch(options){
        case "profile":
          console.log('profile');
        break;
        case "budget-analytics":
          console.log('budget-analytics');
        break;
        case "logout":
          console.log('logout');
        break;
        default:
          console.log('Default case');

      }
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src={user} alt="User" class = "user"/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={()=>handleClose("logout")}>
            <Link to="/Login">Logout</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to='/Home'>
              <img src={logo} alt="Logo" class = "logo"/>
              <h1> Budget Tracker</h1>
            </Link>
            <div className="links">    
                <Dropdown/>
            </div>
            
        </div>
     );
}
 
export default Navbar;