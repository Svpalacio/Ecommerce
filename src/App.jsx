import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.scss'

function App() {

  return (
    <div className="container-app" >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a mi ecommerce!"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos a mi ecommerce!"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App