import React  from "react"
import { NavLink, Link } from 'react-router-dom';
import './css/tailwind.css'
import './css/style.css'

const Sidebar = () => {
        return (
                <div>
                <h2 className="logo1 ml-6">
                    <Link className="logo1 " to='/'>LOGO</Link>
                </h2>
                <nav className="p-6">
                <ul className="sidebar_navigation mt-2 list-reset leading-loose">
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/about'>ABOUT ME</NavLink></li>
                <li><NavLink to='/about'>CV</NavLink></li>
                <li><NavLink to='/projects'>PROJECTS</NavLink></li>
                
                </ul>
            </nav>

            <Router basename={'/subdirectory'}>
  <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
  <Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
  <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
</Router>
            </div>
        )   
}

export default Sidebar