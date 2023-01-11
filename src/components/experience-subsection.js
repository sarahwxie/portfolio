import React from "react";
import ExperienceSection from "./experience-section";

// create a parallax homepage
function ExperienceSubSection(props) {
    return (
        <div>
            <div class="experience-subsection">
                <img alt="Experience" class="experience-subsection-image" src={require('../assets/' + props.img)} />
                <div class="experience-subsection-text">
                    <h4>{props.title}</h4>
                    <p class="experience-description">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSubSection;
