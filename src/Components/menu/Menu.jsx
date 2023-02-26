import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import "./Menu.css"


const Menu = () =>{
  
  const usuario = useContext(UserContext)
  const navigation = useNavigate()
  
  return(
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/criptomonedas">Lista de criptomonedas</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Perfil de {usuario.name}</NavLink>
        </li>
        <li>
          <a onClick={() => {
            localStorage.removeItem("token")
            navigation("/login")
          }}>Cerrar sesion</a>
        </li>
      </ul>
    </nav>
  )
}
export default Menu