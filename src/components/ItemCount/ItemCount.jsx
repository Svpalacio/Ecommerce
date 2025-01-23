import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1)

  const handleClickRemove = () => {
    if( count > 1 ){
      setCount( count - 1 )
    }
  }

  const handleClickAdd = () => {
    if( count < stock ){
      setCount( count + 1 )
    }
  }

  return (
    <div className="contador-container">
      <button onClick={handleClickRemove} >-</button>
      <p>{count}</p>
      <button onClick={handleClickAdd} >+</button>
      <button className="agregar" onClick={ () => addProductInCart(count) } >Agregar Producto</button>
    </div>
  )
}
export default ItemCount