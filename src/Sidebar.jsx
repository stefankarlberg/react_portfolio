import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
        return (
                <nav className="sidebar">
                <h2 className="header-title">
                    <Link className="text-white hover:text-grey no-underline" to='/'>My Portfolio</Link>
                </h2>
                <ul className="sidebar_navigation">
                    <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                    <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
                </ul>
            </nav>
        )   
}

export default Sidebar