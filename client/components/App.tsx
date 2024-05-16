// import Cocktails from './Cocktails'

// function App() {
//     return (
//       <>
//         <header className="header">
//           <h1>My Collection</h1>
//         </header>
//         <section className="main"> <Cocktails/> </section>
//       </>
//     )
//   }
  
//   export default App

import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App