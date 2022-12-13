import Baner from "./commponentsMain/Baner.jsx";
import axios from "axios";
import Description from "./commponentsMain/Description.jsx";
import Items from "./commponentsMain/Items.jsx";
import s from "./styles/Main.module.css"
import { AppContex } from "../App.js";
import React from 'react';

const Main = (props) => {
    const contex = React.useContext(AppContex)

    const addItemsCart = async (objCart) => {


        const findCartItems = contex.itemCart.find((obj) => obj.myId === objCart.myId)
        if (findCartItems) {
            axios.delete(`https://637feeee2f8f56e28e98fa24.mockapi.io/cart/${findCartItems.id}`);
            props.setItemCart(prev => prev.filter(items => items.myId !== objCart.myId))
        } else {
            const { data } = await axios.post("https://637feeee2f8f56e28e98fa24.mockapi.io/cart", objCart);
            props.setItemCart([...contex.itemCart, data])
        }


    }


    const addItemsFavorit = async (objFavorit) => {
        const findFavorit = contex.itemFavorit.find((obj) => obj.myId === objFavorit.myId)
        if (findFavorit) {
            axios.delete(`https://637feeee2f8f56e28e98fa24.mockapi.io/favorit/${findFavorit.id}`);
        } else {
            const { data } = await axios.post("https://637feeee2f8f56e28e98fa24.mockapi.io/favorit", objFavorit);
            props.setItemCart([...contex.itemFavorit, data])
        }


    }

    return (
        <div className={s.main__position}>
            <Baner />
            <Description search={props.search} />
            <div className={s.items__wrap}>
                {
                    contex.products.filter((items) => items.title.toLowerCase().includes(props.search.toLowerCase()))
                        .map(product => {
                            return (
                                <Items key={product.id}
                                    id={product.id}
                                    myId={product.myId}
                                    addAllCart={contex.itemCart.some((addCart) => addCart.myId === product.myId)}

                                    addAllFavor={contex.itemFavorit.some((addFavorit) => addFavorit.myId === product.myId)}

                                    addItemFavorit={(add) => { addItemsFavorit(add) }}
                                    onPlus={(add) => { addItemsCart(add) }}

                                    img={product.img} title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    
                                />
                            )
                        })
                }


            </div>

        </div>
    )
}
export default Main;