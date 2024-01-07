import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Articulos from './components/Articulos/Articulos';
import Contador from './components/Contador/Contador';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Hola Profe!"/>
      {/*<Articulos className='imgEquipos' img ="./img/iphone11.jpg" titulo ="iPhone 11">
      <h2>Capacidad: 128GB</h2>
      <p> Cámara dual potente, pantalla Liquid Retina, chip A13 Bionic, Night mode, resistencia al agua, grabación 4K, durabilidad premium.</p>
      </Articulos>

      <Articulos className='imgEquipos' img ="./img/iphone11pro.jpg" titulo = "iPhone 11 Pro">
        <h2>Capacidad: 64GB</h2>
        <p> Triple cámara versátil, pantalla Super Retina XDR, potente chip A13 Bionic, Night mode avanzado, resistencia al agua, grabación 4K, durabilidad premium.</p>
      </Articulos>

      <Articulos className='imgEquipos' img ="./img/iphone13pro.jpg" titulo = "iPhone 13 Pro">
        <h2>Capacidad: 128GB</h2>
        <p>Triple cámara avanzada, pantalla ProMotion Super Retina XDR, chip A15 Bionic, Night mode mejorado, resistencia al agua, grabación 4K, durabilidad premium.</p>
  </Articulos>*/}

      <Contador stock={10} inicial={1}/>
    

    </div>
  )
}

export default App