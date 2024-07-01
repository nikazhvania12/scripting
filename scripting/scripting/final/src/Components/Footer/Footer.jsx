import React from "react";
import './footer.css';
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import video2 from '../../Assets/video.mp4'
import './footer.scss';


const Footer = () => {
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                       <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2> 
                    </div> 
               

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address"/>
                        <button className="btn flex" type="submit">SEND <FiSend className="icon" /></button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex"><MdTravelExplore className="icon" /> Travel.</a>
                        </div>
                        <div className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem minima, tempore non odio provident nobis ipsam at, doloremque sed cupiditate ipsum in, atque soluta?
                        </div>
                        <div className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <FaInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">Services</li>
                            <li className="footerList flex">Insurance</li>
                            <li className="footerList flex">Agency</li>
                            <li className="footerList flex">Tourism</li>
                            <li className="footerList flex">Payment</li>

                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">Bookings</li>
                            <li className="footerList flex">Rentcars</li>
                            <li className="footerList flex">HostelWorld</li>
                            <li className="footerList flex">Trivago</li>
                            <li className="footerList flex">TripAdvisor</li>

                        </div>
                        
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Footer;