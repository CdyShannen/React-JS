import {useState, useEffect } from "react";
import {getUnProducto} from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";



import React from 'react'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState (null);

    useEffect (() => {
        getUnProducto(2)
        .then (res => setProducto(res))
    }, [])
    
    return (
    <div>
      <Item Detail {...producto}/>
      </div>
  )
}

export default ItemDetailContainer

