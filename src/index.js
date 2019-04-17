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
import Admin from "./Admin"
import { Switch, Route } from 'react-router-dom'

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
                <div className="landing_right sm:w-full md:w-4/5 h-screen">
                        <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/admin' component={Admin}></Route>
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


