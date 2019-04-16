import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import './css/style.css'

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
            <div>
                <h1 className="page_SK">PROJECTS</h1>
                <div class="Portfolio_grid">
                {projectsList}
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