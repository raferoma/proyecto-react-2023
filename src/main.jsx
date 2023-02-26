import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import "./main.css"
import Pagina404 from './Components/404'
import App from './Components/App'
import Home from './Home'
import Cuadricula from './Components/Cuadricula'
import CriptoPage from './Components/cripto/CriptoPage'

import Perfil from './Components/Usuarios/Perfil'
import Login from './Components/Usuarios/Login'

import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='perfil' element={<Perfil />}/>
        </Route>
        <Route path='/criptomonedas' element={<App />}>
          <Route index element={<Cuadricula />}/>
          <Route path=':id' element={<CriptoPage/>} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Pagina404 />}/>
      </Routes>
    </BrowserRouter>
  </UserContextProvider>

  
)
