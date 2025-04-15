import React from "react";
import styled from "styled-components";

const ExperienceStyled = styled.div`
    display: flex;
`;

const CompanyPeriodWrapStyled = styled.div`
    width: 20rem;
`;

const CompanyNameStyled = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

const YearStyled = styled.div`
    font-size: 1.2rem;
    color: #848484;
`;

const DescriptionStyled = styled.div`

`;

const ProjectTitle = styled.div`
    font-weight: 800;
    border-left: 5px solid #000000;
    padding-left: 1rem;
    margin-top: 0.5rem;
`;

const ProjectPeriod = styled.div`
    margin: 1rem 0 1rem 0;
    color: #848484;
`;

const DescriptionText = styled.div`

`;

const SkillText = styled.div`

`;

const UlStyled = styled.ul`
    padding-left: 1rem;
`;


const experiences = [
    { 
        company: "애드곰인", 
        period: "2024.07 ~ 2025.02",
    },
    { 
        company: "코리아아이티아카데미대구", 
        period: "2023.08 ~ 2024.01" 
    },
    { 
        company: "(주)아이티팩토리", 
        period: "2020.11 ~ 2023.04",
        description: (
            <>
              <ProjectTitle>HACCP사후관리 - K-HACCP</ProjectTitle>
              <ProjectPeriod>2022-06-01 ~ 2023-03-01</ProjectPeriod>
              <DescriptionText>HACCP 사후관리 프로그램 K-HACCP 설계 및 개발</DescriptionText>
              <SkillText>사용 기술:  HTML, Javascript, jQuery, JAVA, Spring Framework, MySQL</SkillText>
              <UlStyled>
                <li>로그인, 회원가입, 관리자, 사용자관리, 컨설턴트 페이지 개발</li>
                <li>포트원 결제 API 연동으로 프로그램 사용 요금 결제 개발</li>
              </UlStyled>
              <ProjectTitle>고객관리프로그램 - 고무신</ProjectTitle>
              <ProjectPeriod>2021-11-01 ~ 2022-05-01</ProjectPeriod>
              <DescriptionText>고객관리 프로그램 고무신 설계 및 개발</DescriptionText>
              <SkillText>사용 기술: HTML, Javascript, jQuery, JAVA, Spring Framework, MariaDB</SkillText>
              <UlStyled>
                <li>로그인, 회원가입, 고객 정보 생성, 고객 정보 조회, 고객 정보 수정, 고객 정보 삭제, 홍보물 업로드 페이지 개발</li>
                <li>알리고 알림톡 API 연동으로 카카오 알림톡 푸시 개발</li>
              </UlStyled>
              <ProjectTitle>ERP, MES프로그램 - BTS(Business Total Solution)</ProjectTitle>
              <ProjectPeriod>2020-11-01 ~ 2021-11-01</ProjectPeriod>
              <DescriptionText>ERP, MES 프로그램 유지보수 및 요구사항 반영</DescriptionText>
              <SkillText>사용 기술: HTML, Javascript, jQuery, JAVA, Spring Framework, MariaDB</SkillText>
              <UlStyled>
                <li>대용량 ERP 데이터 최적화로 인한 성능 개선</li>
                <li>실시간 설비 데이터 모니터링 화면 개발</li>
                <li>IBsheet 플러그인을 이용해 프로그램 유지보수</li>
              </UlStyled>
            </>
          )
    },
];

function Experience(props) {
    return (
        <div>
            {experiences.map((experience, index) => {
                return (
                    <ExperienceStyled key={index}>
                        <CompanyPeriodWrapStyled>
                            <CompanyNameStyled>{experience.company}</CompanyNameStyled>
                            <YearStyled>{experience.period}</YearStyled>
                        </CompanyPeriodWrapStyled>
                        <DescriptionStyled>{experience.description}</DescriptionStyled>
                    </ExperienceStyled>
                )
            })}
        </div>
    )
}

export default Experience;