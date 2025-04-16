import React from "react";
import styled from "styled-components";

const ExperienceStyled = styled.div`
    display: flex;
    margin-bottom: 3rem;
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

const ProjectSection = (props) => {
    const { project } = props;

    return (
        <>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectPeriod>{project.period}</ProjectPeriod>
            <DescriptionText>{project.desc}</DescriptionText>
            <SkillText>{project.skills}</SkillText>
            <UlStyled>
                {project.items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </UlStyled>
        </>
    )
}

const ExperienceItem = (props) => {
    const { experience } = props;

    return (
        <>
            <ExperienceStyled>
                <CompanyPeriodWrapStyled>
                    <CompanyNameStyled>{experience.company}</CompanyNameStyled>
                    <YearStyled>{experience.period}</YearStyled>
                </CompanyPeriodWrapStyled>
                <DescriptionStyled>
                    {experience.projects?.map((project, index) => {
                        return <ProjectSection key={index} project={project}></ProjectSection>
                    })}
                </DescriptionStyled>
            </ExperienceStyled>
        </>
    )
}

const experiences = [
    { 
        company: "애드곰인", 
        period: "2024.07 ~ 2025.02",
        projects: [
            {
                title: "애드곰인(광고중개 플랫폼)",
                period: "2024.07 ~ 2025.02",
                desc: "광고중개 플랫폼의 기획부터 개발까지 진행",
                skills: "사용 기술: HTML, CSS, Javascript, JAVA, SpringBoot, MySQL, Thymeleaf, AWS",
                items: [
                    "광고상세설명 등록, 광고포트폴리오 등록",
                    "나이스페이먼츠 결제 연동, 카카오 알림톡 연동",
                    "1대1 실시간 채팅기능",
                    "전체 기획, 백엔드, 프론트엔드 개발"
                ]
            }
        ]
    },
    { 
        company: "코리아아이티아카데미대구", 
        period: "2023.08 ~ 2024.01",
        projects: [
            {
                title: "프로그래밍 언어 JAVA 기초 교육",
                period: "2023.08 ~ 2024.01",
                desc: "",
                skills: "",
                items: [

                ]
            }
        ]
    },
    { 
        company: "(주)아이티팩토리", 
        period: "2020.11 ~ 2023.04",
        projects: [
            {
                title: "HACCP사후관리 - K-HACCP",
                period: "2022-06-01 ~ 2023-03-01",
                desc: "HACCP 사후관리 프로그램 K-HACCP 설계 및 개발",
                skills: "사용 기술: HTML, Javascript, jQuery, JAVA, Spring Framework, MySQL",
                items: [
                  "로그인, 회원가입, 관리자, 사용자관리, 컨설턴트 페이지 개발",
                  "포트원 결제 API 연동으로 프로그램 사용 요금 결제 개발",
                ],
              },
              {
                title: "고객관리프로그램 - 고무신",
                period: "2021-11-01 ~ 2022-05-01",
                desc: "고객관리 프로그램 고무신 설계 및 개발",
                skills: "사용 기술: HTML, Javascript, jQuery, JAVA, Spring Framework, MariaDB",
                items: [
                  "로그인, 회원가입, 고객 정보 생성, 조회, 수정, 삭제, 홍보물 업로드 페이지 개발",
                  "알리고 알림톡 API 연동으로 카카오 알림톡 푸시 개발",
                ],
              },
              {
                title: "ERP, MES프로그램 - BTS(Business Total Solution)",
                period: "2020-11-01 ~ 2021-11-01",
                desc: "ERP, MES 프로그램 유지보수 및 요구사항 반영",
                skills: "사용 기술: HTML, Javascript, jQuery, JAVA, Spring Framework, MariaDB",
                items: [
                  "대용량 ERP 데이터 최적화로 인한 성능 개선",
                  "실시간 설비 데이터 모니터링 화면 개발",
                  "IBsheet 플러그인을 이용해 프로그램 유지보수",
                ],
              },
        ]
    },
];

function Experience(props) {
    return (
        <div>
            {experiences.map((experience, index) => {
                return (
                    <ExperienceItem key={index} experience={experience}></ExperienceItem>
                )
            })}
        </div>
    )
}

export default Experience;