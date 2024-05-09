import React from 'react'
import './Brand.scss'
import { BRAND } from '../../static'

const Brand = () => {

    const brand = BRAND?.map((item) => (
        <div key={item.id} className='brand__card'>
            <div className='brand__card__img'>
                <img src={item.img} alt="img" />
            </div>
            <div className='brand__card__info'>
                <h3 className='brand__card__title'>{item.title}</h3>
                <p className='brand__card__desc'>{item.desc}</p>
            </div>
        </div>
    ))

  return (
    <section className='brand'>
        <div className="container brand__cards">
            {brand}
        </div>
    </section>
  )
}

export default Brand