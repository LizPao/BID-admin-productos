
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home"
import NotFund from "../pages/NotFund";
import Productos from "../pages/productos/Productos";
import ProductosAdd from "../pages/productos/ProductosAdd";

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFund />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'productos',
                element: <Productos />
            },
            {
                path:'productos/agregar',
                element: <ProductosAdd />
            },

        ]
    }
]);