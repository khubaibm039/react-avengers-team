import './cart.css'
// eslint-disable-next-line react/prop-types
const Cart = ({ cart,handleSlectActor }) => {
    // eslint-disable-next-line react/prop-types
    const { image, salary, role } = cart
    return (
        <div>
            <div className="carts">
                <div className="cart-img">
                    <img src={image} alt="" />
                </div>
                <h2>{name}</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, veritatis?</small></p>
                <div className="info">
                    <p>Salary : {salary}$</p>
                    <p>{role}</p>

                </div>
                <button onClick={handleSlectActor}>Select</button>
            </div>
        </div>
    );
};

export default Cart;