import s from './styles/CartPopup.module.css'

const CartItems = (props) => {
    
    return (
        <div className={s.items__blockCart}>
            <img className={s.items__imgCart} src={props.img} alt="" />
            <div className={s.items__descriptionBlockCart}>
                <p className={s.items__descriptionBlockCart__title}>{props.description}</p>
            </div>
            <div className={s.items__priceBlockCart}>
                <p className={s.items__priceBlockCart__text}>Цена:</p>
                <div className={s.items__priceBlockCart__price}>
                    <p>{props.price} руб</p>
                </div>
            </div>
            <button onClick={() => props.removeItems(props.id)} className={s.cart__closeItem} >X</button>

        </div>
    )
}

export default CartItems;