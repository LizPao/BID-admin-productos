import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForms from '../../components/ProductForms'
import Swal from 'sweetalert2'

const ProductoEditar = () => {
    const navigate = useNavigate();

    /*const initialValues = {
        title: '',
        price: 0,
        description: ''
        
    }*/

    const { id } = useParams()
    const [producto, setProducto] = useState({}) //un obj vacio

    useEffect(() => {
        
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProducto(respuesta.data);
        }
        getData();

    }, [id])

    const actualizarProducto = async (values, actions) => {
        try {
        const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/product/${id}`, values);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Genial!!',
                    text: `${respuesta.data.title} se ha actualizado correctamente`
                });

                navigate('/productos')
                
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <h1 className='editar-producto'>Editar Producto</h1>
            <hr />
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <ProductForms 
                        initialValues = {producto}
                        botonTexto= "Actualizar"
                        onSubmit= { actualizarProducto }
                    />
                </div>
            </div>
            

        </>
    )
}

export default ProductoEditar