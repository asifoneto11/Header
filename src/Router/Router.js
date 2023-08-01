import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts';
import Service from '../pages/Service';
import Shop from '../pages/shop';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/service' element={<Service />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default Router