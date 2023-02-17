import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import Testimonial from './Testimonial'


// testimonials data
import data from './data'

//swiper styles
import './testimonials.css'
 import 'swiper/css'
import 'swiper/css/pagination'


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>My Clients Reviews</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
      <div
        className="container"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <Testimonial testimonial={testimonial} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
