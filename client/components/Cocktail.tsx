import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
//import { useState, useEffect } from 'react'
import { getACocktail } from '../apis/api-cocktails'


export default function Cocktail(cId: number) {
    const {
        data: cocktail,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['cocktail'],
        queryFn: () => {
          return getACocktail(cId)
        },
      })
      if (isError) {
        return (
          <div className="loading">
            <h1 className="loading-heading">Something's broken!</h1>
          </div>
        )
      }
      //const filteredFoundCats = cocktail.filter((cat) => cat.catMissing == false)


      if (!cocktail || isLoading) { //|| !loadingTimePassed 
        return (
          <div className="loading">
            <h1 className="loading-heading">Just a Sec!!</h1>
          </div>
        )
      }
    return (
    <header>
     <div className="loading">
            <h1 className="loading-heading">{cocktail.name}</h1>
          </div>
    </header>
    )
}
