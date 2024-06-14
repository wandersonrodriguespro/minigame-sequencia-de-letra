import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/img/cidade-alta.webp";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    transition: 0.3s ease;
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
}
`;
