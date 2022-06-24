
import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';


const NavBar = () => {

        return (
        <nav className="nav">
        <a href="/" className="site-title">Logo</a>
        {/*<a img src="./logo.svg" alt="logo" height={100} className="site-title">Logo</a>*/}
        <ul>
            <li className="active">
                <Link to="/Uploads">Upload </Link>
            </li>
            <li>
                <Link to="/Galleries">Galleries</Link>
            </li>
        </ul>
      </nav>

    )

}
export default NavBar;