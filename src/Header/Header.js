import React, { useState } from 'react'
import LoGo from '../Assets/logo.webp'
import { NavLink } from 'react-router-dom';
import { FaYoutubeSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import './header.css'
const Header = () => {

    const [openToggle, setOpenToggle] = useState(false);
    const [background, setBackground] = useState(false)
   

    const changeBackground = () => {
        if (window.scrollY > 80) {
            setBackground(true)
        } else {
            setBackground(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <>
            <div className={background ? 'cahngeNav' : ' main-nav'}>
                <div className='logo '>
                    <img src={LoGo} alt='alt' />
                </div>
                <div className='menu-link'>
                    <ul className={openToggle ? 'mobile-menu' : 'menu'}>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacts'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service'>Service</NavLink>
                        </li>

                    </ul>
                </div>
                <div className='social-media'>
                    <ul className='menu'>
                        <li>
                            <NavLink to='/shop'>
                                < RiShoppingCartFill />
                            </NavLink>
                        </li>
                        <li>
                            <a href='https://youtu.be/8AJ3Kcz5FsM'><FaYoutubeSquare /></a>
                        </li>
                        <li>
                            <a href='  https://www.instagram.com/thapatechnical'><FaInstagramSquare /></a>
                        </li>
                        <li>
                            <a href='  https://www.instagram.com/thapatechnical'><FaFacebookSquare /></a>
                        </li>

                    </ul>
                </div>
                <div className='hamburger_menu' onClick={() => setOpenToggle(!openToggle)}>
                    {openToggle ? 'X' : <GiHamburgerMenu />}
                </div>

            </div>




        </>
    )
}

export default Header