import s from './styles/CartPopup.module.css'
import CartItems from './CartItems'



const CartPopup = (props) => {



    return (

        <div className={s.cart__popupBlock}>
            <div className={s.cart__closeBlock}>
                <p className={s.cart__textCart}>Козина</p>
                <button className={s.cart__close} onClick={props.closePopupCart}>X</button>
            </div>

            {
                props.itemCart.length > 0 ? 
                <div className={s.cart__items}>
                    {
                        props.itemCart.map(product => {
                            return (
                                <CartItems key={product.id} id={product.id} img={product.img} description={product.title} price={product.price} removeItems={props.removeItems} />
                            )
                        })
                    }


                </div>
                :  <h2>Товаров нет</h2>
            }


            <div className={s.cart__priceBlock}>
                <p>Сумма</p>
                <p> {props.totalPrice} цена</p>
            </div>
            <button className={s.cart__button}>кнопка</button>
        </div>


    )
}

export default CartPopup;