import React from 'react'


const Home = React.lazy(() => import('./views/setting/broker/Broker'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/setting', name: 'Setting', component: Home, exact: true },
  { path: '/setting/broker', name: 'Home', component: Home },
]

export default routes
