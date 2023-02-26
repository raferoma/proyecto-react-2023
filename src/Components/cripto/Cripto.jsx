import { Link } from "react-router-dom"
import { parseFloatNumber } from "../../helpers/numbers"
import "./Cripto.css"
const Cripto = ({name, priceUsd, symbol, changePercent24Hr, id}) => {
  return(
    <div className="cripto">
      <Link to={`/criptomonedas/${id}`}><h2>{name}</h2></Link>  
      <div className="info">
        <p><span className="label">Precio: </span>{parseFloatNumber(priceUsd, 2)}</p>
        <p><span className="label">Código: </span>{symbol}</p>
        <p>
          <span className="label">Variación 24hrs: </span>
          <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo" }>
            {parseFloatNumber(changePercent24Hr, 3)}%
          </span>
        </p>
      </div>
    </div>
  )
}
export default Cripto