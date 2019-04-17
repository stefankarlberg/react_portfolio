import React from "react"
import LoginForm from "./LoginForm"


const Hello = () => {
    return (
        
        <div className="p-8 h-full">
           <div className="hero w-full h-full object-center">
                <div className="hidden md:flex">
                    <h1 className="hero"><span className="hero">WHY ME</span></h1>
                </div>
                <div className="flex md:hidden">
                    <h1 className="hero_small"><span className="flex">WHY</span> <span className="flex">ME?</span></h1>
                </div>
                <div className="p-10 object-center text-center">
                <p className="login">Login and check out the Why?</p>
                </div>
                    <LoginForm />
               
                 <div id="app2"></div>
           </div>
        </div>
       
)
}

export default Hello