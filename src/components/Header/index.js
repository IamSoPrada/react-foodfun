import React from 'react'
import { WrapperNavLinks, Nav, NavLink, BurgerIcon, ShoppingBasketIcon, SearchIcon, Logo, LogoSVG, BtnGroup } from "./NavBarElements"
import { faBars, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <>
            <Nav>
                <Logo>
                    <LogoSVG />
                    <span>Food</span>fun
                </Logo>
                <WrapperNavLinks>
                    <NavLink exact to="/">Главная</NavLink>
                    <NavLink to="/menu">Меню</NavLink>
                    <NavLink to="/delivery">Доставка</NavLink>
                    <NavLink to="/about">О нас</NavLink>
                    <BtnGroup>
                        <ShoppingBasketIcon icon={faShoppingBasket} />
                        <SearchIcon icon={faSearch} />
                    </BtnGroup>
                    <BurgerIcon icon={faBars} size="2x" />
                </WrapperNavLinks>
            </Nav>
        </>
    )
}
export default Header;