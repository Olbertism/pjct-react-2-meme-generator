/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
  }
  @font-face {
    font-family: 'Open Sans Semibold', sans-serif;
    src: url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);
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

  h2 {
    color: #3a3a3a;
  }
  *:focus {
    outline-style: solid;
    outline-offset: -1px;
  }
`;
