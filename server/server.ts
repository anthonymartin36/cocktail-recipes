import express from 'express'
import * as Path from 'node:path'

import cocktails from './routes/cocktails'
//import fsPromises from 'node:fs/promises'

import * as dotenv from 'dotenv'

const server = express()
dotenv.config()
server.use(express.json())

// server.use(express.urlencoded({ extended: true }))
// server.set('view engine', 'ejs')
// server.set('views', Path.resolve(__dirname, 'views')) // Set the views directory
server.use('/api/v1/cocktails', cocktails)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server