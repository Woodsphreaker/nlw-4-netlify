import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%
    }

    @media screen and (max-width: 720px) {
      font-size: 50%
    }
  }

  body {
    background-color: var(--background);
    font-family: "Inter", sans-serif;
    color: var(--text);
  }

  body, input, textarea, button {
    font-weight: 400;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --white:#fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }
`
