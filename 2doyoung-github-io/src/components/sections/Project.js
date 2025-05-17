import React from "react";
import styled from "styled-components";

const ProjectWrapStyeld = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 1.5rem;
    margin: 1rem;
`;

const ProjectItemStyeld = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }

    .projectName {
        display: inline-block;
        background-color: #848484;
        color: #FFFFFF;
        font-size: 1.15rem;
        font-weight: 600;
        padding: 0.3rem 0.8rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }

    .period {
        font-size: 0.95rem;
        color: #666;
        margin-bottom: 0.5rem;
    }

    .skills {
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
        color: #444;
    }

    .url {
        font-size: 0.9rem;
        color: #1a73e8;
        word-break: break-all;
    }
`;

const projectList = [
    {
        projectName: "애드곰인(광고 중개 플랫폼)",
        projectPeriod: "2024.07 ~ 2025.02",
        projectSkill: "SpringBoot, Thymeleaf, Vanilla JS, MySQL, AWS(EC2)",
        proejctUrl: "https://www.adgomin.com"
    },
    {
        projectName: "개인 포트폴리오",
        projectPeriod: "2025.04",
        projectSkill: "React, Styled-Components",
        proejctUrl: "https://2doyoung.github.io"
    },
    {
        projectName: "리액트 미니블로그(백엔드 X)",
        projectPeriod: "2025.04",
        projectSkill: "React, Styled-Components",
        proejctUrl: ""
    },
    {
        projectName: "SpringSecurity + JWT",
        projectPeriod: "2025.05",
        projectSkill: "SpringBoot, MySQL, SpringSecurity, JWT",
        proejctUrl: ""
    },
    {
        projectName: "SpringBoot + JPA",
        projectPeriod: "2025.05",
        projectSkill: "SpringBoot, JPA",
        proejctUrl: ""
    }
];

const ProjectList = (props) => {
    const { project } = props

    return (
        <ProjectItemStyeld>
            <div className="projectName">{project.projectName}</div>
            <div className="period">{project.projectPeriod}</div>
            <div className="skills">사용기술 : {project.projectSkill}</div>
            {project.proejctUrl && (
                <div className="url">
                    <a href={project.proejctUrl} target="_blank" rel="noopener noreferrer">
                        {project.proejctUrl}
                    </a>
                </div>
            )}
        </ProjectItemStyeld>
    )
}

function Project(props) {
    return (
        <ProjectWrapStyeld>
            {projectList.map((project, index) => {
                return (
                    <ProjectList key={index} project={project}></ProjectList>
                )
            })}
        </ProjectWrapStyeld>
    )
}

export default Project;