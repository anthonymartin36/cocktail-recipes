//routes.tsx

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom'
  import App from './components/App'
  import Cocktails from './components/Cocktails'
  import Cocktail from './components/Cocktail'
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
        <Route path="" index element={<Cocktails />} />    
        <Route path="cocktails/:cId" element={<Cocktail />} />
        </Route>
      </>,
    ),
  )
 
  export default router