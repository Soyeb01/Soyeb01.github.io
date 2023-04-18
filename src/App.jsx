import Sidenav from "./component/Sidenav"
import Main from './component/Main'
import Work from './component/Work'
import Projects from './component/Projects'
import Contact from './component/Contact'
import AboutMe from './component/AboutMe'
import Footer from './component/Footer'
import SkillsSet from './component/SkillsSet'

function App() {

  return (
    
      <div className='bg:gray-100 dark:bg-gray-800'>
        <Sidenav />
        <Main />
        <AboutMe />
        <SkillsSet />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
