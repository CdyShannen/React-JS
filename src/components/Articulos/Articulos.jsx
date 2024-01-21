import './Articulos.css';

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

//ESTO ES UN EJEMPLO DE OTRA CLASE, CHILDREN ESPECIFICAMENTE, DE SER NECESARIO LO PODEMOS SACAR