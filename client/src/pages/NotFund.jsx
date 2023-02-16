import React from 'react'
import { useRouteError } from 'react-router-dom'
const NotFund = () => {
    const errors = useRouteError();
    return (
        <div className='container mt-5'>
            <h1>Pagina No Encontrada</h1>
            <hr />
            <div className='alert alert-darger'>{errors.statusText || errors.message}</div>
        </div>
    )
}

export default NotFund