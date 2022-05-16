import { ArrowBack } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'

function Coctail() {
    let params = useParams()
    const [coctail, setCoctail] = useState([])
    const [loading, setLoading] = useState(false)
    const [hidden, setHidden] = useState(true)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.name}`
    const fetchCoctail = async () => {
        try {
            const response = await fetch(`${url}`)
            const data = await response.json()
            setCoctail(data.drinks[0])
            setLoading(true)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchCoctail()
    }, [])


    return (
        <div className='coctail-single-container'>
            <img src={coctail.strDrinkThumb + "/preview"}></img>
            <div className={!hidden ? "details-cont hidden" : "details-cont "}>
                <h2><span>Name : </span> {coctail.strDrink}</h2>
                <h2><span>Category : </span>{coctail.strCategory}</h2>
                <h2><span>Type of glass :</span> {coctail.strGlass}</h2>
                <h2><span>Info :</span>{coctail.strAlcoholic}</h2>
                <button onClick={() => setHidden((prevValue) => {
                    return !prevValue
                })}>Show ingredients</button>
                <div className="back-link">
                    <Link to={"/"}>
                        <ArrowBack />
                        Back to coctails
                    </Link>
                </div>
            </div>

            <div className={hidden ? "ingredients hidden" : "ingredients"}>
                <ul>
                    <li>{coctail.strIngredient1 ? coctail.strIngredient1 : "Something"}</li>
                    <li>{coctail.strIngredient2 ? coctail.strIngredient2 : "Something"}</li>
                    <li>{coctail.strIngredient3 ? coctail.strIngredient3 : "Something"}</li>
                    <li>{coctail.strIngredient4 ? coctail.strIngredient4 : "Something"}</li>
                </ul>
                <button onClick={() => setHidden((prevValue) => {
                    return !prevValue
                })}>{!hidden ? "Show info" : "Show ingredients"}</button>
                <div className="back-link">
                    <Link to={"/"}>
                        <ArrowBack />
                        Back to coctails
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Coctail