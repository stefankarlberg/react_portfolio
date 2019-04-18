import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <div class="flex mb-0">
                <div class="w-2/5">
                    <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu">
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li><NavLink className="text-black hover:text-red no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>PROJECTS</NavLink></li></a>
                            </ul>
                        </div>
                    </nav>  
                </div>
                <div class="w-3/5">
                    <h3 className="header-title text-right mr-8 mt-4">
                        <Link className="text-black text-right pl-8 no-underline text-4xl" to='/'>LOGO</Link>
                    </h3>
                </div>
          </div>
                
               
        )   
}

export default Header


