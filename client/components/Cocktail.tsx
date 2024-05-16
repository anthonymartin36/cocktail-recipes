import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
//import { useState, useEffect } from 'react'
import { getACocktail } from '../apis/api-cocktails'
import { Key } from 'react'
import { Ingredient } from '../../models/cocktails'

export default function Cocktail() {
  const { cId } = useParams()  
  const {
        data: cocktail,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['cocktail'],
        queryFn: () => {
          return getACocktail(Number(cId))
        },
      })
      if (isError) {
        return (
          <div className="Error">
            <h1 className="loading-heading">Something's broken!</h1>
          </div>
        )
      }
      if (!cocktail || isLoading) { //|| !loadingTimePassed 
        return (
          <div className="Loading">
            <h1 className="loading-heading">Just a Sec!!</h1>
          </div>
        )
      }
    return (
    <header>
     <div className="Working">
            <h1 key={cocktail.id} className="cocktail-heading">{cocktail.title}</h1>
            <div className="cocktail-details"> {cocktail.description}</div>
            <br />
            {/* <div className="cocktail-details"> {cocktail.ingredients}</div> */}
            {cocktail && cocktail.ingredients && cocktail.ingredients.map((ingredientObj: Ingredient, index: Key) => ( 
            <div key={index} > {ingredientObj.quantity} - {ingredientObj.ingredient}</div>
            ))}
            <div className="cocktail-details">
            <br />
             {cocktail && cocktail.directions && cocktail.directions.map((directionArr: String, index: Key) => (
              <div key={index} > {directionArr}</div>
            ))}
            </div>
          </div>
    </header>
    )
}
