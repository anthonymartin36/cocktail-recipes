import request from 'superagent'
import { Cocktail } from '../../models/cocktails'
const rootUrl = '/api/v1/cocktails/'

export async function getAllCocktails() : Promise<Cocktail[]>{ 
    try {
      const response = await request.get(rootUrl)
      return response.body
    } catch (error) {
      throw console.error('Error fetching missing cocktails', error)
    }
  }

  export async function getACocktail(cId: number) : Promise<Cocktail> {
    try {
      const response = await request.get(rootUrl + cId)
      return response.body
    } catch (error) {
        console.error(`Error fetching cocktail with id ${cId}: `, error)
        throw new Error(`Failed to fetch cocktail with id ${cId}`)
      }
  }