import React from 'react'
import "./Contact.css"
import { TbFileLike } from "react-icons/tb";
const Contact = () => {
  return (
    <div id="contact">
      <form action="https://formspree.io/f/xnnvbaoz" method="POST">
              <span id="contacttitle">Contact Page</span>
              <div className="list">
                <label htmlFor="name">UserName</label>
               <input name="UserName" type="text"  id="name" required/>
              </div>
              <div className="list">
                <label htmlFor="email">Email</label>
              <input name="mail" type="text"  id="email" required/>
              </div>
               <div className="list">
                <label htmlFor="msg">Message</label>
              <textarea name="message" id="msg"></textarea>
              </div>
               
             
              <button id="contactbtn">Submit <TbFileLike/> </button>
            </form>
    </div>
  )
}

export default Contact
