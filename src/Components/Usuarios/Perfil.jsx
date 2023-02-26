import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Perfil = () => {

  const usuario = useContext(UserContext)

  

  return(
    <div>
      <h1>{usuario.name}</h1>
      <div>
        {usuario.registered}
      </div>
    </div>
  )
}
export default Perfil