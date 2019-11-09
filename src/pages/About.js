import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Main } from '../container/Main';
import { PageWrapper } from '../container/PageWrapper';
import SocialButton from '../components/SocialButton';

const StyledP = styled.p`
  margin: 0;
  line-height: 0.55;
  font-size: 3.5rem;
`;

const bounce = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
  to {
      transform: translate3d(0, -15px, 0);
    }
`;

const BouncingI = styled.span`
  display: block;
  font-weight: bold;
  margin: 0;
  animation: ${bounce} 0.4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const StyledI = styled.span`
  display: block;
  font-weight: bold;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
`;

const StyledSpan = styled.span`
  background: var(--darkGrey);
  color: var(--bestYellow);
  border-radius: 6px;
  padding: 0.7rem;
  margin-top: 1rem;
  margin-left: 0.3em;

  @media (max-width: 700px) {
    margin-top: 1.3rem;
    padding: 0.5rem;
    font-size: 2rem;
    display: flex;
  }
`;

function About() {
  return (
    <>
      <Main>
        <PageWrapper>
          <h2>Hello there !</h2>
          <h3 style={{ display: 'flex' }}>
            <StyledP aria-label="i'm">
              <BouncingI>.</BouncingI>
              <span style={{ display: 'inline-block' }}>
                <StyledI>ı</StyledI>
              </span>
              'm
            </StyledP>
            <StyledSpan>Moch Agung Hermawan</StyledSpan>
          </h3>
          <h4>a front web developer</h4>
          <SocialButton />
        </PageWrapper>
      </Main>
    </>
  );
}

export default About;
