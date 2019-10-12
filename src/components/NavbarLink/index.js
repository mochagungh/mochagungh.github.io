import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled(Link)`
  color: #7bed9f;
  transition: all 100ms ease-in-out;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  font-weight: bold;
  font-size: 92.5%;
  line-height: 2;
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    /* color: var(--blue); */
  }

  @media (max-width: 1100px) {
    width: 2ch;
    padding: 0.45rem 1.5rem;
    color: #7bed9f;
  }

  @media (max-width: 700px) {
    padding: 0.35rem 1.5rem;
    margin: 0.3rem 0;
    color: #7bed9f;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:active {
    transform: translateY(3px);
    transition: all 100ms ease-in-out;
  }
`;

const Label = styled.span`
  font-size: 0.95rem;
  text-decoration: none;
  text-transform: uppercase;
  display: block;

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

function NavbarLink(props) {
  return (
    <StyledLink>
      <InnerWrapper>
        <StyledLink to={props.to}>
          <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
          <Label>{props.label}</Label>
        </StyledLink>
      </InnerWrapper>
    </StyledLink>
  );
}
export default NavbarLink;
