import Search from "../components/Search"
import React, { useState, useEffect } from 'react'
import RandomCoctails from '../components/RandomCoctails'

function Home() {


    return (
        <>
            <Search />
            <div>
                <RandomCoctails />
            </div>
        </>
    )
}

export default Home