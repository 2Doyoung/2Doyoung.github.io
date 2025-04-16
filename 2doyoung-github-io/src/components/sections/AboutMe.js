import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/image/profile.jpg"

const DisplayStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
`;

const ProfileStyled = styled.img`
    width: 12rem;
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    flex-shrink: 0;
    margin-left: 0.5rem;
`;
  
const LiStyled = styled.li`
    margin: 0;
    padding: 0;

    span {
        border-radius: 5px;
        background-color: #585858;
        color: #FFFFFF;
        font-weight: 700;
        padding: 2px;
    }
`;
  

const bulletLineWidth = "3px";
const bulletColor = "#b3b3b3";
const bulletBackgroundColor = "white";
const bulletBorderWidth = bulletLineWidth;
const bulletSize = "30px";

const OlNumberedStyled = styled.ol`
    list-style: none;
    margin-left: 5rem;
    padding: 0;
    border-left: ${bulletLineWidth} solid ${bulletColor};
    counter-reset: numbered-list;
    position: relative;

    li {
        font-size: 16px;
        margin-bottom: 30px;
        padding-left: 30px;
        position: relative;

        &:last-child {
            border-left: ${bulletLineWidth} solid ${bulletBackgroundColor};
            margin-left: -${bulletLineWidth};
        }

        &::before {
            background-color: ${bulletColor};
            border: ${bulletBorderWidth} solid ${bulletBackgroundColor};
            border-radius: 50%;
            color: ${bulletBackgroundColor};
            content: counter(numbered-list, decimal);
            counter-increment: numbered-list;
            display: block;
            font-weight: bold;
            width: ${bulletSize};
            height: ${bulletSize};
            line-height: ${bulletSize};
            position: absolute;
            left: -19px;
            top: -6px;
            text-align: center;
        }
    }
`;

function AboutMe(props) {
    return (
        <DisplayStyled>
            <ProfileStyled src={profileImg}></ProfileStyled>
            <OlNumberedStyled>
                <LiStyled>3년차 백엔드 개발자 이도영</LiStyled>
                <LiStyled>Java, SpringFramework 기반 <span>ERP 및 MES 대용량 데이터 최적화</span>와 <span>실시간 설비 데이터 모니터링 화면</span> 개발</LiStyled>
                <LiStyled>SpringBoot, MySQL, Thymeleaf, AWS EC2를 활용해 <span>기획부터 개발까지 1인 플랫폼 운영</span></LiStyled>
                <LiStyled>WebSocket, STOMP를 이용한 <span>실시간 채팅 기능</span> 개발</LiStyled>
            </OlNumberedStyled>
        </DisplayStyled>
    )
}

export default AboutMe;