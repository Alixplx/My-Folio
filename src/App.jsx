import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import AllProjects from "./Components/AllProjects/AllProjects"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"


function App() {
  
  return (
    
    <>
    
      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route path='/' element={ <Home /> } />
          <Route path='/allprojects' element={ <AllProjects /> } />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App