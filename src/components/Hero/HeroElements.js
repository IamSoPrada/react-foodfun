import styled from "styled-components"
import SoupImg from '../../img/hero/hero_soup.svg';
import { ReactComponent as EllipseImg } from '../../img/hero/Ellipse_13.svg';
import BubbleBigImg from '../../img/bubbles/blob_big.svg';

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
    background: url(${SoupImg}) 90% 30% no-repeat , url(${BubbleBigImg}) 100% 50% no-repeat ;
    background-size: 510px;
    @media screen and (max-width: 819px){
        overflow: hidden;
        background: url(${SoupImg}) 500% 100% no-repeat , url(${BubbleBigImg}) 500% 50% no-repeat ;
    }
    @media screen and (max-width: 769px){
        overflow: hidden;
        background: url(${SoupImg}) -60% 100% no-repeat;
    }
    
`

export const HeroWrapper = styled.div`
    display: flex;
    height: 100%;
    margin-top: 100px;

    div {
        display: flex;
        margin-right: auto;
        max-width: 450px;
        flex-direction: column;
        justify-content: flex-start;
    }
    @media screen and (max-width: 769px){
        margin-top: 200px
    }
`

export const EllipseSvg = styled(EllipseImg)`
    position: absolute;
    right:0;
    top: 0;
    z-index: -2;
    width: 600px;
    height: 600px;
    @media screen and (max-width: 819px){
        display: none;
    }
`
export const TitleHero = styled.h1`
    font-size: 2.5em;
    color: #333;
    font-weight: 700;
    margin-bottom: 1.5em;
    span {
        color: #ff9100;
    }
    @media screen and (max-width: 819px){
        font-size: 2em;
    }
    @media screen and (max-width: 769px){
        font-size: 1.9em;
    }
`
export const SubTitleHero = styled.h2`
    font-size: 1.3em;
    font-weight: 400;
    @media screen and (max-width: 819px){
        font-weight: 600;
        font-size: 1.2em;
    }
    @media screen and (max-width: 769px){
        font-size: 1em;
    }

`

export const ButtonMain = styled.button`
    margin-top: 2.5em;
    border: 0;
    border-radius: 25px;
    padding: 12px 30px;
    background-color: #ff9100;
    color: #fff;
    font-size: 1em;
    font-style: uppercase;
    font-weight: 500;
    text-align-center;
    cursor: pointer;
    white-space: nowrap;
    align-self: flex-start;
    outline-style: none;
    transition: 0.3s all ease-out;
    &:hover{
        background-color: #333;
        transform: translateX(2px) scale(0.95);
    }
    @media screen and (max-width: 819px){
        font-weight: 400;
    }

`