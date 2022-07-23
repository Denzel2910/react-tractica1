function Contacto ({nombre, apellido, email,estado}) {
  return (
    <div className='contenedor-contacto'>
      <h2>Contacto</h2>
        <div className='contacto'>
          <p className='nombre-app'>Nombre: {nombre}</p>
          <p className='apellidp-app'>Apellidos: {apellido}</p>
          <p className='correo-app'>Email: {email}</p>
          <p className='estado-conexion'>Estado: {estado}</p>
        </div>
  rcc

      
    </div>
  )
}

export default Contacto;