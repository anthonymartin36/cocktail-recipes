import { Router } from 'express'

import path from 'path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'

import {Cocktail, Ingredient} from '../../models/cocktails'

dotenv.config()

const router = Router()
let DATA_URL = process.env.DATA_URL

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
let file = __dirname + '/../data/recipes.json' //DATA_URL

// http://localhost:3000/api/v1/cocktails
router.get('/', async (req, res) => {
  console.log('File source : ', file)
  const data = await awaitingReadFile(file)
  console.log('File source : ', data)
  res.json(data.cocktails )
  })

//GET http://localhost:3000/api/v1/cocktails/:cId 
router.get('/:cId', async (req, res) => {
  
  const cId = Number(req.params.cId)
  const data = await awaitingReadFile(file)
  let cocktail = data.cocktails.find( ( cocktail: Cocktail ) => cId == cocktail.id)
  try {
    res.json(cocktail)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
//GET http://localhost:3000/api/v1/cocktails/filter/:ingredient
router.get('/filter/:ingredient', async (req, res) => {
  
  const ingredient = req.params.ingredient.toLocaleLowerCase()
  const data = await awaitingReadFile(file)
  //Convert to object
  const cocktails = data.cocktails

  //console.log("ingredient : ", ingredient)
  //filters through ingredients, checks type of ingredient
  let results = cocktails.filter((cocktail: Cocktail) => {
    //return true if matches
    //one of the ingredients' types has to match
    //get the ingredient of the recipe and stick into a variable
  let currentIngredients = cocktail.ingredients
    //map through the ingredients
    //create array of only the ingredient name
    let ingredientNames = currentIngredients.map((ingredientObj: Ingredient) => {
      return ingredientObj.ingredient.toLocaleLowerCase()
    })
    //checks if the ingredient is in that list
    //returns true if it is
    return ingredientNames.includes(ingredient)
  })
  try {
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

  async function awaitingReadFile(file: any) {
    let data
    try {
      let json = await fs.readFile(file, 'utf-8')
      data = JSON.parse(json)
    } catch (err ) {
      console.log('Error: ' + (err as Error).message)
    }
    return data
  }

export default router