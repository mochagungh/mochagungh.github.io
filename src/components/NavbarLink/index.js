import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled(NavLink)`
  padding: 0.45rem 0.9rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: var(--dark-grey);
  transition: all 80ms ease-in-out;
  position: relative;
  user-select: none;
  text-align: center;
  font-weight: bold;
  font-size: 92.5%;
  line-height: 2;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    color: var(--neon);
  }

  &.isActive {
    color: var(--neon);
  }

  @media (max-width: 1100px) {
    width: 2ch;
    padding: 0.45rem 1.5rem;
    color: var(--neon);
  }

  @media (max-width: 700px) {
    padding: 0.35rem 1.5rem;
    margin: 0.3rem 0;
    color: #eceff1;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:active {
    transform: translateY(3px);
    transition: all 80ms ease-in-out;
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
  const { to, icon, label } = props;
  return (
    <InnerWrapper>
      <StyledLink exact={true} to={to} activeClassName="isActive">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <Label>{label}</Label>
      </StyledLink>
    </InnerWrapper>
  );
}
export default NavbarLink;
