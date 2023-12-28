import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Hola Profe!"/>
    </div>
  )
}

export default App