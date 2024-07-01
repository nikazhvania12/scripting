import React from "react"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import "./basket.scss";

const Basket = ({basket}) => {
    const GetPrice = () => {
        var price = 0;
        
        if(basket != null)
            price = basket.reduce((acc, item) => acc + item.fees, 0);

        return price;
    }
    return(
        <>
        <div className="hidden" />
        <h1 className="price">Total Price is {GetPrice()}₾</h1>
        <div className="secContent grid">
            {
                basket.map(item => (
                    <div key={item.id} className="singleDestination">
                        <div className="imageDiv">
                                    <img src={item.imgSrc} alt={item.destTitle}></img>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{item.destTitle}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className="icon" /><span className="name">{item.location}</span></span>
                                    
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{item.grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{item.fees}₾</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{item.description}</p>
                                    </div>
                                    <div>
                                    <button className="btn flex">
                                        DETAILS <LuClipboardCheck className="icon" />
                                    </button>
                                    </div>
                                </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Basket;