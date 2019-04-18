import React from "react"
import './css/style.css'

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div className="Portfolio_grid_item">
            <div>
            <img src={project.image} className="block h-auto w-full" style={{ height: '200px', objectFit: 'cover' }} />
            </div>
            <div>
            <h3 className = "mt-2 pl-4 pt-4">{project.name}</h3>
            <p className="p-4 text-grey-darker text-base">{project.description}</p>
            </div>
        </div>

    )
}

export default ProjectCard