import React, { useContext } from 'react'
import { cartContext } from '../../contexts/Context'

const Cart = ({ items }) => {
  // const [count, setCount] = useState(1)
  const { image, title, price, count, id } = items

  // const changeInput = (e) => {
  //   setCount(e.target.value)

  // }
  console.log(items)
  const { removeFromCart, increase, decrease } = useContext(cartContext)
  return (
    <div className='w-full flex justify-between items-center h-36 m-4 shadow-md border rounded-sm border-gray-200 overflow-hidden'>
      <div className='flex  items-center'>
        <div className='shadow-md border border-gray-200 overflow-hidden rounded-lg m-3 mr-12'>
          <img className='w-24 h-32 flex justify-center items-center' src={image} alt="carts" />
        </div>
        <div className='font-bold mr-12  w-40'>{title}</div>
        <div className='mr-28'>GHC <strong>{price}</strong></div>
        <div className='flex justify-center items-center mr-[325px]'>
          <button onClick={() => decrease(id)} className='w-5 h-4 border flex justify-center items-center mr-2 font-bold'>-</button>
          <p className='font-semibold'>{count}</p>
          <button onClick={() => increase(id)} className='w-5 h-4 border flex justify-center items-center ml-2 font-bold'>+</button>
        </div>
        <div onClick={() => removeFromCart(id)} className=' cursor-pointer border-l-2 border-gray-400 h-36 flex justify-center items-center w-20'><ion-icon style={{
          marginLeft: ""
        }} size="large" name="trash-outline"></ion-icon></div>
      </div>
    </div>
  )
}

export default Cart
