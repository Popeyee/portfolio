import React from "react";
import Card from "./Card";
import { projects} from './Profile'
import 'animate.css';
import { useInView } from "react-intersection-observer";



const Project = () => {
    const [ref, inView] = useInView({ threshold: 0 })
    return(
        <div id = "projects" ref={ref} className={inView ? "Project_container flex flex-column items-center pb5 animate__animated animate__fadeIn animate__fast" : "anime2 Project_container flex flex-column items-center pb5 "}>
            <div>
                <h1 className=' f1 measure bb bw2 mb5 pb3  '> Past Projects </h1>
            </div>      
            <div className="flex flex-wrap justify-around   ">
                {projects && projects.map((project) => 
                <Card 
                    key={project.id} 
                    id={project.id} 
                    url={project.url} 
                    name={project.name} 
                    skills={project.skills}/>
                )}
            </div>
        </div>
    )
}



export default Project ;