import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { productsAction, productsActionDetail } from '../redux/actions/products';

const Detail = () => {
  const{id} = useParams();
  const dispatch = useDispatch();
  const{product}= useSelector(state => state.product);

useEffect(()=>{
dispatch(productsActionDetail(id))

},[dispatch])

  console.log("product",product)
  return (
    <div>
      detail
    </div>
  )
}

export default Detail
