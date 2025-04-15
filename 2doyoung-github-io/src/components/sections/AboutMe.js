import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/image/profile.jpg"

const ProfileStyled = styled.img`
    width: 10rem;
    border-radius: 1rem;
`;

const aboutMe = `끊임없이 도전하며 성장하는 백엔드 개발자입니다.  
기계공학을 전공하던 중 프로그래밍의 매력에 빠져 개발자로 진로를 전환했고,  
자바 스프링 백엔드 교육 과정을 수료한 후 실제 현장에서 ERP/MES 시스템, 고객 관리 솔루션, 광고 플랫폼 등을 직접 개발해왔습니다.

Spring Boot, MySQL, Thymeleaf, AWS를 기반으로 한 서비스 기획부터 개발, 배포까지  
전 과정을 혼자 주도한 경험이 있으며, 외부 API 연동과 실시간 처리 등 실무 기반의 기술을 다수 경험했습니다.  
기획부터 기술까지 아우르는 백엔드 개발자로서, 더 나은 코드와 서비스를 만들기 위해 오늘도 성장 중입니다.`;

function AboutMe(props) {
    return (
        <div>
            <ProfileStyled src={profileImg}></ProfileStyled>
            <div>{aboutMe}</div>
        </div>
    )
}

export default AboutMe;