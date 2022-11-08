import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'
import CartItem from "./CartItem";
import { db } from '../../Components/Firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';



export const Cart = () => {
 const { quantity, cart, total, clear } = useContext(Context);

 

    return (
        <section>
            {
                quantity === 0 ? (
                    <h1>Tu carrito está vacío. Para agregar productos presiona <Link to="/">aquí</Link>.</h1>
                ) : (
                    <>
                        <div>
                            <h1>Mi carrito</h1>
                            <div>
                                <Link to="/"><button>Seguir comprando</button></Link>
                                <span onClick={clear}><button>Vaciar carrito</button></span>
                            </div>
                        </div>
                        {
                            cart.map((product) => {
                                return <CartItem key={product.id} product={product} />
                            })
                        }
                        <div>
                            <div>
                                <h2>Total Carrito</h2>
                                <span>${total}</span>
                            </div>
                            <Link to="/formulario"><button>Comprar</button></Link>
                        </div>
                    </>
                )
            }
        </section>
    )
};


