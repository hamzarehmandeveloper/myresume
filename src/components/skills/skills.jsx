import React from "react";
import "./skill.css";
import { Container } from "react-bootstrap";
import HTMLLogo from "../../Assets/html.png";
import CSSLogo from "../../Assets/css.png";
import JSLogo from "../../Assets/javascript.png";
import ReactLogo from "../../Assets/react.png";
import BSLogo from "../../Assets/bootstrap.png";
import MONGOLogo from "../../Assets/mongo.png";
import EXLogo from "../../Assets/express.png";
import NODELogo from "../../Assets/node.png";
import FLUTTERLogo from "../../Assets/flutter.png";
import FBLogo from "../../Assets/firebase.png";
import GITLogo from "../../Assets/git.png";

const skillsList = [
  { text: "HTML", Logo: HTMLLogo },
  { text: "CSS", Logo: CSSLogo },
  { text: "JavaScript", Logo: JSLogo },
  { text: "React", Logo: ReactLogo },
  { text: "Bootstrap", Logo: BSLogo },
  { text: "MongoDB", Logo: MONGOLogo },
  { text: "ExpressJS", Logo: EXLogo },
  { text: "NodeJS", Logo: NODELogo },
  { text: "Flutter", Logo: FLUTTERLogo },
  { text: "Firebase", Logo: FBLogo },
  { text: "Git", Logo: GITLogo },
];

const Skills = () => {
  return (
    <>
      <div className="skills-container" id="skills">
        <Container>
          <h2>Skills</h2>
          <div className="skills-list">
            {skillsList.map((item) => (
              <div key={item.text}>
                <div className="skill">
                  <i className="fab fa-html5"></i>
                  <img src={item.Logo} alt="html" />
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
