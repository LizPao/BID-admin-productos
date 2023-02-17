import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


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
        .min(5, 'La descripcion debe tener como minimo 5 caracteres')
        .max(40, 'No puede ser muy larga')
        .required('Requerido')
    
});
const ProductForms = ({ initialValues, botonTexto, onSubmit }) => {
    return (
        <Formik
            enableReinitialize = {true} //PARA ACTUALIZAR
            initialValues={initialValues}
            onSubmit={onSubmit}
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
                    
                    <button className='btn btn-primary mt-5' disabled={!(isValid && dirty)} >{botonTexto} Producto</button>
                </Form>
            )}
        </Formik>
    )
}

export default ProductForms