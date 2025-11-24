import { Link } from "react-router-dom"


const Navbar = () => {
  
    return (
        
        <div className="h-[7vh] bg-black/80">
            
            <div className="flex flex-wrap justify-between items-center max-w-[1400px] mx-auto px-20 py-6">

                <Link to="/">

                    <span className="rounded-full bg-red-700 text-white p-2 font-bold shadow-lg">
                    
                        My Folio
                    </span>
                </Link>

                <ul className="flex gap-x-8 text-white transition">

                    <Link to="/allprojects">

                        <li>

                            <span className="hover:text-white/80 hover:underline">Projects</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar