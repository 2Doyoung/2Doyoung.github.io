import React from 'react';
import styled from 'styled-components';

const SectionStyled = styled.div`
    margin-left: 1rem;
`;

const SectionTitleStyled = styled.div`
    font-size: 1.8rem;
    margin-bottom: 1rem;
`;

function Section(props) {
  return (
    <SectionStyled id={props.id}>
      <SectionTitleStyled>{props.title}</SectionTitleStyled>
      {props.children}
    </SectionStyled>
  );
}

export default Section;