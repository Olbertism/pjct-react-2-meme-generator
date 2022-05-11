/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const globalStyles = css`
 @import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&family=Open+Sans&display=swap');
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
  }
  @font-face {
    font-family: 'Open Sans Semibold', sans-serif;
    src: url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);
  }
  @font-face {
    font-family: 'Oleo Script Swash Caps', cursive;
    src: url(https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap);
  }
  html,
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    height: 100%;
    background-color: aliceblue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    width: 80%;
    height: 100%;
    background-color: white;
    margin: 0 auto;
    margin-top: 3%;


  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-family: 'Oleo Script Swash Caps' , cursive;
    font-size: 38px;
    color: #f24242;
  }

  h2 {

    color: #4254b5;
  }
  *:focus {
    outline-style: solid;
    outline-offset: -1px;
  }
`;
