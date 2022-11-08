import { useContext } from 'react';
import { Context } from '../../context/CartContext';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import "./CartItem.css"


const CartItem = ({product}) => {
    const { removeItem } = useContext(Context);

    return (
        <article className='cardcarro' >
            <picture className='cardtamaño'>
                <img className='imgcarro' src={product.image} alt={product.title} />
            </picture>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className='countcarro'>
                <h4>Cantidad</h4>
                <span>{product.quantity}</span>
            </div>
            <div className='counttotal'>
                <h4>Total Producto</h4>
                <span>${product.price*product.quantity}</span>
            </div>
            <RestoreFromTrashIcon color="error" size="large" onClick={() => removeItem(product.id)} />
        </article>
    )
}

export default CartItem
