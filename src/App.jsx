import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container,} from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect,useState } from 'react';

function App() {
  const [personaje,setPersonaje]= useState({})
useEffect(()=>{
consultarAPI();
},[])

const consultarAPI = async()=>{
  //peticiones get con react
  const repuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  const datos = await repuesta.json();
  setPersonaje(datos[0])
}

  return (
    <>
  <Container className="text-center my-5">
        <img src={logo} alt='logo simpson' className='w-50'/>
        <Frase personaje={personaje}></Frase>
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  )
}

export default App
