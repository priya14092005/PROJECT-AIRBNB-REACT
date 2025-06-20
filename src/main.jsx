import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  "./index.css"
import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Home from "./Componets/Home/Home.jsx"
import Login from "./Componets/Login/Login.jsx"
import Signup from "./Componets/Signup/Signup.jsx"
import Houses from "./Componets/Houses/House.jsx"
import Listing from './Componets/Listing/Listing.jsx'
import Usercontext from './Context/Usercontext.jsx'
import Contact from './Componets/Contactus/Contact.jsx'
const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<App/>}> 
    <Route path="" element={<Home/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Signup" element={<Signup/>}/>
     <Route path="Houses" element={<Houses/>}/>
       <Route path="Listing" element={<Listing/>}/>
        <Route path="Contact" element={<Contact/>}/>
    </Route>
  
))

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <Usercontext>
    <RouterProvider router={router}/>
    </Usercontext>
  </StrictMode>

)
