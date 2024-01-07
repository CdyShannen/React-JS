import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Articulos from './components/Articulos/Articulos';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Hola Profe!"/>
      <Articulos>
        <img src={process.env.PUBLIC_URL + '/images/iphone11.jpeg'} alt="iPhone 11" />
      </Articulos>

      <br/> 

      <Articulos img ="https://www.lavanguardia.com/files/image_449_465/uploads/2019/09/25/5fa5346010648.png" titulo = "iPhone 11">

      </Articulos>

    </div>
  )
}

export default App