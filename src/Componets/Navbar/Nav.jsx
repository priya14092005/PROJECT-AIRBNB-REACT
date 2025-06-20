

import React, { useState } from 'react';
import "./Nav.css"
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/p.jpg"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { LuTent } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";

function Nav() {
    let [visible, setVisible] = useState(false);

    return (
        <div id="Nav">
            {visible && (
                <div className="humburger">
                    <Link to={"/Login"}><div className="ham1" onClick={() => setVisible(false)}>Login</div></Link>
                    <Link to={"/Signup"}><div className="ham1" onClick={() => setVisible(false)}>Signup</div></Link>
                    <Link to={"/Listing"}><div className="ham1" onClick={() => setVisible(false)}>List your home</div></Link>
                    <Link to={"/Contact"}><div className="ham1" onClick={() => setVisible(false)}>Help center</div></Link>
                </div>
            )}

            <div className="nav1">
                <Link to={""}>
                    <div className="logo">
                        <img src={logo} alt="" width="50px" />
                        <h1>Private Property Rental</h1>
                    </div>
                </Link>
                <div className="search">
                    <input type="text" placeholder="Search Destination" />
                    <button><span>Search</span> <IoSearch /></button>
                </div>
                <div className="ham">
                    <Link to={"/Listing"}>
                        <button id="btn1">List Your Home</button>
                    </Link>
                    <button id="btn2" onClick={() => setVisible(prev => !prev)}>
                        <GiHamburgerMenu id="svg12" />
                        <CgProfile id="svg11" />
                    </button>
                </div>
            </div>

            <div className="nav2">
                <NavLink to={""}><div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
                <NavLink to={"houses"}><div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div></NavLink>
                <div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div>
                <div className="svg11"><PiFarm /><h3>Farm Houses</h3></div>
                <div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div>
                <div className="svg11"><LuTent /><h3>Tent Houses</h3></div>
                <div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div>
                <div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div>
                <div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div>
            </div>
        </div>
    );
}

export default Nav;





















