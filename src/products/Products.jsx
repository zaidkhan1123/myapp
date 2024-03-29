
import React from 'react'
import ProductCarousel from './Column-1/Carousel'
import ProductDes from './Column-1/Product-Des'
import ProductPrice from './Column-2/Product-Price'
import SellerDesc from './Column-2/Seller-Desc'
import ProductLocation from './Column-2/ProductLocation'
import "./Product.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Products() {

const {id} = useParams();
  const[apiData,setApidata]=useState([]);

useEffect(()=>{

axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
setApidata(res.data)
}).catch((err)=>{
console.log(err);
})


},[]);


    
  return (
    <>
      <div className="product-wrapper my-5 container px-5">
        <div className="product row w-100">
          <div className="col-lg-7">
            <ProductCarousel image={apiData.image} />
            <ProductDes description={apiData.description} price={apiData.price}  />
          </div>
          <div className="col-lg-5">
            <ProductPrice price={apiData.price} title={apiData.title} />
            <SellerDesc />
            <ProductLocation />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
