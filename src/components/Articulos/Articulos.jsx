import React from 'react'

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h2> {titulo} </h2>
        <button>Comprar</button>
        {children}
    </article>
  )
}

export default Articulos