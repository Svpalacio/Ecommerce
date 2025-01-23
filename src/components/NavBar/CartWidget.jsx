import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  let quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
      <FaCartArrowDown className="icon-cartwidget" />
      <p className="number-cartwidget"> { quantity !== 0 && quantity } </p>
    </Link>
  )
}
export default CartWidget