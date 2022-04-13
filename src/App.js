import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  // we can use the state for showing the modal here as this is the top most component
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  // we call the CartProvider in App, as all the child components need to access to Cart state.
  return (
    <CartProvider>
      {/* show Cart if cartIsShown is true */}
      {cartIsShown && <Cart onCloseForCart={hideCartHandler} />}
      {/* instead of chaining this onShowCart, we can make use of context */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
