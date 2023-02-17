import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme= "dark">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/productos">Productos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu