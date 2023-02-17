import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="" />
        </div>
        <h3 data-aos="fade-up">Mr React</h3>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat
          ipsam tempore officia dicta architecto, exercitationem soluta.
        </p>
        <div data-aos="fade-up" className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Projects
          </a>
        </div>
        <div data-aos="fade-up" className="header__icons">
          {data.map(({ id, link, icon }) => {
            return (
              <a key={id} href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header
