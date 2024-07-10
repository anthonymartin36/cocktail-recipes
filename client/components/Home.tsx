
import Navbar from './Navbar.tsx'
import Cocktails from './Cocktails.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Footer from './Footer.tsx'

function Home() {
  //const { data } = useFruits()

  return (
    <>
      <div className="Home">
        <Cocktails />
      </div>
    </>
  )
}
export default Home