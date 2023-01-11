import React from "react";
import ExperienceSubSection from "./experience-subsection";
import ExperiencePage from "../pages/experience";

// create a parallax homepage
function ExperienceSection(props) {
    return (
        <div class="experience-section">
            <div class="experience-header">
                <h3><span class="blueSwitch">#</span></h3>
                <div class="experience-header-text">
                    <h3> {props.position}</h3>
                    <p class="experience-header-p" >{props.company}</p>
                </div>
            </div>
            <hr></hr>
            <div class="icons">
                {props.img.map(function(imageName, index){
                    return <img alt="Experience" class="experience-icon" src={require('../assets/' + imageName)} />;
                  })}

            </div>
            {props.data.map(function(dataContent, index){
                return <ExperienceSubSection img={dataContent.largeimg} title={dataContent.title} text={dataContent.text}/>;
              })}
        </div>
    )
}

export default ExperienceSection;
