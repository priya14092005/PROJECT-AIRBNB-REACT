import React from 'react'
import "./Signup.css"
import { MdOutlinePersonAddAlt } from "react-icons/md";
const Signup = () => {
  return (
    <div id="signup" onSubmit={(e) => {
      alert("signup sucessfully")
    }}>
      
      <form action="">
        <span id="signuptitle">Sign-Up Page</span>
        <div className="list">
          <label htmlFor="name">Full Name</label>
         <input type="text"  id="name" required/>
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
        <input type="text"  id="email" required/>
        </div>
         <div className="list">
          <label htmlFor="pass">Password</label>
        <input type="password"  id="pass" required/>
        </div>
         <div className="list">
          <label htmlFor="confirmpass">Confirm Password</label>
        <input type="password"  id="confirmpass" required/>
        </div>
       
        <button id="signupbtn">Sign Up <MdOutlinePersonAddAlt /></button>
      </form>
     
    </div>
  )
}

export default Signup
