import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
import { Navigate } from "react-router-dom"

const App = () =>{

  if (!localStorage.getItem("token")) return <Navigate to="/login" />

  return(
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}
export default App