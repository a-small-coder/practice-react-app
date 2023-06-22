import './header.css'
import logo from '../../assets/logo (1).png'
import img2 from '../../assets/icon_menu.svg'
import img3 from '../../assets/Group 1.png'
import MenuItem from './MenuItem'
import { useState } from 'react'

function Header() {
    const menuLinksLeft = [
        {
            id: 1,
            title: "about",
            link: "about-page"
        },
        {
            id: 2,
            title: "gallery",
            link: "gallery-page"
        },
    ]

    const menuLinksRight = [
        {
            id: 3,
            title: "Blog",
            link: "Blog-page"
        },
        {
            id: 4,
            title: "contact",
            link: "contact-page"
        },
    ]

    const menuItemsRight = menuLinksRight.map( (l) => (
        <MenuItem
            key={l.id}
            title={l.title}
            link={l.link}
        />
    ))
    const menuItemsLeft = menuLinksLeft.map( (l) => (
        <a key={l.id} class="menu-block__item menu-item" href={l.link}>{l.title}</a>
    ))

    const [dots, setDots] = useState([
        {
            id: 1,
            clicked: true
        },
        {
            id: 2,
            clicked: false
        },
        {
            id: 3,
            clicked: false
        },
    ])
    

    const handleClick = (id) => {
        const newDots = dots.map( dot => {
            if (id === dot.id) {
                return {
                    id: dot.id,
                    clicked: true
                }
            }
            return {...dot, clicked:false}
        })
        setDots(newDots)

    }

    const dotItems = dots.map( dot => (
        <div 
            key={dot.id} 
            class={`dot ${dot.clicked ? '_active' : ""}`}
            onClick={() => handleClick(dot.id)}
        >

    </div>
    ))

    return (
        <header>
        <div class="header">
            <div class="container">
                <div class="header__main header-menu">
                    <div class="header-menu__left menu-block">
                        {menuItemsLeft}
                    </div>
                    <div class="header-menu__logo logo">
                        <a class="logo__wrap menu-item">
                            <img  src={logo}/>
                        </a>
                    </div>
                    <div class="header-menu__right menu-block">
                        {menuItemsRight}
                        <button class="menu-block__item menu-item">
                            <img class="menu-item__burger burger" src={img2}/>
                        </button>
                    </div>
                </div>
            </div>
            

            <div class="header__slider slider-header">
                <div class="slider-header__slide heder-slide">
                    <div class="header-slide__figure">
                        <img src={img3}/>
                    </div>

                    <div class="header-slide__content hero-content">
                        <h2 class="hero-content__title _title">
                            Furniture collection
                        </h2>
                        <div class="hero-content__divider">

                        </div>
                        <div class="hero-contnent__text">
                            <p class="common-text"> 
                                Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint

                            </p>
                        </div>
                    </div>

                </div>

                <div class="slider-header__dots dots">
                    {dotItems}
                </div>
            </div>

        </div>
    </header>
    )
}
export default Header