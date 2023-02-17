import { useRef, useState, useEffect } from 'react'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import FAQs from './sections/faqs/FAQs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Theme from '../src/theme/Theme'
import { useThemeContext } from './context/theme-context'
import FloatingNav from './sections/floating-nav/FloatingNav'

const App = () => {
  const { themeState } = useThemeContext()
  const mainRef = useRef()
  const [showFloatingNav, setShowFloatingNav] = useState(true)
  const [siteYPosition, SetSiteYPosition] = useState(0)
  // console.log(mainRef.current.getBoundingClientRect())

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true)
  }
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false)
  }
  // check if floating nav should be shown or hidden

  const floatingNavToggleHandler = () => {
    // check if the floating nav should go up or down
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler()
    } else {
      hideFloatingNavHandler()
    }

    SetSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000)

    return () => clearInterval(checkYPosition)
  },)

  return (
    <main
      className={`${themeState.primary} ${themeState.background} `}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  )
}

export default App
