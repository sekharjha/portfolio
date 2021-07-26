import Link from 'next/link';
import React from 'react';
import {FaGithubSquare,FaLinkedin,FaTwitterSquare} from 'react-icons/fa';
import { FaSpeakerDeck } from 'react-icons/fa';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
    <Div1>
      <Link href = "/">
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:'20px'}}>
          <FaSpeakerDeck size = "3rem"/><Span> Sekhar Jha</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/sekharjha">
        <FaGithubSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://twitter.com/ShekharJha1234">
        <FaTwitterSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/sekhar-jha-58711513a/">
        <FaLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
 </Container>
);

export default Header;
