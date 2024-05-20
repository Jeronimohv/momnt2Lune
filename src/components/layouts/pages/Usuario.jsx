import React from 'react'
import Lateral from '../../helpers/Lateral'
import './Usuario.css'

const Usuario = () => {
  return (
    <div><Lateral/>
    <img className='luar' src="https://yt3.googleusercontent.com/b9HPIfZ0ecx_joPGh9VbeAn3B_m-hO8vVphIN3jS972IGm8y8TXs_m_0FJGAdycjJGe1leEOEg=s900-c-k-c0x00ffffff-no-rj" alt="" />
    <div className='Contenido'>
        <p>Empresa: Cesde</p>
        <p>Contratacion: 10/02/2019</p>
        <p>Salario: 20.000.000 </p>
        <p>Nombre: Jaime Zapata Valencia</p>
        <p>Correo: correo@correo.com</p>
    </div>
    
    
    </div>
  )
}
export default Usuario