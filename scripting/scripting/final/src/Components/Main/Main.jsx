import React from "react";
import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import { BiBasket } from "react-icons/bi";
import './main.scss';

const Main = ({holidays, basket, setBasket}) => {
    console.log(holidays);

    const AddtoBasket = (id) => {
        var selected = holidays.find(h => h.id === id);

        if(selected){
            setBasket(prevBasket => [...prevBasket, selected]);
        }
    }
    const GetRemainingDate = (date) => {
        var today = new Date();

        var year = parseInt(date.substring(0,4)) - today.getFullYear();
        var month = parseInt(date.substring(6,7)) - today.getMonth() - 1;
        var day = parseInt(date.substring(9,10)) - today.getDate();

        console.log(parseInt(date.substring(0,4)), parseInt(date.substring(6,7)), parseInt(date.substring(9,10)));
        console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());


        return year + " Years, " + month + " Months, And " + day + " Days";

    }

    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">
                {
                    holidays.map(({id, imgSrc, destTitle, location, grade, fees, description, date })=>{
                        return(
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}></img>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className="icon" /><span className="name">{location}</span></span>
                                    <span>{date}</span>
                                    <br />
                                    <span>Starts In {GetRemainingDate(date)}</span>
                                    
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}₾</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <div>
                                    <button className="btn flex">
                                        DETAILS <LuClipboardCheck className="icon" />
                                    </button>
                                    <button className="btn flex" onClick={() => AddtoBasket(id)}>
                                        Add to Basket <BiBasket className="icon" />
                                    </button>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;