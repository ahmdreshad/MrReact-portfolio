import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map(({ id, icon, title, desc }) => {
          return (
            <Card key={id} className="service light">
              <div className="service__icon">{icon}</div>
              <div className="service__details">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Services
