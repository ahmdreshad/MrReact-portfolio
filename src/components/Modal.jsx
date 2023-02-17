import Card from './Card'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { useModalContext } from '../context/ModalContext'
import './modal.css'

function Modal({ className, children }) {
  const { showModal, closeModalHandler } = useModalContext()
  
 

  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children} </Card>
          </>,
          document.getElementById('overlays')
        )}
    </Fragment>
  )
}

export default Modal
