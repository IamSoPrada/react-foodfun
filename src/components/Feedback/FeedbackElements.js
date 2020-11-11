import styled from "styled-components"


export const FeedbackSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 100px;
`
export const FeedbackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FeedbackCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 20px;
    justify-self: center;
    justify-content: center;
    min-height: 200px;
    min-width: 300px;
    box-shadow: 0 49px 114px rgba(255, 152, 0, 0.1);
    text-align: center;
    color: #333;
    border: 0;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #fff4e3;
    @media screen and (max-width: 819px){
        margin-top: 2em;
    }
`
export const FeedbackAvatar = styled.div`
    display: flex;
    position: absolute;
    top: -40px;
    img{
        object-fit: cover;
        object-position: bottom;
        width: 60%;
    }
`
export const FeedbackStars = styled.div`

`
export const FeedbackReview = styled.div`

    p{
        color: #333;
        line-height: 2em;
        text-align: start;
        padding: 1em;
    }

`
export const FeedBackCards = styled.div`
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 1em;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 819px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`
export const FeedbackTitle = styled.div`
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
export const FeedBackButton = styled.div`
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
    align-self: center;
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
