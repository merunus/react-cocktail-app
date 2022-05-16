import React, { useEffect, useState } from 'react'
import CoctailCard from "./CoctailCard"
import Search from './Search'
import { useGlobalContext } from '../context'
import Loading from './Loading'


function RandomCoctails() {
    const {cocktails, loading} = useGlobalContext()
    if(loading) {
        return <Loading/>
    }
    if(cocktails.length < 1 ){
        return (
        <h2 className='loading-cont'>
            No coctails matched 
        </h2>)
    }
    return (
        <div>
            <div className='container'>
                {cocktails.map((cocktail) => {
                    return <CoctailCard key={cocktail.id} {...cocktail} />
                })}
            </div>
        </div>

    )
}

export default RandomCoctails