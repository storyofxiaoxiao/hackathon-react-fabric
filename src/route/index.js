import { lazy } from 'react';

const routeConfigs = [
  {
    name: 'homePage',
    path: '/',
    exact: true,
    Component: lazy(() => import('../pages/homePage')),
  },
  {
    name: 'products',
    path: '/products',
    exact: true,
    Component: lazy(() => import('../pages/products')),
  },
  {
    name: 'book',
    path: '/book',
    exact: true,
    Component: lazy(() => import('../pages/book')),
  }
]
export default routeConfigs;