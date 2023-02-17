import Modal from '../components/Modal'
import { primaryColors, backgroundColors } from './data'
import PrimaryColors from './PrimaryColors'
import BackgroundColor from './BackgroundColor'
import './Theme.css'

function theme() {
  return (
    <Modal className="theme__modal">
      <h3>Customize Your Theme</h3>
      <small>
        Change the primary and background color based on Your preference
      </small>
      <div className="theme__primary-wrapper">
        <h5>Primary Colors</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pcolor) => (
            <PrimaryColors
              key={pcolor.className}
              className={pcolor.className}
            />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Background Colors</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bgColor) => (
            <BackgroundColor
              key={bgColor.className}
              className={bgColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default theme
