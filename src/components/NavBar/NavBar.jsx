import CartWiget from '../CartWidget/CartWiget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>AuraByte</h1>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWiget/>

    </header>
  )
}

export default NavBar