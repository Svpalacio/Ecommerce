import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import myImage from '/src/assets/logo.jpg';
import "./navbar.scss"

const NavBar = () => {


  return (
    <nav className="navbar">

      <ul className="categories">
        <Link to="/category/remeras" className="category">Remeras</Link>
        <Link to="/category/pantalones" className="category">Pantalones</Link>
        <Link to="/category/zapatillas" className="category">Zapatillas</Link>
      </ul>
      
      <Link to="/" className="brand">
      <img src={myImage} alt="logo Boutique"/>
         <p className="title-brand">Ecommerce</p>
      </Link>
   
      <CartWidget />
    </nav>
  )
}
export default NavBar