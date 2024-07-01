import {React, useState, useEffect} from 'react'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

const Outline = ({holidays, basket, setBasket}) => {

    return (
        <>
            <Home/>
            <Main holidays={holidays} basket={basket} setBasket={setBasket} />
            <Footer/>
        </>
    )

}
export default Outline;