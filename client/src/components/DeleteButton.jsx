import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const DeleteButton = ({id_producto, succesCallback}) => {
    const eliminarProducto = async (productoID) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/product/${productoID}`);
            //setProductos(productos.filter((producto) => producto._id !== productoID));
            succesCallback(productoID);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const confirmarEliminar = (productoID) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(productoID);
            }
        })
    }

    return (
        <button className='btn btn-danger ms-2' onClick={() => { confirmarEliminar(id_producto) }}>Eliminar</button>
    )
}

export default DeleteButton