import styled from "styled-components"
import chickenSvg from "../../img/healthy_food/chicken.svg"
import blobSvg from "../../img/healthy_food/blob.svg"
import { ReactComponent as ellipseSvg } from "../../img/healthy_food/Ellipse_healthy_food.svg"


export const HealthyFoodSection = styled.section`
    position: relative;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
    background: url(${chickenSvg}) no-repeat , url(${blobSvg}) 10%  no-repeat ;
    background-size: 510px;
    @media screen and (max-width: 819px){
        background: url(${blobSvg}) no-repeat ;
        overflow: hidden;
    }
`

export const HealthyFoodWrapper = styled.div`
    display: block;
    margin-top: 3em;
    height: 100%;
    line-height: 2em;
    color: #333;
    div {
        display: block;
        padding: 2em;
        margin-left: auto;
        max-width: 450px;
        flex-direction: column;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 6px 20px rgba(56,125,255,.11);
    }
    @media screen and (max-width: 769px){
        margin-top: 200px
    }
`

export const HealthyFoodTitle = styled.h2`
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
export const HealthyFoodSubTitle = styled.p`
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


export const EllipseSvg = styled(ellipseSvg)`
    position: absolute;
    left: 0;
    top: 100px;
    z-index: -1;
    opacity: 0.95;
    width: 600px;
    height: 600px;
    @media screen and (max-width: 819px){
        display: none;
    }
`


export const HealthyFoodButton = styled.button`
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