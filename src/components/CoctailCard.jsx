import React from 'react'
import { Link } from 'react-router-dom';

function CoctailCard({image, name, id, info, glass }) {
  return (
    <div className='coctail-card'>
      <img src = {image + "/preview"}></img>
      <div className="info">
        <h1>{name}</h1>
        <h2>{glass}</h2>
        <h3>{info}</h3>
        <Link to = {"/coctail/" + id}>
        <button >Details</button>
        </Link>
      </div>
    </div>
  )
}

export default CoctailCard