import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import './css/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="page-wrapper">
                <div className="page-content">
                    <div class="w-1/5 bg-grey h-12">
                        <Sidebar />
                    </div>
                    <div class="w-4/5 bg-grey-light h-12">
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path='/' component={Hello}></Route>
                                <Route exact path='/about' component={About}></Route>
                                <Route exact path='/projects' component={Projects}></Route>
                            </Switch>
                            <Hello />
                        </div>
                    </div>
                </div>
        </div >


            
               
           
       
)
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));


