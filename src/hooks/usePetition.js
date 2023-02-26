import { useEffect, useState } from "react"
import axios from "axios"

const usePetition = (endPoint) =>{
  
  const [data, setData] = useState()
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setCargando(true)
    axios.get(`https://api.coincap.io/v2/${endPoint}`)
      .then((data) => {
        setData(data.data.data)
        setCargando(false)
      })
      .catch(e => {
        setCargando(false)
        setError(e)
        console.error(e)
      })
  },[])
  return [data, cargando, error]
}
export default usePetition