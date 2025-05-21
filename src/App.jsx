import About from "./components/About/About"
import BackToTop from "./components/arraows/arraow"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"
// eslint-disable-next-line no-unused-vars
import SocialLinks from "./components/SocialLinks"


function App() {

  return (
    <>
    <Nav/>
    <Home/>
    {/* <SocialLinks/> */}
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    <BackToTop/>

    </>
   
  )
}

export default App
