import React from 'react';

const CartContext = React.createContext({
  // required for auto-intellisence in the IDE
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
});

export default CartContext;