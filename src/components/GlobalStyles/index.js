import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* colors */
  :root {
    --green: #7bed9f;
    --dark-green: #162a2b;
    --dark-green-nav: #1a383a;
    --light-green: #55efc4;
    --translucentGreen: hsla(153, 36%, 59%, 0.6);

    /* sizing */
    --responsive-padding: 3.5rem;
    --safe-area-inset-top: 0px;
    --safe-area-inset-right: 0px;
    --safe-area-inset-bottom: 0px;
    --safe-area-inset-left: 0px;
  }

  @media (max-width: 700px) {
    :root {
      --responsive-padding: 1.3rem;
    }
  }

  @media (max-width: 370px) {
    --responsive-padding: 0.7rem;
  }

  @media print {
    :root {
      --primaryFont: Garamond, serif;
    }
  }

  ::selection {
        background: #7bed9f;
        text-shadow: black 1px 1px 0px;
    }

  body,
  html {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  body {
    background: var(--dark-green);
    color: var(--green);
    font-family: var(--primaryFont);
    font-feature-settings: 'calt' 1;
    font-variant-ligatures: contextual;
    font-size: 24px;
    word-spacing: -0.25ch;
    line-height: 1.4;
  }

  @media only screen and (max-width: 700px) {
    body {
      font-size: 20px;
      line-height: 1.3;
    }

    h1,
    h1 a {
      font-size: 1.75em;
    }
  }

  @media print {
    body {
      background: none;
      color: rgb(0, 0, 0);
      font-size: 11pt;
      line-height: 1.1;
      word-spacing: initial;
    }
  }
`;
