import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container,} from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect,useState } from 'react';

function App() {
  const [personaje,setPersonaje]= useState({})
  //componente condicional
const [mostrarSpinner, SetMostrarSpinner]= useState(true)

useEffect(()=>{
consultarAPI();
},[])

const consultarAPI = async()=>{
  //poner en true el spinner
  SetMostrarSpinner(true)
  //peticiones get con react
  const repuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  const datos = await repuesta.json();
  setPersonaje(datos[0])
  SetMostrarSpinner(false);
}

const mostrarComponente = mostrarSpinner ? ( <div> <span className="loader"></span> </div>):(<Frase personaje = {personaje}/>)

  return (
    <>
  <Container className="text-center my-5">
        <img src={logo} alt='logo simpson' className='w-50'/>
       {mostrarComponente}
       
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  )
}

export default App
