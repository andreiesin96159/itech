import React from 'react';
import axios from 'axios';
import Header from './commponents/Header';
import Main from './commponents/Main';
import Fotter from './commponents/Fotter';
import CartPopup from './commponents/CartPopup';
import { Route, Routes } from 'react-router-dom'
import Favorit from './commponents/commponentsMain/Favorit';


export  const AppContex = React.createContext({});

function App() {


  const [openCart, setOpenCart] = React.useState(false);

  const closeCart = () => {
    setOpenCart(!openCart)
  }

  const [products, setProducts] = React.useState([]);

  const [itemCart, setItemCart] = React.useState([]);

  const [itemFavorit, setitemFavorit] = React.useState([]);

  const [search, setSearch] = React.useState('');

  React.useEffect(() => {

    async function axiosData() {

      const itemsData = await axios.get("https://637feeee2f8f56e28e98fa24.mockapi.io/items");

      const cartData = await axios.get("https://637feeee2f8f56e28e98fa24.mockapi.io/cart");

      const favoritData = await axios.get("https://637feeee2f8f56e28e98fa24.mockapi.io/favorit");


      setProducts(itemsData.data);
      setItemCart(cartData.data);
      setitemFavorit(favoritData.data);

    }
    axiosData()



  }, []);

  const removeItems = (id) => {
    axios.delete(`https://637feeee2f8f56e28e98fa24.mockapi.io/cart/${id}`)
    setItemCart((obj) => obj.filter(item => Number(item.id) !== Number(id)))
  }


  return (
    <AppContex.Provider value={{products, itemCart, itemFavorit}}>
      <div className="App">
        {openCart ? <CartPopup removeItems={removeItems} itemCart={itemCart} closePopupCart={closeCart} 
         totalPrice={ itemCart.reduce((totalElements, objs) =>  totalElements + objs.price, 0)}
        /> : null}
        <Header openPopupCart={closeCart} search={search} setSearch={setSearch} setItemCart={setItemCart} itemCart={itemCart} />

        <Routes>
          <Route path='/favorit' element={
            <Favorit  setitemFavorit={setitemFavorit} />}>

          </Route>
          <Route path='/' element={
            <>
              <Main  setitemFavorit={setitemFavorit}  setItemCart={setItemCart}  search={search} />
            </>

          }>
          </Route>
        </Routes>

        <Fotter />

      </div>
    </AppContex.Provider>
  );
}

export default App;
