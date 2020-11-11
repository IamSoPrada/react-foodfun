import styled from "styled-components"

export const FeaturesSection = styled.section`
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
`
export const FeaturesWrapper = styled.div`
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
export const FeaturesCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-self: center;
    line-height: 1.7;
    height: 300px;
    width: 300px;
    text-align: center;
    color: #333;
    border: 0;
    border-radius: 50%;
    background-color: #fffaf3;;
`
export const FeaturesCardIcon = styled.div`
    margin: 0 auto;
    img{
        width: 100px;
    }

`
export const FeaturesCardTitle = styled.h3`

`
export const FeaturesCardDesr = styled.p`
    font-size: 0.9em;

`