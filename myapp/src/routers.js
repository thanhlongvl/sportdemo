import React from 'react';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/NotFoundPage';
import ProductsListPage from './pages/ProductListPage';
import OrderListPage from './pages/OrderListPage';
import OrderDetailPage from './pages/OrderDetailPage';

const routes = [
    {
        path : '/',
        exact : true,
        main: () => <HomePage />
    },
    {
        path : '/products',
        exact : false,
        main: () => <ProductsListPage />
    },
    {
        path : '/orders',
        exact : false,
        main: () => <OrderListPage />
    },
    {
        path : "/orderitem/:order_id",
        exact : false,
        main: ({match}) => <OrderDetailPage match={match}/>
    },
    {
        path : '',
        exact : false,
        main: () => <PageNotFound />
    }
]

export default routes;