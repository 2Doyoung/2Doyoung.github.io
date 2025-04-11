import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    margin-top: 40px;
`;

const DisplayStyled = styled.div`
    display: flex;
`;

const TitleStyled = styled.div`
    font-size: 2rem;
`;

const SubTitleStyled = styled.div`

`;

function Header() {
  return (
    <HeaderStyled>
        <DisplayStyled>
            <div>
                <TitleStyled>백엔드 개발자 이도영</TitleStyled>
                <SubTitleStyled>BACKEND DEVELOPER LEEDOYOUNG</SubTitleStyled>
            </div>
        </DisplayStyled>
    </HeaderStyled>
  );
}

export default Header;