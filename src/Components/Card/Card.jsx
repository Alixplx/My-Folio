

const Card = ({image, title, link}) => {
  
    return (
        
        <div className="flex-col items-center rounded-lg shadow-lg p-4">
            
            <div className="w-full h-50">

                <img src={image} className="w-full h-full object-contain hover:scale-105 transition" />
            </div>

            <div className="text-center">

                <h3 className="text-2xl font-semibold my-6">{title}</h3>
                <a href={link} target="_blank" className="border p-2 bg-gray-700 text-white rounded-lg hover:bg-blue-500 transition">
                    
                    View Project
                </a>
            </div>

        </div>
    )
}

export default Card