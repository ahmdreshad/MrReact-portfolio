import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        {/* about left */}
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>

        {/* about right */}
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="about__card">
                  <span className="about__card-icon">{icon}</span>
                  <h5>{title}</h5>
                  <small>{desc}</small>
                </Card>
              )
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            cumque veritatis possimus quis accusantium in, dolores sed maxime
            unde. Perspiciatis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            perferendis voluptatum quam. Ullam accusamus quos tempore tempora,
            ipsam velit expedita vitae dolorem possimus? Animi esse harum,
            reiciendis fuga tenetur vel?
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
