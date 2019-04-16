import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
                <nav className="header">
                <h1 className="header-title">
                    <Link className="text-white hover:text-grey no-underline" to='/'>My Portfolio</Link>
                </h1>
                <ul className="list-reset flex">
                    <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>ABOUT ME</NavLink></li>
                    <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>PRINT</NavLink></li>
                </ul>
            </nav>
        )   
}

export default Header


