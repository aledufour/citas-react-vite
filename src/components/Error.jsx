
const Error = ({children}) => {// llama a una propiedad prop hijo
  return (
    <div className="bg-red-700 text-white font-bold text-center">
        <p>
        {children}
        </p>

    </div>
  )
}

export default Error

