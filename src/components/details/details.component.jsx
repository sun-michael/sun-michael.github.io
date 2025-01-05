import "./details.styles.scss";
import zillowImage from "../../assets/websites/zillow.png";
import zillowImage2 from "../../assets/websites/zillow2.png";
import dadjokesImage from "../../assets/websites/dadjokes.png";

import SkillList from "../skill-list/skill-list.components";
import Button from "../button/button.component";

const Details = () => {
  return (
    <div class="col-10">
      <hr class="border border-danger border-2 opacity-50" />

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <div className="">
          <div class="card mb-3 custom-no-border" id="list-item-1">
            <p class="card-text">
              My journey into software development began in 2021 and has been
              nothing short of exciting. I’ve delved into the fascinating world
              of full-stack development, line by line, unraveling its
              complexities. This path has led to some incredible opportunities,
              such as working on{" "}
              <span className="hover-effect">
                software for the aerospace industry and contributing to a
                Fortune Global 500 company.
              </span>
            </p>
            <p class="card-text">
              With each project, I’ve not only honed my skills but also deepened
              my passion for creating seamless digital experiences. My current
              focus is on crafting scalable web applications using{" "}
              <span className="hover-effect">
                React, Redux, Hooks, JS, Typesript and GraphQL.
              </span>
              The challenge of building intuitive, accessible user interfaces is
              something I thrive on.
            </p>
            <p class="card-text">
              Inspired by Benjamin Hardy’s Future Self book, I am committed to
              pushing the limits of web development and delivering innovative
              solutions.{" "}
              <span className="hover-effect">
                My approach to discipline is multifaceted. I maintain a exercise
                routine, constantly challenge myself with new projects, and
                embrace traveling as a means to broaden my horizons.
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <hr class="border border-danger border-2 opacity-50" />

          <div id="list-item-2">
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary ">2023-2024</p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10 ">
                  <div class="card-body">
                    <h5 class="card-title">Sr Software Developer</h5>
                    <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p>
                    <p class="card-text">
                      Developed a fraud detection API for ctl.io's public-facing
                      self-service registration, blocking 139 harmful entities
                      and preventing potential fraud worth $3 million for Lumen
                      in 2023. Integrated Google address verification and
                      MaxMind data to ensure business registration accuracy and
                      review.
                    </p>
                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button href="https://www.ctl.io" name="ctl.io" />
                      <Button
                        href="https://onramp-ui.ctl.io/#!/login"
                        name="onramp.com"
                      />
                      <Button
                        href="https://www.lumen.com/login/"
                        name="lumen.com"
                      />
                    </p>
                    <h5>Technologies</h5>
                    <SkillList
                      skills={[
                        "HTML",
                        "Scss",
                        "JavaScript",
                        "TypeScript",
                        "Vue.js",
                        "AWS",
                        "Azure",
                        "Papertrail",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2021-2023</p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10 ">
                  <div class="card-body">
                    <h5 class="card-title">Fullstack Developer</h5>
                    <p className="text-body-secondary">@Lumen Technologies</p>
                    <p class="card-text">
                      Improved user interface with a focus on mobile-first and
                      responsive design for ctl.io and onramp-ui.ctl.io web
                      applications, enhancing the in-house CMS to boost customer
                      activation process and enhance fraud detection service.
                      Implemented an automated Microsoft Teams notification
                      system for new signups at ctl.io, resulting in reduced
                      response times and increased efficiency for the sales
                      team. Improved the Vue.js and Chai test code for the Lumen
                      Bare Metal service customer login page, reducing
                      inconsistent login times and standardizing the UI
                      experience.
                    </p>
                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button href="https://www.ctl.io" name="ctl.io" />
                      <Button
                        href="https://onramp-ui.ctl.io/#!/login"
                        name="onramp.com"
                      />
                      <Button
                        href="https://www.lumen.com/login/"
                        name="lumen.com"
                      />
                    </p>

                    <h5>Technologies</h5>

                    <SkillList
                      skills={[
                        "HTML",
                        "JavaScript",
                        "jQuery",
                        "Node.js",
                        "Axios",
                        "Gulp",
                        "AngularJS",
                        "Loopback",
                        "MySQL",
                        "GitHub",
                        "Jenkins",
                        "Jira",
                        "Confluence",
                        "Nexus",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p id="list-item-1" className="mt-3 text-body-secondary">
                    2021
                  </p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Software Engineer Internship</h5>

                    <p className="text-body-secondary">@LMI Aerospace</p>
                    <p class="card-text">
                      Developed and launched 14 SharePoint pages for various
                      teams within the company. Also, collaborated with senior
                      developers to clean up code and enhance logging for
                      real-time data tracking in a .NET and C# web applications.
                    </p>
                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button
                        href="https://www.lmiaerospace.com/"
                        name="lmiaerospace.com"
                      />
                    </p>
                    <SkillList skills={["C#", ".NET"]} />
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p id="list-item-1" className="mt-3 text-body-secondary">
                    2019-2020
                  </p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Research Assistant</h5>
                    <p className="text-body-secondary">
                      @South Dakota State University
                    </p>
                    <p class="card-text">
                      Specialized in deep learning for computer vision with
                      Keras, Python, Linux, and Google Colab, enhancing the
                      U-Net semantic segmentation model to improve detection
                      accuracy of structural damages on bridges. Contributed to
                      advanced research and authored a master's thesis (details
                      in Publication section).
                    </p>

                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button
                        href="https://openprairie.sdstate.edu/etd/3937/"
                        name="AI-image processing"
                      />
                    </p>
                    <SkillList
                      skills={[
                        "ComputerVision",
                        "Linux",
                        "Python",
                        "MachineLearning",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 custom-no-border ">
              <div class="row g-0">
                <div class="col-md-2">
                  <p id="list-item-1" className="mt-3 text-body-secondary">
                    2018-2019
                  </p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Teaching Assistant</h5>
                    <p className="text-body-secondary">
                      @South Dakota State University
                    </p>
                    <p class="card-text">
                      Mentored first-year computer science students for 12 hours
                      weekly, providing guidance in C/C++ programming and data
                      structures during office hours. o Assisted in evaluating
                      and grading assignments for a C++ programming course.
                    </p>

                    <SkillList skills={["C", "C++"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div class="card mb-3 custom-no-border" id="list-item-3">
            <p class="card-text">
              Back in 2017, I decided to try my hand at web development
              andtumbled head first into the rabbit hole of coding and
              full-stack development. Fast-forward to today, I had the privilege
              of building software for an aerospace industry and a fortune
              global corporation.
            </p>
          </div>
        </div> */}
        <div className="">
          <hr class="border border-danger border-2 opacity-50" />
          <div id="list-item-3">
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2024</p>

                  <img
                    src={zillowImage2}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Zillow v2</h5>
                    {/* <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p> */}
                    <p class="card-text">
                      A version 2 of the ongoing Zillow project where the
                      customer can purchase service online.
                    </p>

                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button
                        href="https://zillowv2.netlify.app"
                        name="Zillow V2"
                      />
                    </p>

                    <SkillList
                      skills={[
                        "JavaScript",
                        "Sass",
                        "FunctionalComponent",
                        "Hooks",
                        "GoogleFirebase",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2024</p>

                  <img
                    src={zillowImage}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Zillow v1</h5>
                    {/* <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p> */}
                    <p class="card-text">
                      This personal project mimics Zillow.com’s rental page,
                      showcasing a full-stack web application. The goal is to
                      demonstrate proficiency in front-end and back-end
                      development through a real-world example. The application
                      features a RESTful API and user authentication for secure
                      interactions. Authenticated users can view, edit, and
                      delete rental posts just like on Zillow. The site is
                      deployed on Render for accessibility and operational use.
                    </p>

                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button
                        href="https://primitive-zillow.vercel.app"
                        name="Zillow V1"
                      />
                    </p>

                    <SkillList
                      skills={[
                        "JavaScript",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "MapBox",
                        "GoogleFirebase",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 custom-no-border  ">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2024</p>

                  <img
                    src={dadjokesImage}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Search Jokes</h5>
                    {/* <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p> */}
                    <p class="card-text">
                      Developed a React web application that allows users to
                      search for dad jokes based on their input.
                    </p>

                    <p className="card-text">
                      <h5>Project Links</h5>
                      <Button
                        href="https://class-component-five.vercel.app"
                        name="Search Dad Jokes"
                      />
                    </p>
                    <SkillList skills={["React", "ClassComponent"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="border border-danger border-2 opacity-50" />

        <div class="card mb-3 custom-no-border" id="list-item-4">
          <div class="d-grid gap-2 col-6 mx-auto">
            <a
              class="btn btn btn-outline-danger"
              type="button"
              href="https://sun-michael.github.io/portfolio/resume.pdf"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="footer-mb">
          <div class="card mb-3 custom-no-border">
            <p class="card-text">
              * Built with JavaScript, React, and Bootstrap. Happy coding :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
