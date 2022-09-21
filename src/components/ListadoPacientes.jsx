
import Pacientes from "./Pacientes"


const  ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

      {pacientes && pacientes.length ? (// Consulta si hay pacientes y si es así devuelve lo que sigue
        <>
      
              <h2 className="font-black text-3xl text-center"> ListadoPacientes</h2>

              <p className= "text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold ">
                  pacientes y citas
                </span>
              </p>


              { pacientes.map( (paciente) => (// Aquí se agrega paciente que es la variable temporal que almacena los datos del formulario
                  
                  <Pacientes
                    key= {paciente.id}
                    paciente={paciente} // Le pasamos por props los datos
                    setPaciente= {setPaciente}
                    eliminarPaciente = {eliminarPaciente}
                    />
                

                    ))}
        </>
      
      ): (// Si no hay pacientes devuelve esto
        <>
              <h2 className="font-black text-3xl text-center"> No hay pacientes</h2>

              <p className= "text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes {""}
                <span className="text-indigo-600 font-bold ">
                  y comenzarán a aparecer en este lugar
                </span>
              </p>
         </>
      
      )}

      
    </div>
  )
}

export default ListadoPacientes