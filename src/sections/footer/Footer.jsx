import { links, socials } from './data'
import './footer.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((flink) => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__icons">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer__copyright">
          <small>
            {year} 
             copyright &copy; at MrReact. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
