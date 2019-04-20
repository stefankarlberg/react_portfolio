import React from "react"
import ReactDOM from "react-dom"
import Welcome from "src/Welcome"
import LoginForm from "src/LoginForm.jsx"
import Header from "src/Header"
import Sidebar from "src/Sidebar"
import Footer from "./Footer"
import 'src/css/tailwind.src.css'
import 'src/css/tailwind.css'
import 'src/css/style.css'

import { BrowserRouter } from 'react-router-dom'
import Projects from "src/Projects"
import About from "src/About"
import Admin from "src/Admin"
import { Switch, Route } from 'react-router-dom'
const ThemeContext = React.createContext('light');


const App = () => {
    return (
       <div>
            <div className="h-screen w-full md:flex ">
                <div className="landing_left hidden md:w-1/5 md:inline-flex lg:inline-flex xl:inline-flex h-screen p-4 pt-8 pb-8">
                    <Sidebar />
                </div>
                <div className="full md:hidden vp-4 mt-0">
                    <Header />
                </div>
                <div className="landing_right w-full md:w-4/5 h-screen">
                        <Switch>
                        <Route exact path='src/' component={Welcome}></Route>
                        <Route exact path='src/about' component={About}></Route>
                        <Route exact path='src/projects' component={Projects}></Route>
                        <Route exact path='src/admin' component={Admin}></Route>
                        </Switch>
                </div>
            </div >       
        </div>      
      )
    };

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));


