import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import React,{useState} from 'react';
import { Link, NavLink } from "react-router-dom";

const NavigationBar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='fw-bold'>
          <Link to="/" className="title">
            AgroBee
          </Link>
          <Link  className="title">
            User page
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/sugges">Plantations</Link>
            </li>
            <li>
              <Link to="/myfarm">My farm</Link>
            </li>
            <li>
              <Link to="/pesticide">Pesticides</Link>
            </li>
            <li>
              <Link to="/fertilizer">Fertilizer</Link>
            </li>
            <li>
              <Link to="/Office">Agri Office</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">logout</Link>
            </li>
          </ul>
        </nav>
      );
}
export default NavigationBar