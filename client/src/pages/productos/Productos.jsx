import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from '../../components/DeleteButton';

const Productos = () => {
    const [productos, setProductos] = useState([]);//un arreglo vacio
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
            setProductos(respuesta.data);
        }
        getData();

    }, [])

    const quitarProducto = (productoID) => {
        setProductos(productos.filter((producto) => producto._id !== productoID));
    }

    return (
        <>
            <h1 className='listado-productos'>Listado de Productos</h1>
            <table className='table table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => <tr key={index}>
                        <td>{producto.title}</td>
                        <td>{producto.price}</td>
                        <td>{producto.description}</td>
                        <td>
                            <Link className='btn btn-primary' to={`/productos/${producto._id}`}>Detalle</Link>
                            <Link className='btn btn-success ms-2' to={`/productos/${producto._id}/editar`}>Editar</Link>
                            <DeleteButton id_producto={producto._id} succesCallback={quitarProducto} />
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <Link to="/productos/agregar" className='btn btn-primary'>Agregar Producto</Link>
        </>
    )
}

export default Productos