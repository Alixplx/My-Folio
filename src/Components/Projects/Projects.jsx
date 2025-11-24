import Card from "../Card/Card"
import Button from "../Button/Button"
import { bestProjects } from "../Data/Data"
import { Link } from "react-router-dom"


const Projects = () => {
  
    return (
        
        <div className="mt-20 p-4 mb-20">
            
            <div className="max-w-[1400px] mx-auto">

                <div className="flex justify-center items-center mb-12">

                    <h1 className="text-5xl font-bold">The Best Projects</h1>
                </div>
                
                <div className="grid grid-cols-4 gap-6">
                    
                    {
                        bestProjects.map((project) => {

                            return (

                                <div key={project.id}>
                                    
                                    <Card image={project.image} title={project.title} link={project.link} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            
            <div className="flex justify-center items-center mt-20">

                <Link to="/allprojects">
                
                    <Button title="See All Projects" />
                </Link>
            </div>

        </div>
    )
}

export default Projects