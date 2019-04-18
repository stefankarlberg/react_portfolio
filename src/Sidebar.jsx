import React  from "react"
import { NavLink, Link } from 'react-router-dom';
import './css/tailwind.css'
import './css/style.css'

const Sidebar = () => {
        return (
                <nav className="p-6">
                <h2 className="header-title">
                    <Link className="text-black hover:text-black no-underline text-4xl" to='/'>LOGO</Link>
                </h2>
                <ul className="sidebar_navigation mt-8 list-reset leading-loose">
                <li><NavLink className="text-black hover:text-red no-underline" activeStyle={{fontWeight: "bold"}} to='/'>HOME</NavLink></li>
                <li><NavLink className="text-black hover:text-red no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>ABOUT ME</NavLink></li>
                <li><NavLink className="text-black hover:text-red no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>CV</NavLink></li>
                <li><NavLink className="text-black hover:text-red no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>PROJECTS</NavLink></li>
                
                </ul>
            </nav>
        )   
}

export default Sidebar