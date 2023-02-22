import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  //const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()



  useEffect(() => {
    //fetch(`${API_URL}assets`)
    axios.get("https://api.coincap.io/v2/assets")
      .then((data) => {
        setCriptos(data.data.data)
        console.log(data);
      })
      .catch(() => {
        console.error("La peticion fallo")
      })
  },[])

  if (!criptos) return <span>Cargando...</span>
  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { 
          criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          )) 
        }
      </ol>
    </>
  )
}

export default App
