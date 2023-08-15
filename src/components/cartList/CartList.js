import React, { useContext } from "react";
import { cartContext } from "../../contexts/Context";
import Cart from "../cart/Cart";

const CartList = () => {
  const { cartItem } = useContext(cartContext)
  return (
    <div className="">
      <div className="w-[70%] mx-auto">
        {cartItem.length < 1 ? <h2 className="text-red-400 flex justify-center items-center">No Item in Cart</h2> : cartItem.map(cart => <Cart items={cart} key={cart.id} />)}
      </div>
      <div>
        {cartItem.length < 1 ? "" : <h2 className=" text-right w-[85%] text-black font-bold" >Total Amount GHC <span>{cartItem.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)}</span></h2>}
      </div>
    </div>
  )
}

export default CartList
