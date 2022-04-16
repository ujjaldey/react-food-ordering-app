import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true); // as we are using useEffect, the whole component will be rendered when we change the state, i.e. btnIsHighlighted

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); // change the state to false to remove the bump class after 300ms (same duration as the animation)

    // cleanup function
    return () => {
      clearTimeout(timer);
    }
  }, [items]); // adding items as the dependency. so whenever items changes, this will be called

  return (
    <button className={btnClasses} onClick={props.onClickHeaderCartButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;