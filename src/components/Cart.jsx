import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../utils/cartSlice'

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items)
  // console.log(cartItems)
  const dispatch=useDispatch()

  const removeItems=()=>{
    dispatch(removeItem())
  }

  const total=cartItems.reduce((initial,current)=>
  initial+(current.card.info.defaultPrice || current.card.info.price)
  ,0)
  if(cartItems.length === 0) return(
    <div>
        <h1 className=' text-center text-[1.2rem] '> <span  className=' text-center block  '>
                     <span>😕 Ooops!! </span> No items present.",
                    </span> please add an items in your cart</h1>
    </div>
  )
  return  (
    <div className="">
      <div className='w-1/3 border border-gray-500 shadow-2xl rounded-xl m-4'>
        {cartItems.map((item)=>{
          return <div className='m-4 flex justify-between '>
            <div>
          <h3 className='font-bold'>{item?.card?.info?.name}</h3>
          <h4>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</h4>
          </div>
          <div>
          <button className='bg-green-200 px-4 py-1 rounded-xl' onClick={()=>{
            removeItems();
          }}>remove</button></div>
          </div>
         
        })}
      </div>
      <div className='m-4 bg-green-200 border border-b w-1/3 shadow-2xl'>
        <h2 className='font-bold my-2 px-4'>To pay -₹{total/100} </h2>
      </div>
      
    </div>
  )
}

export default Cart