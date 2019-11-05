import React from 'react';
import styled from 'styled-components';
import { Main } from '../container/Main';
import { PageWrapper } from '../container/PageWrapper';

const StyledSpan = styled.span`
  color: #ffb300;
  background: var(--darkGrey);
  border-radius: 4px;
  padding: 0.2em;

  @media (max-width: 700px) {
    padding: 0.05em;
    display: flex;
  }
`;

function About() {
  return (
    <>
      <Main>
        <PageWrapper>
          <h1>Hello there !</h1>
          <h3>
            My name is <StyledSpan>Moch Agung Hermawan</StyledSpan>
          </h3>
          <h4>a front web developer</h4>
        </PageWrapper>
      </Main>
    </>
  );
}

export default About;
