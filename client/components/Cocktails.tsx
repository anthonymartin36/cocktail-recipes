import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { getAllCocktails } from '../apis/api-cocktails'
import { Cocktail } from '../../models/cocktails'

export default function Cocktails() {

  const {
    data: cocktails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cocktail'],
    queryFn: () => {
      return getAllCocktails()
    },
  })
  
  const [loadingTimePassed, setLoadingTimePassed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimePassed(true)
    }, 1000) // Set the loading time in milliseconds (e.g., 3000ms or 3 seconds)

    return () => clearTimeout(timer) // Cleanup the timer on component unmount
  }, [])

  if (isError) {
    return (
      <div className="loading">
        <h1 className="loading-heading">Something's broken! - Error</h1>
      </div>
    )
  }
  //const filteredFoundCats = cocktail.filter((cat) => cat.catMissing == false)

  if (!cocktails || !loadingTimePassed || isLoading) { //|| !loadingTimePassed 
    return (
      <div className="loading">
        <h1 className="loading-heading">Just a Sec!! - Loading</h1>
      </div>
    )
  }

  return (
    <header>
      <div className="cocktail-list">
        {cocktails.map((cocktail: Cocktail) => ( 
          <div key={cocktail.id} > <Link className="cocktail-list-name" to={`cocktails/${cocktail.id}`} >{cocktail.title}</Link> </div>
        ))}
      </div>
    </header>
  )
}
