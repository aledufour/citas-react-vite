import {useState, useEffect} from "react"
import Error from './Error'

const  Formularios = ({pacientes, setPacientes, paciente, setPaciente}) => { // Esta tomando del prop desde App.jsx haciendo destructuring

  const [nombre, setNombre] = useState ('');
  const [propietario, setPropietario] = useState ('');
  const [email, setEmail] = useState ('');
  const [fecha, setFecha] = useState ('');
  const [sintomas, setSintomas] = useState ('');

  const [error, setError]= useState(false);

  useEffect ( ()=>{
      if (Object.keys(paciente).length >0){
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setSintomas(paciente.sintomas)
      }
  }, [paciente])

  

  const generarId = ()=>{//Funcion que genera el id de cada arreglo
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);

      return fecha + random;

  }


  const handleSubmit = (e)=>{
    e.preventDefault();
  

  //Validacion del Formulario

  if ([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;

    } setError(false)

    //Creamos un OBJETO de pacientes para poder leer todos sus datos en un array
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
      }

      //Detecta un nuevo registro 
      if (paciente.id){
        //Editando el registro
        objetoPaciente.id = paciente.id
        // Crea una nueva variable con los datos del State
        const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id===
          paciente.id ? objetoPaciente : pacienteState)

          setPacientes(pacientesActualizados);
          setPaciente({})//Aquí limpia el objeto
        
      }else{
         //Nuevo registro
        objetoPaciente.id= generarId();
        setPacientes([...pacientes, objetoPaciente]); // llama al modificador con un destructuring (metodo inmutable) de pacientes y un nuevo objeto llamado objetoPaciente para tener los datos en cola
      }
         

      // Reiniciando el formulario

      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }

  return (
    <div className= "md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
        <p className="text-xl mt-5 text-center mb-10">
          Añade Pacientes {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
          onSubmit={handleSubmit}
          className= "bg-white shadow-md rounded-md py-10 px-5"
        >

{/*Aquí valida si hay campos vacíos y escribe un msj en el formulario, desde un componente de errores*/}

          {error && <Error>
            <h1>¡ATENCION!</h1>
            <p>Debe llenar todos los campos</p>
          </Error> }     
              

          <div className="mb-5">
            <label htmlFor= "mascota" className="block text-gray-700 uppercase font-bold">
               Nombre de la Mascota 
            </label>
            <input
            id= "mascota"
            type= "text"
            placeholder="Coloque aqui el nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {nombre}
            onChange = {(e) => setNombre(e.target.value)}
            //onChange es como listener (escucha el evento)
            //Mediante un arrow function llama a setNombre 
            //Target es el objeto donde estamos trabajando y value el valor que se escribe
            
            />
          </div>


          <div className="mb-5">
            <label htmlFor= "propietario" className="block text-gray-700 uppercase font-bold">
               Nombre Propietario
            </label>
            <input
            id= "propietario"
            type= "text"
            placeholder="Coloque aqui su nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {propietario}
            onChange = {(e) => setPropietario(e.target.value)}
            
            />
          </div>


          <div className="mb-5">
            <label htmlFor= "email" className="block text-gray-700 uppercase font-bold">
               Email
            </label>
            <input
            id= "email"
            type= "text"
            placeholder="Coloque aqui su email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {email}
            onChange = {(e) => setEmail(e.target.value)}
            
            />
          </div>


          <div className="mb-5">
            <label htmlFor= "alta" className="block text-gray-700 uppercase font-bold">
               Alta
            </label>
            <input
            id= "alta"
            type= "date"
            placeholder="Seleccione fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {fecha}
            onChange = {(e) => setFecha(e.target.value)}
            
            />
          </div>

          <div className="mb-5">
            <label htmlFor= "sintomas" className="block text-gray-700 uppercase font-bold">
               Sintomas
            </label>

           <textarea

              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describa los sintomas"
              value= {sintomas}
              onChange = {(e) => setSintomas(e.target.value)}
           />
          </div>

          <input
              type= "submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800"
              value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />

        </form>

    </div>
  )
}

export default Formularios