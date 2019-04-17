import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import './css/style.css'
import './css/tailwind.src.css'
import './css/tailwind.css'

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    render() {
        const projects = this.state.projects
        let projectsList 
       
        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div class="Portfolio_grid">
                    <div key={project.id} className="">
                  
                        <ProjectCard project={project} />
                    </div>
                    </div>
                )
            })
        }


        return (
           

                <div className="page_container" >
                    <div className="intro_container">
                        <p className="intro">Ipsum sdolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias? or dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? or dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? </p>
                    </div>

                <div className="mt-2" >
                    <div className="Portfolio_grid">
                    {projectsList}
                </div>
                </div>

                </div>


        )
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }


};



export default Projects