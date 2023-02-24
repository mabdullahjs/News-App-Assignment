import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ShowNews from '../pages/showNews'
import Navbars from '../pages/components/Navbar'

function Router() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<ShowNews/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router