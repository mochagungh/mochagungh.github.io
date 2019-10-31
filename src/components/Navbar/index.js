import React from 'react';
import styled from 'styled-components';
import NavbarLink from '../NavbarLink/index';
import {
  faUserAlt,
  faFileAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-left: env(safe-area-inset-left);

  @media (max-width: 1100px) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 2px 0 2px black;
    background: #1f5189;
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
  }

  @media (max-width: 700px) {
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
  }

  @media print {
    display: none !important;
  }
`;

const InnerNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40rem;
  max-height: 15rem;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  font-family: var(--sansFont);

  @media (max-width: 1100px) {
    flex-direction: row;
  }
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <InnerNavbarWrapper>
        <NavbarLink to="/" label="About" icon={faUserAlt} />
        <NavbarLink to="/projects" label="Projects" icon={faFileAlt} />
        <NavbarLink to="/contact" label="Contact" icon={faEnvelope} />
      </InnerNavbarWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
