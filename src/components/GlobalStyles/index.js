import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* colors */
  :root {
    --green: #7bed9f;
    --darkGreen: #162a2b;
    --darkGreenNav: #204547;
    --darkGrey: rgba(42, 42, 42, 1);
    --lightDreen: #55efc4;
    --neon: rgba(3, 235, 255, 1);
    --translucentGreen: hsla(153, 36%, 59%, 0.6);
    --bestYellow: #ffb300;

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
        background: #FF9800;
        text-shadow: black 1px 2px 0px;
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
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(3,235,255,1) 0%, rgba(249, 168, 37,1) 100.2% );
    /* background-image: linear-gradient( 115.7deg,  rgba(3,79,135,1) 6.2%, rgba(0,184,214,1) 112.9% ); */
    color: var(--darkGrey);
    font-family: var(--primaryFont);
    font-feature-settings: 'calt' 1;
    font-variant-ligatures: contextual;
    font-size: 24px;
    word-spacing: -0.25ch;
    line-height: 1.4;

    &:before {
      content: "";
      position: fixed;
      top: -10px;
      left: 0;
      width: 100%;
      height: 10px;
      box-shadow: 0px 0 10px rgba(0, 0, 0, 1);
      z-index: 100;
    }
  }

  @media only screen and (max-width: 700px) {
    body {
      font-size: 20px;
      line-height: 1.3;
    }

    h1,
    h2,
    h3,
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
