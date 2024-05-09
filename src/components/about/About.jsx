import React from 'react'
import './About.scss'
import { IoStar } from "react-icons/io5";
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'

const About = () => {
  return (
    <section className="about">
        <div className="container about__container">
            <p className="about__text">Here are our some of the best clients.</p>
            <h2 className='about__title'>What People Say About Us</h2>

            <div className="about__cards">
                <div className="about__card">
                    <div className='about__card__img'>
                        <img src={about1} alt="img" />
                    </div>
                    <div className='about__card__info'>
                        <h3 className='about__card__title'>Hamza Faizi</h3>
                        <p className='about__card__desc'>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <div>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                    </div>
                </div>
                <div className="about__card">
                    <div className='about__card__img'>
                        <img src={about2} alt="img" />
                    </div>
                    <div className='about__card__info'>
                        <h3 className='about__card__title'>Hafiz Huzaifa</h3>
                        <p className='about__card__desc'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>

                        <div>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                    </div>
                </div>
            </div>

            <div className='about__bottom'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default About