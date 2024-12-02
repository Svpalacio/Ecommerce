import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.scss'
function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a mi ecommerce!!!"} />
    </div>
  )
}

export default App
