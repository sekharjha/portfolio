import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+91-9986970564">+91-9986970564</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:sekharjha14@gmail.com">sekharjha14@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating One Project at a time
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = "https://github.com/sekharjha">
          <AiFillGithub></AiFillGithub>
        </SocialIcons>
        <SocialIcons href = "https://www.linkedin.com/in/sekhar-jha-58711513a/">
          <AiFillLinkedin></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href = "https://twitter.com/ShekharJha1234">
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
