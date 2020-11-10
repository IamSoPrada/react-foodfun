import styled from 'styled-components';

export const ComplectsContainer = styled.div`
    padding-bottom: 40px;
    margin-top: 120px;
    color: #333;
`;

export const ComplectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 1.5em;
    justify-items: center;
    justify-self: center;
    @media screen and (max-width: 819px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media screen and (max-width: 769px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

export const ComplectsCard = styled.div`
    justify-self: center;
    line-height: 1.7;
    width: 300px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(56,125,255,.11);
`;

export const ComplectsImg = styled.img`
    display: block;
    object-fit: cover;
    object-position: bottom;
    height: 250px;
    width: 100%;
`;

export const ComplectsHeading = styled.h1`
    font-size: clamp(2em, 2.5vw, 3em);
    text-align: center;
    margin-bottom: 2em;
`;

export const ComplectsTitle = styled.h2`
    font-weight: 600;
    font-size: 1.5em;
`;

export const ComplectsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.1em;
    text-align: center;
`;

export const ComplectsDesc = styled.p`
    margin-bottom: 1em;
`;

export const ComplectsPrice = styled.p`

    margin-bottom: 0.7em;
    font-size: 1.5em;
`;

export const ComplectsButton = styled.button`
    margin-top: auto;
    border: 0;
    border-radius: 25px;
    padding: 12px 30px;
    background-color: #ff9100;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    outline-style: none;
    transition: 0.3s all ease-out;
    &:hover {
        background: #333;
        color: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;