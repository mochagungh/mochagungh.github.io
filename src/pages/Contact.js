import React from 'react';
import styled from 'styled-components';
import { Main } from '../container/Main';
import { PageWrapper } from '../container/PageWrapper';

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  color: #ffb300;
  text-decoration: none;
  font-weight: bold;
  text-shadow: black 1px 2px 0px;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--darkGrey);
    transform-origin: bottom right;
    transition: transform 0.25s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

function Mailto({ email, subject, body, ...props }) {
  return (
    <StyledLink
      href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
    >
      {props.children}
    </StyledLink>
  );
}

function Contact() {
  return (
    <Main>
      <PageWrapper>
        <h1>Get in Touch</h1>
        <p>
          Say
          <Mailto email="mochagungh@gmail.com" subject="Hi" body="Hello Agung!">
            hi
          </Mailto>
          or find me on other Platform :
          <StyledLink
            href="https://facebook.com/mochagungh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </StyledLink>
          or
          <StyledLink
            href="https://github.com/mochagungh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </StyledLink>
        </p>
      </PageWrapper>
    </Main>
  );
}

export default Contact;
