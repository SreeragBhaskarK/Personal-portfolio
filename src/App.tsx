import { About, Contact, Education, Footer, Home, Skills } from "./components"
import { NavBar } from "./layout"
import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from 'react'
import Project from "./components/Project";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {

    }
  }, [])

  return (
    <>

      <div className={`loader ${loading ? 'visible' : 'hidden'}`}>

        <PacmanLoader
          color="#00abf0"
          loading={loading}
          size={25}

        />
      </div>
      <div className={`mainContent ${loading ? 'hidden' : 'visible'}`}>

        <NavBar />
        <Home />
        <About />
        <Education />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div >

    </>
  )
}

export default App
