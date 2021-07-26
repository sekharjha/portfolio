import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br/>
        I am Sekhar
      </SectionTitle>
      <SectionText>
        I can turn coffee into code. I am a fullstack developer and like to build logical solutions for a particular problem. 
      </SectionText>
      <Button onClick = {()=>window.location = 'mailto:sekharjha14@gmail.com'}>Hire Me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;