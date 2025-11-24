import { FaGithub, FaLinkedin } from "react-icons/fa"
import Myimage from "../../assets/photo.png"
import Button from "../Button/Button"
import myCV from "../../assets/cv.pdf"
import { Link } from "react-router-dom"


const Hero = () => {
  
    return (
        
        <div className="border-b-2 mt-28 p-4">
            
            <div className="max-w-[1400px] mx-auto px-10 py-2 ">

                <div className="flex justify-between items-center flex-col md:flex-row gap-10">

                    <img src={Myimage} className="rounded-full md:h-[450px] h-[400px] transition object-contain hover:scale-75 shadow-2xl" />

                    <div className="flex flex-col p-4">

                        <h1 className="md:text-5xl text-3xl font-bold">Hello, I'm Ali <br />
                            
                            <span className="text-blue-400"> Front-End Developer</span>
                        </h1>

                        <div className="mt-6 flex items-center gap-x-6">
                            
                            <a href={myCV} download="cv">

                                <Button title="Download CV" />
                            </a>
                            
                            <Link to="/allprojects">
                            
                                <Button title="All Projects" />
                            </Link>
                        </div>

                        <div className="flex gap-4 items-center mt-8 ">
                            
                            <a href="https://github.com/Alixplx?tab=repositories" target="_blank">

                                <FaGithub className="text-3xl cursor-pointer shadow-lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/ali-abdulrahman-8b8552325/" target="_blank">

                                <FaLinkedin className="text-3xl cursor-pointer shadow-lg" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero