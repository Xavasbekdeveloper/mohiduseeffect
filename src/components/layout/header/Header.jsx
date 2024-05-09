import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../../assets/icons/Logo.svg'
import { NAVBAR } from '../../../static'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";


const Header = () => {
    const [open, setOpen] = useState(false)

    const handleBar = () => {
        setOpen(!open)
    }

    const navbar = NAVBAR?.map((item) => (
        <li key={item.id} className='header__item'>
            {
                item.id === 2 ? <a href="#" className='header__link'>{item.title} <IoIosArrowDown /></a> : <a href="#" className='header__link'>{item.title}</a>
            }
        </li>
    ))

  return (
    <header className='header'>
        <nav className='header__nav'>
            <div className="container header__container">
                <div>
                    <a href="#">
                        <img src={Logo} alt="img" />
                    </a>
                </div>
                <ul className={open ? 'header__list show-list ' : 'header__list'}>
                    {navbar}
                </ul>
                <div className="header__btns">
                    <button className='header__btn'><IoSearch /></button>
                    <button className='header__btn'><FaUser /></button>
                    <button className='header__btn header__shop-btn'><PiShoppingCartSimpleFill /> <span>0</span></button>
                    <button className='header__btn header__bar-btn' onClick={handleBar}><FaBars /></button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header