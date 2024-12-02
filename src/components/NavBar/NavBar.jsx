import CartWidget  from './CartWidget'
import './navbar.scss'
import myImage from '/src/assets/logo.jpg';
const NavBar = () => {
  const categories = ["Remeras", "Pantalones", "Buzos", "Musculosas"]
  return (
  <nav className='navbar'>

    <div className='brand'>
      <img src={myImage} alt="logo Boutique"/>
    </div>
    <ul className="categories">
        {
          categories.map( (category) => {
            return <li>{category}</li>
          })
        }
      </ul>

    <CartWidget></CartWidget>
    
  </nav>
)  
}

export default NavBar
