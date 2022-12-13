import React from 'react';
import s from "../styles/Items.module.css";


const Items = (props) => {

    const [add, setAdd] = React.useState(props.addAllCart)
    const [favorit, setFavorit] = React.useState(props.addAllFavor)

    const onClickPlus = () => {
        let id = props.id;
        let myId = props.myId
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;

        props.onPlus({ id, myId, title, description, price, img })


        setAdd(!add)
        console.log(add)
    }



    const onClickFavorit = () => {
        let id = props.id;
        let myId = props.myId
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;

        props.addItemFavorit({ id, myId, title, description, price, img })


        setFavorit(!favorit)

        console.log(favorit)
    }

    // const [addItem, setAddItem] = React.useState(false)

    // const onClickItem = () => {
    //     setAddItem(!addItem)
    //     console.log(addItem)
    // }



    return (
        <div className={s.items__block}>
            {
                favorit === true ? <button className={s.add__item} onClick={onClickFavorit}>Добавлено </button>
                    : <button className={s.add__item} onClick={onClickFavorit}>Добавить в избранное</button>
            }


            <img className={s.items__img} src={props.img} alt="" />
            <div className={s.items__descriptionBlock}>
                <p className={s.items__descriptionBlock__title}>{props.title}</p>
                <p>{props.description}</p>
            </div>
            <div className={s.items__priceBlock}>
                <p className={s.items__priceBlock__text}>Цена</p>
                <div className={s.items__priceBlock__price}>
                    <p>{props.price} руб</p>

                    <button className={add ? s.items__priceBlock__buttonGreen : s.items__priceBlock__button} onClick={onClickPlus}>
                        <img className={add ? s.items__priceBlock__check : s.items__priceBlock__img} src={add ? '/img/check.png' : '/img/plus.png'} alt="" />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Items;