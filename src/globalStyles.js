import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
     *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family:'Nunito', sans-serif;
    }

    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }
`;

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;
export default Container;