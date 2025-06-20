import React from 'react'
import "./App.css"
import Nav from "./Componets/Navbar/Nav.jsx"
import {Outlet} from "react-router-dom"
import Footer from "./Componets/Footer/Footer.jsx"
const App = () => {
  return (
    
    <>
    <Nav/>
    <Outlet/>
  <Footer/>
    </>
  )
}

export default App
