import React from "react";
import styled from "styled-components";

const SkillWrapStyled = styled.div`
    display: flex;
`;

const SkillTitleStyled = styled.div`
    font-size: 2rem;
    font-weight: 600;
    width: 20rem;
    margin-bottom: 2rem;
`;

const SkillListStyled = styled.div`
    margin-left: 1rem;
    font-size: 1.5rem;
    height: 2rem;
    padding: 0rem 1rem;
    border-radius: 5px;
    font-weight: 700;
`;

const skillList = [
    {
      skillTitle: "Language",
      skillSubList: [
        {
          skillName: "Java",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#007396"
        },
        {
          skillName: "JavaScript",
          skillColor: "#333333",
          skillBackgroundColor: "#F7DF1E"
        }
      ]
    },
    {
      skillTitle: "Backend",
      skillSubList: [
        {
          skillName: "Spring",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#6DB33F"
        },
        {
          skillName: "SpringBoot",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#6DB33F"
        },
        {
          skillName: "Gradle",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#02303A"
        },
        {
          skillName: "Maven",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#C71A36"
        },
        {
          skillName: "MyBatis",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#B52C00"
        },
        {
          skillName: "Thymeleaf",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#005F0F"
        }
      ]
    },
    {
      skillTitle: "Frontend",
      skillSubList: [
        {
          skillName: "React",
          skillColor: "#333333",
          skillBackgroundColor: "#61DAFB"
        },
        {
          skillName: "JQuery",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#0769AD"
        }
      ]
    },
    {
      skillTitle: "DevOps",
      skillSubList: [
        {
          skillName: "MySQL",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#4479A1"
        },
        {
          skillName: "MariaDB",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#003545"
        },
        {
          skillName: "AWS EC2",
          skillColor: "#333333",
          skillBackgroundColor: "#FF9900"
        },
        {
          skillName: "Tomcat",
          skillColor: "#333333",
          skillBackgroundColor: "#F8DC75"
        }
      ]
    }
  ];

const SkillSubListItem = (props) => {
    const { skillName, skillColor, skillBackgroundColor } = props;

    return (
        <SkillListStyled style={{color: skillColor, backgroundColor: skillBackgroundColor}}>{skillName}</SkillListStyled>
    )
}

const SkillItem = (props) => {
    const { skills } = props;

    return (
        <SkillWrapStyled>
            <SkillTitleStyled>{skills.skillTitle}</SkillTitleStyled>
            {skills.skillSubList.map((skillSub, index) => {
                return (
                    <SkillSubListItem key={index} skillName={skillSub.skillName} skillColor={skillSub.skillColor} skillBackgroundColor={skillSub.skillBackgroundColor}></SkillSubListItem>
                )
            })}
        </SkillWrapStyled>
    )
}

function Skill(props) {
    return (
        <>
            {skillList.map((skills, index) => {
                return (
                    <SkillItem key={index} skills={skills}></SkillItem>                
                );
            })}    
        </>
    )
}

export default Skill;