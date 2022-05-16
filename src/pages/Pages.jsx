import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coctail from '../components/Coctail'
import About from './About'
import Home from './Home'


function Pages() {
  return (
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/coctail/:name" element = {<Coctail/>}/>
    </Routes>
  )
}

export default Pages