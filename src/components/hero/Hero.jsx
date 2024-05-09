import React from 'react'
import './Hero.scss'
import heroBg from '../../assets/images/hero-bg.png'
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="hero">
        <div className="container hero__container">
            <div className="hero__left">
                <h1 className='hero__title'>Discover <br /> Most Suitable Watches</h1>
                <p className='hero__desc'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                <div className="hero__inputs">
                    <input className='hero__search-input' required type="text" placeholder='Find the best brands'/>
                    <button className='hero__search-btn'>Search</button>
                </div>
            </div>
            <div className="hero__right">
                <img src={heroBg} alt="img" />
            </div>
        </div>
    </section>
  )
}

export default Hero