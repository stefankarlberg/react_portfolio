import React from "react"

import './css/tailwind.src.css'
import './css/tailwind.css'
import './css/style.css'

const About = () => {
    return (
        <div className="page_container" >
            <div className="intro_container">
                <h1 className="page">About</h1>
                <p className="intro">Ipsum sdolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias? or dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? or dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? </p>
            </div>
            <div className="flex-container wrap">
                <div className="flex-item">
                    <h2 className="text-black">Headline</h2>
                </div>
                <div className="flex-item">
                    <p className="text-black">Psum sdolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga sa. dolor dolorem consectetur est velit fugiat. Dolorem provident co dolor dolorem consectetur est velit fugiat. Dolorem provident co</p>
                </div>
            </div>
            <div className="flex-container wrap">
                <div class="flex-item md:mr-3">
                    <h2 className="text-black">Headline 2</h2>
                </div>
                <div className="flex-item md:ml-3">
                    <p className="text-black">Dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga sa. 
                    dolor dolorem consectetur est velit fugiat. Dolorem provident co dolor dolorem consectetur est velit fugiat. 
                    Dolorem provident coDolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga sa. 
                    dolor dolorem consectetur est velit fugiat. Dolorem provident co dolor dolorem consectetur est velit fugiat. 
                    Dolorem provident co</p>
                </div>
            </div>
          
        </div>
         
       
      )
}

export default About