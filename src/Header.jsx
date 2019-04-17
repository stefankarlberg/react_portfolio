import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
                <nav className="flex items-center justify-between flex-wrap bg-white pr-1 pt-6 pb-0">
                <h1 className="header-title">
                    <Link className="text-black no-underline pl-8 no-underline text-4xl" to='/'>LOGO</Link>
                </h1>
                <ul className="list-reset flex">
                    <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>ABOUT ME</NavLink></li>
                    <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>PRINT</NavLink></li>
                </ul>
            </nav>
        )   
}

export default Header


