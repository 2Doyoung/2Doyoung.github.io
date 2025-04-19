import React from "react";
import styled from "styled-components";

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
    }
];

const ProjectList = (props) => {
    const { project } = props

    return (
        <div>
            <div>{project.projectName}</div>
            <div>{project.projectPeriod}</div>
            <div>{project.projectSkill}</div>
            <div>{project.proejctUrl}</div>
        </div>
    )
}

function Project(props) {
    return (
        <div>
            {projectList.map((project, index) => {
                return (
                    <ProjectList key={index} project={project}></ProjectList> 
                )
            })}
        </div>
    )
}

export default Project;