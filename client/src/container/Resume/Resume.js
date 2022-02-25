import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import index from "react-typical";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <div className="heading-bullet-start">
            <div className="heading-within">
              <span>{props.heading ? props.heading : " "}</span>
                {props.frontDate && props.toDate ? (
                  <div className="heading-date">
                    {props.frontDate + "-" + props.toDate}
                  </div>
                ) : (
                  <div></div>
                )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : " "}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : " "}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logosrc: "education.svg" },
    { label: "Work History", logosrc: "work-history.svg" },
    { label: "Programming Skills", logosrc: "programming-skills.svg" },
    { label: "Projects", logosrc: "projects.svg" },
    { label: "Interests", logosrc: "interests.svg" },
  ];

  const programmingSkilsDetails = [
    { skills: "Javascript", ratingPercentage: 85 },
    { skills: "React JS", ratingPercentage: 40 },
    { skills: "PHP", ratingPercentage: 65 },
    { skills: "HTML & CSS", ratingPercentage: 85 },
    { skills: "MySql", ratingPercentage: 60 },
    { skills: "Java", ratingPercentage: 60 },
    { skills: "Python", ratingPercentage: 75 },
    { skills: "C", ratingPercentage: 70 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { frontDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my skills , projects under one frame.",
      subHeading: "Technologies Used: HTML , CSS & JS",
    },
    {
      title: "An Shopping Website",
      duration: { frontDate: "2020", toDate: "2021" },
      description:
        "A hosted website for users to do their choice , pay and buy things",
      subHeading: "Technologies Used: HTML , CSS , JS , Php & MySql",
    },
    {
      title: "TextUtils",
      duration: { frontDate: "2020", toDate: "2021" },
      description: "A hosted website for users to edit texts.",
      subHeading: "Technologies Used: React JS , Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Engineering & Management , Kolkata"}
        subHeading={"BACHELOR OF TECHNOLOGY (9.63 CGPA)"}
        frontDate={"2018"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"St Pauls' Mission School , Kolkata"}
        subHeading={"COMPUTER SCIENCE (93.83%)"}
        frontDate={"2016"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"Sri Aurobindo Institute of Education , Kolkata"}
        subHeading={"COMPUTER SCIENCE (90.33%)"}
        frontDate={"2014"}
        toDate={"2016"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"EQ TECHNOLOGIC"}
        subHeading={"JAVA DEVELOPER"}
        frontDate={"2022"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          I will be joining EQ TECHNOLOGIC on July 2022 as a a JAVA DEVELOPER
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">- No Projects till now</span>
      </div>
      ,
      {/* <ResumeHeading
            heading = {"TEKIE"}
            subHeading = {"PYTHON MENTOR"}
            frontDate={"2021"}
            toDate={"Present"}/>
            <ResumeHeading
            heading = {"YOU ARE AWESOME"}
            subHeading = {"SALES INTERN"}
            frontDate={"2020"}
            toDate={"2021"}/> */}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkilsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skills}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          frontDate={projectDetails.duration.frontDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        key={index}
        heading="Recitation & Drama"
        description="Received various awards on these areas and have recived trainings from various well known artists."
      />
      <ResumeHeading
        key={index}
        heading="Photography & Editing"
        description="Love to to click and edit photos , videos, music. I have my Youtube Channel with recitations , podcasts and videos edited by me"
      />
      <ResumeHeading
        key={index}
        heading="Teaching"
        description="I have a passion for teaching and thus now is a Python Mentor at Tekie."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logosrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullets-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
