import React from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

const initialValues = {
    title: '',
    price: 0,
    description: ''
    
}
const ProductErrores = Yup.object().shape({
    title: Yup.string()
        .min(3, 'El titulo debe tener como minimo 3 caracteres')
        .max(40, 'No puede ser muy largo el titulo')
        .required('Requerido'),
    price: Yup.number()
        .integer('Debe ser un numero entero')
        .required('Requerido')
        .positive('No puede ser negativo'),
    description: Yup.string()
        .min(5, 'El apellido debe tener como minimo 5 caracteres')
        .max(40, 'No puede ser muy larga la descripcion ')
        .required('Requerido')
    
});
const ProductForms = () => {
    const handleSubmit = async (values, actions) => {
        try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/product`, values);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    tittle: 'Genial!!',
                    text: `${respuesta.data.title} se ha agregado correctamente`
                });
                actions.resetForm(initialValues);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                tittle: 'Ops!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ProductErrores}

        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field name="title" className="form-control" placeholder="Add title" />
                    {touched.title && errors.title && <div className='ms-3 mt-1 text-danger'>{errors.title}</div>}

                    <Field name="price" type="number" className="form-control mt-2" placeholder="Add Price" />
                    {touched.price && errors.price && <div className='ms-3 mt-1 text-danger'>{errors.price}</div>}
                    
                    <Field name="description" className="form-control mt-2" placeholder="Add Description" />
                    {touched.description && errors.description && <div className='ms-3 mt-1 text-danger'>{errors.description}</div>}
                    
                    <button className='btn btn-primary mt-5' disabled={!(isValid && dirty)} >Crear Producto</button>
                </Form>
            )}
        </Formik>
    )
}

export default ProductForms