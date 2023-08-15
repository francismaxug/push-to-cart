import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../contexts/Context'

const Navbar = () => {
  const { cartItem } = useContext(cartContext)
  return (
    <div className="">
      <header className='bg-[#7E2606] h-14 px-36 flex justify-between'>
        <div className='flex justify-between items-center flex-1'>
          <Link to="/"><h2 className='text-white text-3xl font-bold'>Tasty meals</h2></Link>
          <Link to="/cart"><div className='bg-[#431601] w-44 h-10 rounded-full flex items-center justify-center font-bold text-white' >
            <div className='flex justify-center items-center'>
              <span><ion-icon style={{ color: "white", marginRight: "10px" }} name="cart-sharp"></ion-icon></span>
              <p>Your Cart</p>
              <p className='bg-[#AE3B16] h-6 w-9 rounded-full ml-3 flex justify-center items-center text-white '>{cartItem.length}</p>
            </div>
          </div>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar
