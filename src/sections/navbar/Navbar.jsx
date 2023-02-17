import Logo from '../../assets/logo.jpg'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'
import {useModalContext} from '../../context/ModalContext'
import './navbar.css'

const Navbar = () => {

  const {showModalHandler} = useModalContext()  
    
 
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="" />
        </a>
        <ul className='nav__menu'>
          {data.map(({ id, link, title }) => {
            return (
              <li key={id}>
                <a href={link}>{title}</a>
              </li>
            )
          })}
        </ul>
        <button id="theme__icon" className='theme__icon' onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
