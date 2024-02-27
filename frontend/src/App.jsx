import {BrowserRouter} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar/navabr'
import AllRoutes from "./Routes"


function App() {
  

  return (
    <>
      <BrowserRouter>
         <Navbar />
         <AllRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
