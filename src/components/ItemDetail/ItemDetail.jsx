import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2> Nombre: {nombre} </h2>
        <h3> Precio: {precio} </h3>
        <p> ID: {id} </p>
        <p> Cámara dual potente, pantalla Liquid Retina, chip A13 Bionic, Night mode, resistencia al agua, grabación 4K, durabilidad premium. </p>
        <img src={img} alt={nombre}/>
    </div>
  )
}

export default ItemDetail