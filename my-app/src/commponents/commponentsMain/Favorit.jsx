import React from 'react';
import s from "../styles/Favorit.module.css";
import axios from 'axios';
import FavoritCart from './FavoritCart';
import { AppContex } from '../../App';

const Favorit = (props) => {
 const contex = React.useContext(AppContex)

    const addItemsCart = async (obj) => {
          
        const {data} = await  axios.post("https://637feeee2f8f56e28e98fa24.mockapi.io/cart", obj);
        props.setItemCart([...contex.itemCart, data])
    }
    const removeFavorit = (id) => {
        axios.delete(`https://637feeee2f8f56e28e98fa24.mockapi.io/favorit/${id}`);
        props.setitemFavorit((obj) => obj.filter(item =>Number(item.id) !== Number(id)))
    }



    return (

        <div>
            <div className={s.cart__textCart}>  Избранное</div>
            <div className={s.items__wrap}>
                {
                    contex.itemFavorit.map(product => {
                        return (
                            <FavoritCart key={product.id} myId={product.myId} id={product.id} img={product.img} title={product.title} description={product.description} price={product.price}
                            removeFavorit={(id)=> removeFavorit(id)} 
                            onPlus={
                                (cartObj) => {
                                    addItemsCart(cartObj)
                                }
                              }
                            />
                        )
                    })
                }

            </div>
        </div>

    )
}
export default Favorit;