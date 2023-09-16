import { useEffect } from "react";
import "./home.css"
import { useState } from "react";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";
import Swal from 'sweetalert2/src/sweetalert2.js'



const Home = () => {
    const [carts, setCarts] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [remaining, setTotalRemaining] = useState(20000)
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    const handleSlectActor = (actor) => {
        // console.log(actor);
        const isExits = selectedActors.find(id => actor.name === id.name);
        if (!isExits) {
            const actorSelected = [...selectedActors, actor]
            const totalAmountRemaining = remaining - actor.salary

            if (totalAmountRemaining < 0) {
                return (
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>',
                        timer: 200
                    })
                )
            }

            setSelectedActors(actorSelected)
            setTotalRemaining(totalAmountRemaining);
            setTotalAmount(totalAmount + actor.salary)



        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>',
                timer: 2000
            })
        }


    };


    return (
        <div className="container">
            <div className="home-container">
                <div className="cart-container">
                    {
                        carts.map((cart, idx) => <Cart cart={cart} handleSlectActor={handleSlectActor} key={idx}></Cart>)
                    }
                </div>
                <div>
                    <h1>This is cart</h1>
                    <h2>Total Amount : {totalAmount}</h2>
                    <h2>Remaining : {remaining}</h2>
                    <h3>Total Actor : {selectedActors.length}</h3>
                    {
                        selectedActors.map((actor, idx) => <Card actor={actor} key={idx}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;