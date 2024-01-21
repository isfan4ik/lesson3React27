import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './layout/Header'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'


export default function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
       </Routes>
      </BrowserRouter>
      </Fragment>
    </div>
  )
}
