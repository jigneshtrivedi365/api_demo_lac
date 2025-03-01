import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                to="/" 
                >
                Student Form
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                to="/student-list" 
                >
                Student List
                </NavLink>
            </li>
             
        </ul>
    );
}