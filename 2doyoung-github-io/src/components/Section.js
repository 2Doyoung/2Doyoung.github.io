import React from 'react';
import styled from 'styled-components';

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  white-space: nowrap;
  margin-left: 0.5rem;
`;

const Divider = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #ddd;
`;

const ContentWrap = styled.div`
  
`;

function Section(props) {
  return (
    <SectionWrap id={props.id}>
      <TitleWrap>
        <Title>{props.title}</Title>
        <Divider />
      </TitleWrap>
      <ContentWrap>
        {props.children}
      </ContentWrap>
    </SectionWrap>
  );
}

export default Section;