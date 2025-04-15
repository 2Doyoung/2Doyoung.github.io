import React, { useState } from 'react';
import styled, { keyframes }from 'styled-components';

const HeaderStyled = styled.header`
    margin-top: 40px;
    padding: 60px 40px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
`;

const DisplayStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleStyled = styled.div`
    font-size: 2rem;
    font-weight: 300;

    span {
        font-weight: 500;
    }
`;

const SubTitleStyled = styled.div`
     font-size: 1rem;
`;

const LinkStyled = styled.a`
    font-weight: 700;
    color: #333333;
    cursor: pointer;
    text-decoration: underline;
`;

const ContactStyled = styled.div`
    font-size: 1.1rem;
`;

const fadeInOut = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    10% {
        opacity: 1;
        transform: translateY(0px);
    }
    90% {
        opacity: 1;
        transform: translateY(0px);
    }
    100% {
        opacity: 0;
        transform: translateY(-10px);
    }
`;

const CopyToast = styled.div`
    position: fixed;
    bottom: 40px;
    left: 45%;
    transform: translateX(-45%);
    background: #222;
    color: white;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    font-size: 0.95rem;
    animation: ${fadeInOut} 2.5s ease-in-out forwards;
    z-index: 1000;
    white-space: nowrap;
    width: max-content;
    text-align: center;
`;

const LabelStyled = styled.span`
  display: inline-block;
  width: 75px;
`;

function Header() {
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("dlehdud1653@kakao.com")
        .then(() => {
            setCopy(true);
            setTimeout(() => setCopy(false), 2500);
        })
        .catch((error) => {
            console.error("복사 실패 : ", error);
        });
    }

    return (
        <HeaderStyled>
            {copy && <CopyToast>클립보드에 복사되었습니다.</CopyToast>}
            <DisplayStyled>
                <div>
                    <TitleStyled>백엔드 개발자 <span>이도영</span></TitleStyled>
                    <SubTitleStyled>BACKEND DEVELOPER LEEDOYOUNG</SubTitleStyled>
                </div>
                <div>
                    <ContactStyled><LabelStyled><i className="ri-github-fill"></i> Github </LabelStyled> : <LinkStyled href='https://github.com/2Doyoung' target='_blank'>https://github.com/2Doyoung</LinkStyled></ContactStyled>
                    <ContactStyled><LabelStyled><i className="ri-mail-fill"></i> Email </LabelStyled> : <LinkStyled onClick={handleCopy}>dlehdud1653@kakao.com</LinkStyled></ContactStyled>
                </div>
            </DisplayStyled>
        </HeaderStyled>
    );
}

export default Header;