import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis, ad id sequi reiciendis explicabo doloribus inventore deserunt unde sit. Voluptate corrupti a sint nam voluptas dignissimos eveniet magnam libero!"
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis, ad id sequi reiciendis explicabo doloribus inventore deserunt unde sit. Voluptate corrupti a sint nam voluptas dignissimos eveniet magnam libero!"
  },
  {
    avatar: AVTR3,
    name: 'Kwane Despite',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis, ad id sequi reiciendis explicabo doloribus inventore deserunt unde sit. Voluptate corrupti a sint nam voluptas dignissimos eveniet magnam libero!"
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis, ad id sequi reiciendis explicabo doloribus inventore deserunt unde sit. Voluptate corrupti a sint nam voluptas dignissimos eveniet magnam libero!"
  }
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials