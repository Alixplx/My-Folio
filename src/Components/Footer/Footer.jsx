import { Link } from "react-router-dom"


const Footer = () => {
  
    return (
        
        <footer className="p-6 h-[7vh] bg-black/80">

            <div className="flex justify-between items-center max-w-[1400px] mx-auto">

                <Link to="/">

                    <span className="rounded-full bg-red-700 text-white p-2 font-bold shadow-lg">
                    
                        My Folio
                    </span>
                </Link>

                <p className="text-center text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()}
                    
                    <span> All Rights Reserved.</span>
                </p>

                <ul className="flex gap-x-8 text-white transition">

                    <Link to="/allprojects">

                        <li>

                            <span className="hover:text-white/80 hover:underline">Projects</span>
                        </li>
                    </Link>
                </ul>

            </div>
        </footer>
    )
}

export default Footer