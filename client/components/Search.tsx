import { useState } from 'react'
import Combobox from "react-widgets/Combobox"
import { getAllCocktailApi } from '../api/api-cocktails'
import { useQuery } from '@tanstack/react-query'

import './Hero.css'

const Search = () => {
    const [value, setValue] = useState('Martini')
    const {
        data: cocktail,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['cocktail'],
        queryFn: () => getAllCocktailApi(),
      })
    
      if (isError) {
        return (
        <><h1 className="loading-heading">Something's broken!</h1></>
        )
      }
    
      if (!cocktail || isLoading) {
        return (
          <><h1 className="loading-heading">Just a Sec!!</h1></>
        )
      }
      
    const data = cocktail.map((c : any) => ({id: c.id, title: c.title}))
    console.log("Data : ", data)
    return (
        <div className='search'>
            <div className='content'>
                <p>
                <Combobox 
                hideCaret
                hideEmptyPopup
                busy busySpinner={
                    <span className="fas fa-sync fa-spin" />
                }
                data={cocktail}
                textField='name'
                onChange={value => setValue(value)}
                onSelect={alertWhenSelected}
                />
                </p>
            </div>
        </div>
    )
}

export default Search 