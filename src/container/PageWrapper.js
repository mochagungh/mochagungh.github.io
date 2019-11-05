import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-left: -10em;
  max-width: 32.5em;
  @media (max-width: 900px) {
    display: block;
    margin-left: 0em;
  }
  @media print {
    max-width: 100%;
  }
`;
