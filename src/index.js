import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import './css/tailwind.src.css'
import './css/tailwind.css'
import './css/style.css'

import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
       <div>
            <div className="h-screen w-full sm:flex">
                <div className="landing_left h-screen p-4 pt-8 pb-8">
                <Sidebar />
                </div>
                <div className="landing_right h-screen">
                        <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
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


