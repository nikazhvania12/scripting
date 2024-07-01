import {React, useState, useEffect} from "react";
import './app.css';
import Navbar from './Components/Navbar/Navbar'
import Outline from './Outline';
import Login from './Links/Login/login';
import Basket from './Links/Basket/Basket';
import Signup from "./Links/Signup/signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import img from './Assets/img (1).jpg'
import img2 from './Assets/img (2).jpg'
import img3 from './Assets/img (3).jpg'
import img4 from './Assets/img (4).jpg'
import img5 from './Assets/img (5).jpg'
import img6 from './Assets/img (6).jpg'
import img7 from './Assets/img (7).jpg'
import img8 from './Assets/img (8).jpg'
import img9 from './Assets/img (9).jpg'

const App = () => {

    const Data = [
        {
            id:1,
            date:"2024-07-06",
            imgSrc:img4,
            destTitle:'Bora Bora',
            location:'New Zealand',
            grade:'CULTURAL RELAX',
            fees:700,
            description:'The epitome of romanace, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
        },

        {
            id:2,
            date:"2024-07-06",
            imgSrc:img2,
            destTitle:'Machu Picchu',
            location:'Peru',
            grade:'CULTURAL RELAX',
            fees:600,
            description:'Huayna Picchu is a mountain in Peru rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
        },

        {
            id:3,
            date:"2024-07-06",
            imgSrc:img3,
            destTitle:'Great Barrier Reef',
            location:'Australia',
            grade:'CULTURAL RELAX',
            fees: 700,
            description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place.'
        },

        {
            id:4,
            date:"2024-07-06",
            imgSrc:img,
            destTitle:'Cappadocia',
            location:'Turkey',
            grade:'CULTURAL RELAX',
            fees:800,
            description:'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
        },

        {
            id:5,
            date:"2024-07-06",
            imgSrc:img5,
            destTitle:'Guanajuato',
            location:'Mexico',
            grade:'CULTURAL RELAX',
            fees:1100,
            description:'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors avaliable. Always welcome.'
        },

        {
            id:6,
            date:"2024-07-06",
            imgSrc:img6,
            destTitle:'Cinque Terre',
            location:'Italy',
            grade:'CULTURAL RELAX',
            fees:840,
            description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodle and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
        },

        {
            id:7,
            date:"2024-07-06",
            imgSrc:img7,
            destTitle:'Angkor Wat',
            location:'Cambodia',
            grade:'CULTURAL RELAX',
            fees:790,
            description:'Angkot wat represents the entire range of Khamer art from the 9th to the 15th century. This temple is considered the heart and soul of Combodia. This place is known for its luxurious stays and adventurous activities.'
        },

        {
            id:8,
            date:"2024-07-06",
            imgSrc:img8,
            destTitle:'Taj Mahal',
            location:'India ',
            grade:'CULTURAL RELAX',
            fees:900,
            description:'An immense mausoleum of white mable, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful.'
        },

        {
            id:9,
            date:"2024-07-06",
            imgSrc:img9,
            destTitle:'Bali Island',
            location:'Indonesia',
            grade:'CULTURAL RELAX',
            fees:500,
            description:'Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archipalago. Bali is known for its volcanic mountains, history, art & culture, food, templates and beautiful sandy beaches.'
        },
    ]

    const [holidays, setHolidays] = useState(Data);
    const [basket, setBasket] = useState([]);

    useEffect(() => console.log(basket), [basket]);

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Outline holidays={holidays} basket={basket} setBasket={setBasket}/>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Basket" element={<Basket basket={basket} />} />

            </Routes>
            
        </Router>
    )
}

export default App