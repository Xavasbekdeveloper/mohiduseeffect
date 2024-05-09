import React from 'react'
import './news.scss'
import apple from '../../assets/images/apple1.png'

const News = () => {
  return (
    <section className="news">
        <div className="container news__container">
            <div className="news__left">
                <h2 className='news__title'>Subscribe To Newsletter</h2>
                <p className="new__desc">Get free guide about smart watches daily. </p>
                <div className="news__inputs">
                    <input className='news__email-input' required type="text" placeholder='Enter Email Address'/>
                    <button className='news__email-btn'>Subscribe</button>
                </div>
            </div>
            <div className="news__right">
                <img src={apple} alt="img" />
            </div>
        </div>
    </section>
  )
}

export default News