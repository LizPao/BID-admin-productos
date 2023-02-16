import React from 'react'
import { Link } from 'react-router-dom'

const Productos = () => {
    return (
        <>
            <Link to="/productos/agregar" className='btn btn-primary'>Agregar Producto</Link>
        </>
    )
}

export default Productos