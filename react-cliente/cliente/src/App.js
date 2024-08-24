import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import {Cards} from "../src/componentes/Cards.jsx"
import Button from 'react-bootstrap/Button';

function App() {
  const [newData, setNewData] = useState({
    "name": "Antonio",
    "status": "muerto"
  })
  const [cardsData, setCardsData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/traer/informacion") //una vez guardada en la base de datos, borra/modificar /informacion
    .then(response => setCardsData(response.data.results)) //si /traer/informacion = response.data.results  si /traer = response.data
    .catch(error => console.error("Error", error))
  },[])
  
  const cargarInformacion = ()=>{
    axios.post("http://localhost:4000/insertar/informacion", cardsData)
    .then(res => {
      console.log("ejecutando base de datos")
    })
    .catch(error =>{
      console.log("error", error)
    })
  }

  const actualizarInformacion = async (id) => {     
    try {         
      const response = await axios.put(`http://localhost:4000/modificar/informacion/${id}`, newData);         
      console.log("carta actualizada", response.data);     
    } catch (error) {         
      console.log("error", error); } }
  console.log(cardsData)
  return (
    <>
    {cardsData && <Cards update = {actualizarInformacion} personajes = {cardsData}/>}
    <Button onClick={cargarInformacion} variant="primary">Subir a base de datos</Button>
    </>
  )

}

export default App
