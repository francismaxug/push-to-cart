import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCart from '../components/productCart/ProductCart'
import Loader from '../components/loader/Loader'
const Products = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])


  const callAllProducts = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products?limit=10")
      setIsLoading(false)
      setProducts(data)
      console.log(data)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    callAllProducts()
  }, [])

  return (
    <div className="flex flex-wrap w-[85%] mx-auto">
      {isLoading ? <Loader /> : products.map(pro => <ProductCart products={pro} key={pro.id} />)}
    </div>
  )
}

export default Products
