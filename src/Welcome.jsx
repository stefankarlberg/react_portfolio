import React from "react"
import LoginForm from "./LoginForm"


const Welcome = () => {
    return (
        
        <div className="p-8 h-full">
           <div className=" h-full bg-grey">
                <div className="page_hero_container">
                    <div className="page_hero_container_center">
                        <div className="hidden sm:flex mb-0">
                            <h1 className="hero"><span className="hero">WHY ME</span></h1>
                        </div>
                        <div className="flex sm:hidden">
                            <h1 className="hero_small"><span className="flex">WHY</span><span className="flex">ME?</span></h1>
                        </div>
                        <div className="mb-3 object-center text-center">
                            <p className="login">Login and check out the Why?</p>
                        </div>
                        <LoginForm />
                        <div id="app"></div>
                    </div>
                </div>
           </div>
        </div>
       
)
}

export default Welcome