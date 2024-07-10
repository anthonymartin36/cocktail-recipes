import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import { Link,  useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAIngredient } from '../apis/api-cocktails.ts'
import './Cocktail.css'
const imageUrl = import.meta.env.VITE_IMAGE_URL


function Ingredient() {
  const { ingredient } = useParams()

  const {
    data: cocktail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cocktail', ingredient],
    queryFn: () => getAIngredient(String(ingredient)),
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
      <div className='content' >
      <Link to='/cocktail'>Back to Cocktails</Link>
      <h2>Cocktails containing :  { ingredient } </h2> 

      {cocktail.map((index: any) => (
      <div className='cocktails' id='cocktails' key={`${index.id}`} >
      <p > 
       <Link className="cocktail-list-name" to={`/cocktails/${index.id}`} >
        <img src={`${imageUrl}${index.image}`} alt={index.description}/>
       <strong>{index.title} - {index.id} </strong><br/>{index.description}</Link>
       </p> 
     </div>
      ))}

      </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Ingredient