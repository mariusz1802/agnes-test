import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
    

  }

  body{
    background-color: white;
    color: black;
  }
`

export default GlobalStyle
