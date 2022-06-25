import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
    --gray-200: #3f3f3f;
    --gray-500: #131214;
    --gray-700: #0D0B0D;
}

body {
    background-color: var(--gray-700);
    color: #FFF;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
}

a{
    text-decoration: none;
    color: white;
}

html {
    @media( max-width: 1000px){
    font-size: 93.75%;
    }

    @media(max-width: 700px){
        font-size: 87.5%;
    }
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}

`