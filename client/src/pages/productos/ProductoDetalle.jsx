import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ProductoDetalle = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({}) //un obj vacio

    useEffect(() => {
        
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProducto(respuesta.data);
        }
        getData();

    }, [id])

    const eliminarProductoDetalle = async (productoID) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/product/${productoID}`);
    }

    return (
        <div className="card" style={{width: "38rem"}}>
            <div className="card-header">
                Detalle del Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Titulo: {producto.title}</h5>
                <p className="card-text">Precio: {producto.price}</p>
                <p className="card-text">Descripcion: {producto.description}</p>
                <Link to="/productos" className="btn btn-primary">Volver</Link>
                <Link to="/productos" className="btn btn-danger ms-2" onClick={() => { eliminarProductoDetalle(producto._id) }}>Eliminar</Link>
            </div>
        </div>
    )
}

export default ProductoDetalle