import { useEffect } from "react";
import "./home.css"
import { useState } from "react";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";
const Home = () => {
    const [carts, setCarts] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    const handleSlectActor = (actor) => {
        // console.log(actor);
        const actorSelected = [...selectedActors, actor]
        setSelectedActors(actorSelected)
        setTotalAmount(totalAmount + actor.salary)

    }

    return (
        <div className="container">
            <div className="home-container">
                <div className="cart-container">
                    {
                        carts.map((cart, idx) => <Cart cart={cart} handleSlectActor={handleSlectActor} key={idx}></Cart>)
                    }
                </div>
                <div>
                    <h1>this is cart</h1>
                    <h2>Total Amount : {totalAmount}</h2>
                    {
                        selectedActors.map((actor, idx) => <Card actor={actor} key={idx}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;