import React,{useState} from 'react'
import {LocalBar, } from "@mui/icons-material"
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <header>
        <div className="title">
            <h1>Coctailand</h1>
            <LocalBar/>
        </div>
        <div className="links">
            <NavLink style = {{
                color: "#000"
                }} to = {"/"}>Home</NavLink>
        </div>
    </header>
  )
}

export default Header