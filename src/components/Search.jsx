import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

function Search({}) {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  
  return (
      <div className="input-cont">
        <h2>Find your cocktail!</h2>
          <input type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}/>
      </div>
  )
}

export default Search