import React from 'react';
import s from  './styles/Header.module.css'
import {Link} from 'react-router-dom'

const Header = (props) =>{

     const onSearch = (inputValue) => {
        props.setSearch(inputValue.target.value)
     }


    return(

        <div className={s.header__color}>
            <header className={s.header}>
                <Link to='/'>
                <p className={s.itech}>ITECH</p>
                </Link>
                
                <div className={s.header__link}>
                    <div className={s.header__blockSearch}>
                        <img className={s.header__searchImg} src="/img/search.png" alt="" />
                        <input className={s.header__inputSearch} type="text" onChange={onSearch}/>
                    </div>
                    <Link to='/favorit' className={s.favorit__link}>
                    <button  className={s.header__link__a} >ИЗБРАННОЕ</button>
                    </Link>
                   <div className={s.divbutton}>
                   <button href="#" className={s.header__link__a} onClick={props.openPopupCart}>КОРЗИНА</button>
                   <span className={s.headerspan}>{props.itemCart.length}</span>
                   </div>
                    
                </div>
            </header>
        </div>
    )
}

export default Header;