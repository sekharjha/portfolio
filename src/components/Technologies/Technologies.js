import React from 'react';
import { DiFirebase, DiReact, DiJava,DiNodejs,DiMysql } from 'react-icons/di';
import {RiFlutterLine} from 'react-icons/ri';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <span>
        <DiReact size="3rem"/>
        <RiFlutterLine size = "3rem"/>
        </span>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br/>
            React and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span><DiNodejs size="3rem"/>
        <DiJava size = "3rem"/>
        </span>
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with<br/>
            Node and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span><DiFirebase size="3rem"/>
        <DiMysql size = "3rem"/>
        </span>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with<br/>
            Firebase and MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
