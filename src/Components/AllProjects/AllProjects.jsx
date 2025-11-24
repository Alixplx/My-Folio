import { useState } from "react"
import Card from "../Card/Card"
import { categories, projects } from "../Data/Data"


const AllProjects = () => {
  
    const [activeTab, setActiveTab] = useState("All")

    let filteredCategories = activeTab === "All" ? projects : projects.filter(project => project.category === activeTab)

    return (

        <div className="mb-20">
            
             <div className="flex justify-center items-center bg-gray-900 p-8 text-white">

                <h1 className="text-6xl font-bold">All Projects</h1>
            </div>

            <div className="max-w-[1400px] mx-auto">

                <div className="flex justify-center items-center mt-20">

                    {
                        categories.map((category, index) => {

                            return (
                                
                                <button key={index} onClick={() => setActiveTab(category)} 
                                        className={`${activeTab === category ? "bg-linear-to-b from-blue-500 to-blue-400 text-white" : "bg-blue-500"} bg-gray-700 text-white px-4 py-2 m-2 rounded-full cursor-pointer hover:bg-blue-500 transition duration-300`}>

                                    {category}
                                </button>
                            )
                        })
                    }
                </div>
                
                <div className="grid grid-cols-4 gap-6">
                    
                    {
                        filteredCategories.map((project) => {

                            return (

                                <div key={project.id}>
                                    
                                    <Card image={project.image} title={project.title} link={project.link} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllProjects