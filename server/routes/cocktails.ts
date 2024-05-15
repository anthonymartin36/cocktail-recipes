import { Router } from 'express'

import * as Path from 'node:path'
import path from 'path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'url'

const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
let file = __dirname + '/../data/recipes.json'

// http://localhost:3000/api/v1/cocktails
router.get('/', async (req, res) => {
  // console.log('File source : ' + file)
  const data = await awaitingReadFile(file)
  res.json(data.cocktails)
  })

//GET http://localhost:3000/api/v1/cocktails/:cId 
router.get('/:cId', async (req, res) => {
  
  const cId = Number(req.params.cId)
  const data = await awaitingReadFile(file)
  let cocktail = data.cocktails.find( ( cocktail ) => cId == cocktail.id)
  if (cocktail === ''){
    cocktail = {title: "hello Cocktail drinker"}
  }
  try {
    res.json(cocktail)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})



  async function awaitingReadFile(file: string) {
    let data = ''
    try {
      let json = await fs.readFile(file, 'utf-8')
      data = JSON.parse(json)
      return data
    } catch (err) {
      console.log('Error: ' + error.message)
    }
    return data
  }

export default router