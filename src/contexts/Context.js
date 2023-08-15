import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useReducer, useState } from 'react'
import { reduceFxn } from '../reducers/reducers'
export const cartContext = React.createContext(null)



export const Context = ({ children }) => {
  // const [seed, setSeed] = useState(!true)
  const initialState = {
    cartItem: []
  }
  const [state, dispatch] = useReducer(reduceFxn, initialState)
  const num = state.itemt


  const addToCart = (items) => {
    dispatch({ type: "ADD_TO_CART", payload: items })
    const found = state.cartItem.find(item => item.id === items.id)
    if (found) {
      notifyFound();
      return
    }
  }

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
    notifyRemove()
  }

  const increase = (id) => {
    dispatch({ type: "INCREMENT", payload: id })
  }


  const decrease = (id) => {
    dispatch({ type: "DECREMENT", payload: id })
  }
  // useEffect(() => {
  //   if (state.cartItem.length > 0) {
  //     const lastAddedItem = state.cartItem[state.cartItem.length - 1];
  //     const found = state.cartItem.slice(0, -1).some(item => item.id === lastAddedItem.id);
  //     if (found) {
  //       toast(`Item "${lastAddedItem.name}" is already in the cart`);
  //     } else {
  //       toast(state.itemt > 1 ? ` ${state.itemt} items added to cart` : ` ${state.itemt} item added to cart`);
  //     }
  //   }
  // }, [state.cartItem, state.itemt]);

  const notify = () => toast(num > 1 ? ` ${num} items added to cart` : ` ${num} item added to cart`);
  const notifyFound = () => toast("Item already added to cart");
  const notifyRemove = () => toast("Item removed from cart");
  useEffect(() => {
    if (num > 0) {
      notify();
      return
    }
  }, [num]);

  // useEffect(() => {
  //   if (seed) {
  //     notifyFound();
  //   }
  // }, [seed]);

  // useEffect(() => {
  //   notifyAlreadyAdded();
  // }, [state.cartItem]);

  // const notifyAlreadyAdded = () => {
  //   const lastAddedItem = state.cartItem[state.cartItem.length - 1];
  //   const found = state.cartItem.slice(0, -1).some(item => item.id === lastAddedItem.id);
  //   if (found) {
  //     toast(`Item already in the cart`);
  //   }
  // }

  console.log(state);
  return (
    <cartContext.Provider value={{
      cartItem: state.cartItem,
      addToCart,
      removeFromCart,
      dispatch,
      increase,
      decrease
    }}>
      <Toaster />
      {children}
    </cartContext.Provider>
  )
}


