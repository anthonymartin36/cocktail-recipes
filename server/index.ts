import server from './server.ts'

const PORT = process.env.PORT 

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
