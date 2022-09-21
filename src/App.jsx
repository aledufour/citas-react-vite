
import {useState} from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formularios from "./components/Formularios"
import Header from "./components/Header"
import { useEffect } from "react"



function App() {
 
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente]= useState({})

  useEffect(()=>{
    const obtenerLS= ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // Transforma el string en array JSON.parse
      setPacientes(pacientesLS)

    }
    obtenerLS()
  }, [])

  //Para guardar los datos en local storage pero antes lo transforma a string
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  }, [pacientes])

  //Funcion para eliminar un paciente comparando por id
  const eliminarPaciente = (id)=>{
      const pacientesActualizados = pacientes.filter(paciente=>paciente.id !== id);
      setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
     <Header/>

    <div className="mt-12 md:flex">
        <Formularios

        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente= {paciente}
        setPaciente= {setPaciente}
        
        />

        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente= {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
    </div>

    </div>
  )
}

export default App
