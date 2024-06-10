import React from 'react'
import CreateProduct from './components/CreateProduct'
import GetAllProduct from './components/GetAllProduct'
import GetProductById from './components/getProductById'
import RemoveProductById from './components/RemoveProductById'
import UpdateProductById from './components/UpdateProductById'

export default function App() {
  return (
    <div>
      <GetAllProduct></GetAllProduct>
      <GetProductById></GetProductById>
      <RemoveProductById></RemoveProductById>
      <CreateProduct></CreateProduct>
      <UpdateProductById></UpdateProductById>
      
    </div>
  )
}
