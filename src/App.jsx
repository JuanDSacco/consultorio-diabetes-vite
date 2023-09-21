import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ActividadFisica from './Routes/ActividadFisica/ActividadFisica'
import Alimentacion from './Routes/Alimentacion/Alimentacion'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import PrevCardio from './Routes/PrevCardio/PrevCardio'
import PrevOftalmo from './Routes/PrevOftalmo/PrevOftalmo'
import PieDiabetico from './Routes/PieDaibetico/PieDiabetico'
import Tratamientos from './Routes/Tratamientos/Tratamientos'
import Actividades from './Routes/Actividades/Actividades'
import QuienesSomos from './Routes/QuienesSomos/QuienesSomos'
import Contacto from './Routes/Contacto/Contacto'
import Index from './Routes/Index/Index'
import Footer from './Footer/Footer'
import QueEsLaDiabetes from './Routes/QueEsLaDiabetes/QueEsLaDiabetes'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/que-es-la-diabetes' element={<QueEsLaDiabetes/>}/>
          <Route path='/actividades' element={<Actividades/>}/>
          <Route path='/quienes-somos' element={<QuienesSomos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/alimentacion' element={<Alimentacion/>}/>
          <Route path='/actividad-fisica' element={<ActividadFisica/>}/>
          <Route path='/prevencion-cardiovascular' element={<PrevCardio/>}/>
          <Route path='/prevencion-oftalmologica' element={<PrevOftalmo/>}/>
          <Route path='/pie-diabetico' element={<PieDiabetico/>}/>
          <Route path='/tratamientos' element={<Tratamientos/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
