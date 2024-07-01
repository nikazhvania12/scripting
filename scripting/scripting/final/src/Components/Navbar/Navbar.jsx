import React, {useState} from "react";
import './navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar = () =>{
        setActive('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                <Link to="/"><p className="logo flex"><h1><MdTravelExplore className="icon"/>Travel.</h1></p></Link>              
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem"><Link to="/">Home</Link></li>
                            
                        <li className="navItem"><Link to="/Signup">Sign Up</Link></li>
                        
                        <li className="navItem"><Link to="/Login">Log In</Link></li>

                        <li className="navItem"><Link to="/Basket">Basket</Link></li>


                        <button className="btn"><a href="#" >BOOK NOW</a></button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoCloseSharp className="icon"/>
                    </div>
                </div>

                <div onClick={showNav}  className="toggleNavbar">
                    <BsThreeDotsVertical className="icon" />
                </div>

            </header>
        </section>
    )
}

export default Navbar;