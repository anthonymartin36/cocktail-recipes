import request from 'superagent'
//import { MissingCat, NewSightedCat, SightedCat } from '../../models/cats'
const rootUrl = '/api/v1/cocktails/'

export async function getAllCocktails() { // : Promise<MissingCat[]>
    try {
      const response = await request.get(rootUrl)
      console.log("APIS : getAllCocktails()")
      return response.body
    } catch (error) {
      throw console.error('Error fetching missing cocktails', error)
    }
  }

  export async function getACocktail(cId: number) { // : Promise<MissingCat[]>
    try {
      const response = await request.get(rootUrl + cId)
      console.log("APIS : getACocktail(cId)")
      return response.body
    } catch (error) {
        console.error(`Error fetching cocktail with id ${cId}: `, error)
        throw new Error(`Failed to fetch cocktail with id ${cId}`)
      }
  }