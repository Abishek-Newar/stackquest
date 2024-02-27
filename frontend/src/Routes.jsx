import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Homes from './pages/Home/Homes';
import Auth from './pages/Auth/Auth';
const AllRoutes = () => {
  return (
    <Routes>
        <Route   path='/' element={<Homes />} />
        <Route  path='/Auth' element={<Auth />} />
    </Routes>
  )
}

export default AllRoutes;