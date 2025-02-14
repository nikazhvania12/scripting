import React from "react";
import './home.css';
import video from '../../Assets/video.mp4';
import './home.scss';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import { TbApps } from "react-icons/tb";


const Home = (holidays) => {
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">Search your Holiday</h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your Destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here...."/>
                            <HiOutlineLocationMarker className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">5000₾</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000"/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <FaInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>

                    <div className="leftIcons">
                        <VscListSelection className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;