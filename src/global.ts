import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --brown-800: #312823;
        --beige-300: #F1E6B9;

        --white: #fff;

        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
           font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--beige-300);
        font-size: 1.6rem;
        color: var(--brown-800);
        text-align: center;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h2 {
        padding-block: 2rem;
        font-weight: 700;
        font-size: 2.8rem;
    }

    h4 {
        font-weight: 500;
    }

    img {
        width: 12rem;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`