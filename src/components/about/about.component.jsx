import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/square-github.svg";
import { ReactComponent as EmailIcon } from "../../assets/square-envelope-solid.svg";

import "./about.styles.scss";
const About = () => {
  return (
    <div className="about-container sticky-top name-mt">
      <h1 className="fw-bold">
        Michael <span id="full-name">Sun</span>
      </h1>
      <h5 className="mb-4">Frontend Developer</h5>
      <div className="col-6 text-body-secondary">
        I bring simple, engaging, and accessible digital experiences.
      </div>
      <div id="list-example" class="list-group mt-5 col-5">
        <a class="list-group-item list-group-item-action" href="#list-item-1">
          ABOUT
        </a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">
          EXPERIENCE
        </a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">
          PROJECTS
        </a>
      </div>
      <div className="col-6 fixed-bottom icon-mb">
        <div class="d-flex justify-content-evenly">
          <a
            href="https://www.linkedin.com/in/michael-sun-4978937a/"
            target="_blank"
            className="links"
          >
            <LinkedinIcon style={{ width: "30px", height: "30px" }} />
          </a>
          <a
            href="https://github.com/sun-michael"
            target="_blank"
            className="links"
          >
            <GithubIcon style={{ width: "30px", height: "30px" }} />
          </a>
          <a href="mailto:sun.m710@gmail.com" className="links">
            <EmailIcon style={{ width: "30px", height: "30px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
