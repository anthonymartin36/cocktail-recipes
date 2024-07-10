import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import {Link,  useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getACocktailApi } from '../apis/api-cocktails.ts'
import './Cocktail.css'

const imageUrl = import.meta.env.VITE_IMAGE_URL

function Cocktail() {
  const { cId } = useParams()

  const {
    data: cocktail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cocktail', cId],
    queryFn: () => getACocktailApi(Number(cId)),
  })

  if (isError) {
    return (
    <><Nav />
      <div className="loading" id="loading">
      <div className='content'>
        <h1 className="loading-heading">Something's broken!</h1>
      </div>
      </div>
      <Footer /></>
    )
  }

  if (!cocktail || isLoading) {
    return (
      <><Nav />
      <div className="loading" id="loading">
      <div className='content'>
        <h1 className="loading-heading">Just a Sec!!</h1>
        <p> This site may take 20 seconds to warm up! Please wait ... </p>
      </div>
      </div>
      <Footer /></>
    )
  }
    return (
      <>
        <Nav />
        <div className='cocktail' id='cocktail'>
        <div className='container' id='container'>
        <div className='content' key={cocktail.id}>
        <Link to='/'>Back to Cocktails</Link>
        <h2>Cocktail :   { cocktail.title } </h2> 
        <p>Description : { cocktail.description } </p>
        <p><img src={`${imageUrl}${cocktail.image}`} alt={cocktail.description}/> </p>
        <h4>Ingredients</h4>
        {cocktail.ingredients.map((ingredient: any, index: any) => (
        <p key={index}>{index + 1}: <Link to={`${ingredient.ingredient}`}>{ingredient.ingredient}</Link> Quantity: {ingredient.quantity}</p>
        ))}
        <h4>Directions</h4>
        {cocktail.directions.map((directions: any, index: any) => (
        <p key={index}>Step: {directions}</p>
        ))}
        </div>
        </div>
        </div>
        <Footer />
      </>
    )
}

export default Cocktail