import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  // we can use the state for showing the modal here as this is the top most component
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {/* show Cart if cartIsShown is true */}
      {cartIsShown && <Cart onCloseForCart={hideCartHandler} />}
      {/* instead of chaining this onShowCart, we can make use of context */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
