import { useEffect } from "react";
import "./home.css"
import { useState } from "react";
import Cart from "../Cart/Cart";
const Home = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    const handleSlectActor = () => {
        
    }


    return (
        <div className="container">
            <div className="home-container">
                <div className="cart-container">
                    {
                        carts.map((cart, idx) => <Cart cart={cart} handleSlectActor={handleSlectActor} key={idx}></Cart>)
                    }
                </div>
                <div className="cart">
                    <h1>this is cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;