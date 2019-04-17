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
                <li className="mr-6"><NavLink className="text-black text-xl  hover:text-black no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>Projects</NavLink></li>
                <li className="mr-6"><NavLink className="text-black text-xl hover:text-black no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                <li className="mr-6"><NavLink className="text-black text-xl hover:text-black no-underline" activeStyle={{fontWeight: "bold"}} to='/login'>Admin</NavLink></li>
               
                </ul>
            </nav>
        )   
}

export default Sidebar