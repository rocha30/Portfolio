import Layout from './components/common/Layout'
import Hero from './components/home/Hero'
import QuickAbout from './components/home/QuickAbout'
import Skills from './components/home/Skills'
import FeaturedProjects from './components/home/FeaturedProjects'
import Contact from './components/home/Contact'
import './styles/global.css'

function App() {
  return (
    <Layout>
      <Hero />
      <QuickAbout />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </Layout>
  )
}

export default App