import {useParams} from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import Criptoinfo from "../info/Criptoinfo"
import CriptoHistorial from "../info/CriptoHistorial"

const CriptoPage = () => {

  const params = useParams()
  const [cripto, cargandoCripto, errorCripto] = usePetition(`assets/${params.id}`)
  const [history, cargandoHistoty, errorHistory] = usePetition(`assets/${params.id}/history?interval=d1`)


  if (cargandoCripto || cargandoHistoty) return <span>Cargando...</span>

  return(
    <>
      <div className="cripto-page-container">
        {cripto && <Criptoinfo cripto={cripto} />}
        {history && <CriptoHistorial history={history} />}
      </div>
    </>
  )
}
export default CriptoPage