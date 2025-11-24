

const Button = ({ title}) => {
  
    return (
        
        <button className="rounded-lg bg-blue-600 font-semibold p-4 cursor-pointer text-white hover:bg-blue-800 transition shadow-lg capitalize">
            
            {title}
        </button>
    )
}

export default Button