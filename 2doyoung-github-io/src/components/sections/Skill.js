import React from "react";
import styled from "styled-components";

const SkillWrapStyled = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const SkillTitleStyled = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  width: 20rem;
  margin-left: 0.5rem;
`;

const SkillContentStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1rem;
  flex: 1;
`;

const SkillListStyled = styled.div`
  font-size: 1.4rem;
  height: 2rem;
  padding: 0rem 1rem;
  border-radius: 5px;
  font-weight: 700;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
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
        },
        {
          skillName: "SpringSecurity",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#6DB33F"
        },
        {
          skillName: "Hibernate",
          skillColor: "#FFFFFF",
          skillBackgroundColor: "#59666C"
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
        <SkillContentStyled>
          {skills.skillSubList.map((skill, index) => (
            <SkillListStyled
              key={index}
              color={skill.skillColor}
              bg={skill.skillBackgroundColor}
            >
              {skill.skillName}
            </SkillListStyled>
          ))}
        </SkillContentStyled>
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