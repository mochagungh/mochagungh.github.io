import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faCodepen,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  margin-left: -1rem;
`;

const FIcon = styled(FontAwesomeIcon)`
  transition: 300ms ease-in;
`;

const Icon = styled.a`
  text-decoration: none;
  display: inline-flex;
  font-size: 18px;
  width: 60px;
  height: 60px;
  color: var(--darkGrey);
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 8px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, salmon, orange);
    border-radius: 50%;
    z-index: -1;
    transition: 300ms ease-in;
  }

  &:hover {
    &:before {
      transform: scale(0);
    }
  }

  &:hover ${FIcon} {
    color: var(--darkGrey);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(2.2);
  }
`;

function SocialButton() {
  return (
    <Wrapper>
      <Icon>
        <FIcon icon={faFacebookF}></FIcon>
      </Icon>
      <Icon>
        <FIcon icon={faTwitter}></FIcon>
      </Icon>
      <Icon>
        <FIcon icon={faLinkedinIn}></FIcon>
      </Icon>
      <Icon>
        <FIcon icon={faCodepen}></FIcon>
      </Icon>
    </Wrapper>
  );
}

export default SocialButton;
