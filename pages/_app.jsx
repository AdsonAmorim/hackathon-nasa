import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
    }

    :root {
      font-size: 62.5%; // reset font-size to 10px
    }

    @media only screen and (max-width: 720px) {
      :root {
        font-size: 40%;
      }
    }
  `;

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
