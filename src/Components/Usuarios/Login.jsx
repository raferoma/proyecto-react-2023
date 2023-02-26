import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

  const navigation = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState()

  const submit = (e) => {
    setCargando(true)
    setError(null)
    e.preventDefault()
    axios.post(`https://reqres.in/api/login`, user)
    .then(data => {
        setCargando(false)
        localStorage.setItem("token", data.data.token)
        navigation("/")
      }
    )
    .catch(
      e => {
        setCargando(false)
        console.error(e)
        setError(e.response.data.error)
      }
    )
  }

  if (localStorage.getItem("token")) return <Navigate to="/" />

  return(
    <>
      <div className="login-container">
        <h1>Iniciar sesion</h1>

        <form onSubmit={submit}>
          <div className="field">
            <input
              className="input"
              required
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value
                })
              }} 
              type="email" 
              name="email" 
              placeholder="Correo electronico"
              />
          </div>
          <div className="field">
            <input 
              className="input"
              required
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value
                })
              }} 
              type="password" 
              name="password" 
              placeholder="Contrasena"
            />
          </div>
          <div className="submit">
            <input 
              className="btn" 
              type="submit" 
              value={cargando ? "carganod..." : "Ingresar"} />
          </div>
        </form>
        {
          error && <span className="error">Error: {error}</span>
        }
        
      </div>
    </>
  )
}
export default Login