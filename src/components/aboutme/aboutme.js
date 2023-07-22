import React from "react";
import "./aboutmestyle.css";
import MyImage from "./MyImage.JPG";

const AboutMe = ({ style = {} }) => {
  return (
    <div name="aboutmesp" className="about" style={style}>
      <div className="container">
        <div className="contentaboutme">
          <h1>
            About <span>Me</span>
          </h1>
          <p>Born in 1999.</p>
          <p>
            1 year at a bilingual English-Preschool in the City of Chisinau.
          </p>
          <p>Studied 9 years in a bilingual romanian-german school.</p>
          <p>
            Attended all 4 Highschool years in Cluj-Napoca. One semester at
            informatics section, the rest at the sociology profile.
          </p>
          <p>
            Attended 2 years at Babes Bolyai University - Bussines
            Administration - present situation: frozen study year.
          </p>
          <h2>
            Official <span>Qualification</span>
          </h2>
          <p>B1/B2 English level certified by Bachelor Exam.</p>
          <p>B2 German level certified by German Embassy through DSD Exam.</p>
          <p>B2 certified level of Russian language.</p>
          <p>3rd place at geography Olympics - regional level 11th class.</p>
          <p>
            2nd and 4th place at Logic Olympics - regional level both times
            (10th and 11th year).
          </p>
          <p>7th place Math Olympics at Country Level (8th class).</p>
          <h2>
            Current <span>Situation</span>
          </h2>
          <p>
            Studying Software Development at Scoala Informala de IT from Iasi,
            Romania.
          </p>
          <p>
            Started with the Front-End Development course which took 4 months.
          </p>
          <p>
            Learned to work in HTML, CSS, Javascript and introduced us to React
            Library, Library which I choosed to work in to display this project.
          </p>
          <p>
            Understood how API works, and being mostly impressed by this
            technology through the course, choose to work on some examples from
            internet and mentor.
          </p>
          <p>
            Went for the Weather API as it seemed the most interesting for me.
          </p>
          <p>
            In parallel, worked and learned from 7 most recommended courses from
            Udemy for Front-End Development Begginers.
          </p>
        </div>
        <img src={MyImage} className="photo"></img>
      </div>
    </div>
  );
};

export default AboutMe;
