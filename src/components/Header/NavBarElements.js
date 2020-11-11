import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { ReactComponent as LogoIMG } from '../../img/logo.svg';
import { FontAwesomeIcon as NavIcon } from '@fortawesome/react-fontawesome'



export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    padding: 0px 25px;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    z-index: 99;
     
    @media screen and (max-width: 769px){
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        box-shadow: 0 3px 3px rgba(68,92,130,.14), 0 3px 4px rgba(68,92,130,.12), 0 1px 8px rgba(68,92,130,.2); 
    }
    @media screen and (max-width: 601px){
        padding: 0px 15px;
    }
`;

export const WrapperNavLinks = styled.div`
    display: flex;
    align-items: center;
`

export const NavLink = styled(Link)`
    color: #333;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 9px 25px;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    @media screen and (max-width: 769px){
        display: none;
    }
    @media screen and (max-width: 601px){
        display: none;
    }
`


export const BurgerIcon = styled(NavIcon)`
    display: none;
    @media screen and (max-width: 769px){
        display: block;
        cursor: pointer;
        position: relative;
        margin-left: 20px;
        right: 0;
    }
`
export const ShoppingBasketIcon = styled(NavIcon)`
    color: #fff;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.4s all ease;
    &:hover{
        color: #ff9100;
        transform: scale(1.1)
    }
`
export const SearchIcon = styled(NavIcon)`
    color: #fff;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.4s all ease;
    &:hover{
        color: #ff9100;
        transform: scale(1.1)
    }

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #ff9100;
    cursor: pointer;
    span {
        color: #333;
    }
    @media screen and (max-width: 600px){
        font-size: 1.5rem;
    }
`

export const LogoSVG = styled(LogoIMG)`
    margin-right: 25px;
`


export const BtnGroup = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 25px;
    border-radius: 25px;
    background-color: #ff9100;
    transition: 0.3s all ease;
    &:hover{
        background-color: #333;
    }
    @media screen and (max-width: 769px){
        padding: 9px 10px;
    }
    @media screen and (max-width: 600px){
        display: none;
    } 
`