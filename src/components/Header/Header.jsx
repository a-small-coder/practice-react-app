import './header.css'
import logo from '../../assets/logo (1).png'
import img2 from '../../assets/icon_menu.svg'

import MenuItem from './MenuItem'

function Header() {
    const menuLinksLeft = [
        {
            id: 1,
            title: "home",
            link: "/"
        },
        {
            id: 2,
            title: "catalog",
            link: "catalog"
        },
    ]

    const menuLinksRight = [
        {
            id: 3,
            title: "about",
            link: "about"
        },
        {
            id: 4,
            title: "cart",
            link: "cart"
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
            

            

        </div>
    </header>
    )
}
export default Header