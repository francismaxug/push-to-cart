import React, { useContext } from 'react'
import { cartContext } from '../../contexts/Context'

const ProductCart = ({ products }) => {
  const productPlus = { ...products, count: 1 }
  console.log(productPlus);
  const { category, description, title, price, image } = productPlus
  const cal = `${description}`.slice(0, 39)
  const { addToCart } = useContext(cartContext)

  return (
    <React.Fragment>

      <div className='shadow-md h-[530px] rounded-md border mx-2 my-4 border-gray-400 w-[23%]'>
        <div className='p-2 border rounded-lg overflow-hidden m-2 shadow-lg'>
          <img className='object-cover w-full h-40' src={image} alt={title} />
        </div>
        <div className='p-1'>
          <h1 className='text-blue-300'>{`${category}`.toUpperCase()}</h1>
          <h1 className=' text-slate-400'><strong>{title}</strong></h1>
          <p className='text-gray-500'>{cal.padEnd(42, "...")}</p>
          <p><strong>GHC{price}</strong></p>
        </div>
        <div className='text-white mt-3 bg-blue-700 w-[140px] rounded-full h-8 mx-auto flex justify-center items-center'><button onClick={() => addToCart(productPlus)} className='flex justify-center items-center font-semibold p-2'>Add to Cart</button></div>
      </div>

    </React.Fragment>
  )
}

export default ProductCart
